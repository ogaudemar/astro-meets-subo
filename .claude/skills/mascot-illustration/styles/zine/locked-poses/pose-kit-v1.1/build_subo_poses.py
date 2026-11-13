#!/usr/bin/env python3
"""Regenerate the Subo zine pose kit v1.1 from repo-local canonical artwork.

Runs from any working directory:
  python path/to/pose-kit-v1.1/build_subo_poses.py
  python path/to/pose-kit-v1.1/build_subo_poses.py --package

Requires Pillow, NumPy and CairoSVG. No absolute paths or sandbox assumptions.
Inked raster export uses shared finish_scene.py (same finish for a composed scene).
"""
from __future__ import annotations

import argparse
import hashlib
import json
import math
import re
import zipfile
from pathlib import Path

import cairosvg
import numpy as np
from PIL import Image

from finish_scene import finish_image

ROOT = Path(__file__).resolve().parent
ROOT.joinpath('poses').mkdir(exist_ok=True)
ROOT.joinpath('previews').mkdir(exist_ok=True)
HEAD_SOURCE = ROOT / 'masters/subo-head-vector.svg'
ZINE = ROOT.parent.parent  # styles/zine: system.md, references/ and examples/ are shared there
LOGO = ZINE / 'references/logo_2d_authoritative.png'

head_xml = HEAD_SOURCE.read_text(encoding='utf-8')
match = re.search(r'<g id="subo-head-locked".*?</g>', head_xml, flags=re.DOTALL)
if not match:
    raise ValueError('Canonical head group not found in masters/subo-head-vector.svg')
HEAD = match.group(0)

INK = '#191713'
LIME = '#9EFF00'
PINK = '#E1287E'
CANVAS = (1000, 1200)
GROUND_Y = 1145
LEFT_SHOULDER = (418, 700)
RIGHT_SHOULDER = (600, 700)

# All arm paths start at exactly the same corresponding top corner of the torso.
# Arm strokes are a constant width: 56 px lime core (+8 px ink contour per side).
# Legs are 58 px lime core (+8 px ink contour per side).
POSES = [
    # Final approved gesture logic for kit v1.1:
    # - arms keep roughly the 3D reference length
    # - no limb passes behind the head
    # - every hand ends outside the head silhouette with a visible gap
    # - motion ticks / celebration bursts belong to the scene layer, not the pose master
    dict(id='P02', slug='wave', name='Wave / greet', facing='front', gesture='up-right',
         head_angle=0.0, body_angle=0.0,
         arm_left=[LEFT_SHOULDER, (300, 865)],
         arm_right=[RIGHT_SHOULDER, (742, 620)],
         hand_left=(288, 880), hand_right=(780, 606),
         hand_left_angle=35, hand_right_angle=28,
         leg_left=[(460, 923), (460, 1081)],
         leg_right=[(550, 923), (550, 1081)]),
    dict(id='P04', slug='present-right', name='Present right', facing='front', gesture='right',
         head_angle=0.0, body_angle=0.0,
         arm_left=[LEFT_SHOULDER, (300, 865)],
         arm_right=[RIGHT_SHOULDER, (874, 747)],  # straight presenting beam with block hand
         hand_left=(288, 880), hand_right=(902, 747),
         hand_left_angle=35, hand_right_angle=0,
         leg_left=[(460, 923), (460, 1081)],
         leg_right=[(550, 923), (550, 1081)]),
    dict(id='P05', slug='celebrate', name='Jump / celebrate', facing='front', gesture='up-outward',
         head_angle=0.0, body_angle=6.0,  # whole character tilts, torso AND head together
         arm_left=[LEFT_SHOULDER, (258, 655)],
         arm_right=[RIGHT_SHOULDER, (777, 635)],
         hand_left=(232, 648), hand_right=(809, 629),
         hand_left_angle=-12, hand_right_angle=18,
         # Legs start inside the torso (60px back along their own line) so the square-cut
         # stroke end is covered by the torso; starting at its edge left the cut visible.
         leg_left=[(506, 887), (342, 1015)],
         leg_right=[(502, 887), (660, 1011)]),
    # P13 haul (added 2026-11-13 for the file uploads hero): both hands on a rope that runs
    # diagonally up to the right, toward a pulley drawn in the scene. The upper body leans
    # back 12 degrees as one unit (head, torso, arms); the legs are drawn outside that
    # rotation so the feet stay planted on the ground line, braced apart. Arms keep the
    # reference length: the left arm crosses in front of the torso to the lower grip, and
    # the right hand holds the rope below and clear of the head's corner.
    dict(id='P13', slug='haul', name='Haul / pull a rope', facing='front', gesture='pull-down-left',
         head_angle=0.0, body_angle=-12.0,  # 8 did not read as effort
         arm_left=[LEFT_SHOULDER, (610, 840)],
         arm_right=[RIGHT_SHOULDER, (800, 740)],
         hand_left=(610, 840), hand_right=(800, 740),
         hand_left_angle=-28, hand_right_angle=-28,
         legs_world=True,  # legs and boots ignore body_angle
         leg_left=[(480, 900), (400, 1081)],   # back leg, braced behind
         leg_right=[(560, 890), (650, 1081)],  # front leg, braced toward the rope
         boot_shift=(-57, 88)),
]


def coord(pt):
    return f'{pt[0]:.2f},{pt[1]:.2f}'


def path_for_points(points):
    return 'M ' + ' L '.join(coord(p) for p in points)


def thick_limb(points, ident, width):
    path = path_for_points(points)
    return (f'<g id="{ident}" data-core-width="{width}">'
            f'<path d="{path}" fill="none" stroke="{INK}" stroke-width="{width+16}" '
            'stroke-linecap="butt" stroke-linejoin="bevel" />'
            f'<path d="{path}" fill="none" stroke="{LIME}" stroke-width="{width}" '
            'stroke-linecap="butt" stroke-linejoin="bevel" />'
            '</g>')


def closed_limb(points, ident, width):
    """A limb as a closed, fully outlined quadrilateral (same outer width as thick_limb).

    Used for P05's diagonal legs: a stroked line has square-cut ends with no ink on the
    end face, and the jumping boots are narrower than the leg, so the cut showed beside
    the boot. A closed shape is outlined on every side, so any end that shows is inked."""
    (x1, y1), (x2, y2) = points
    L = math.hypot(x2 - x1, y2 - y1)
    px, py = -(y2 - y1) / L, (x2 - x1) / L
    h = (width + 8) / 2  # polygon edge sits mid-stroke: 8px stroke -> lime core = width
    pts = [(x1 + px * h, y1 + py * h), (x2 + px * h, y2 + py * h),
           (x2 - px * h, y2 - py * h), (x1 - px * h, y1 - py * h)]
    d = 'M ' + ' L '.join(coord(p) for p in pts) + ' Z'
    return (f'<g id="{ident}" data-core-width="{width}">'
            f'<path d="{d}" fill="{LIME}" stroke="{INK}" stroke-width="8" stroke-linejoin="miter" />'
            '</g>')


def arm_start_cap(points, width):
    """An ink line across an arm's starting end. P13's left arm crosses the torso, so its
    square-cut start sits in plain view; this inks the end face like the rest of the limb."""
    (x1, y1), (x2, y2) = points[0], points[1]
    L = math.hypot(x2 - x1, y2 - y1)
    px, py = -(y2 - y1) / L, (x2 - x1) / L
    h = width / 2 + 8
    return (f'<path d="M {coord((x1 + px * h, y1 + py * h))} L {coord((x1 - px * h, y1 - py * h))}" '
            f'fill="none" stroke="{INK}" stroke-width="8" stroke-linecap="square"/>')


def hand(pt, ident, angle):
    x,y=pt
    return (f'<g id="{ident}" data-hand-anchor="{coord(pt)}" '
            f'transform="rotate({angle} {x} {y})">'
            f'<rect x="{x-29}" y="{y-29}" width="58" height="58" rx="2" '
            f'fill="{LIME}" stroke="{INK}" stroke-width="9"/>'
            '</g>')


def standing_boots():
    return (f'<path id="boot-left" d="M424,1064 L495,1064 L498,1139 L416,1139 L416,1103 Z" fill="{LIME}" stroke="{INK}" stroke-width="10" stroke-linejoin="bevel"/>'
            f'<path id="boot-right" d="M519,1064 L590,1064 L605,1139 L523,1139 L523,1103 Z" fill="{LIME}" stroke="{INK}" stroke-width="10" stroke-linejoin="bevel"/>')


def shifted_boots(dx_left, dx_right):
    # The standing boots, moved sideways to sit under braced legs.
    return (f'<path id="boot-left" transform="translate({dx_left} 0)" d="M424,1064 L495,1064 L498,1139 L416,1139 L416,1103 Z" fill="{LIME}" stroke="{INK}" stroke-width="10" stroke-linejoin="bevel"/>'
            f'<path id="boot-right" transform="translate({dx_right} 0)" d="M519,1064 L590,1064 L605,1139 L523,1139 L523,1103 Z" fill="{LIME}" stroke="{INK}" stroke-width="10" stroke-linejoin="bevel"/>')


def jumping_boots():
    return (f'<path id="boot-left" d="M311,990 L368,1032 L333,1080 L270,1036 L288,1001 Z" fill="{LIME}" stroke="{INK}" stroke-width="10" stroke-linejoin="bevel"/>'
            f'<path id="boot-right" d="M640,994 L690,1018 L718,1058 L661,1093 L619,1052 Z" fill="{LIME}" stroke="{INK}" stroke-width="10" stroke-linejoin="bevel"/>')


def rounded_polygon(points, r):
    """Closed path through `points` with every corner rounded by radius `r`."""
    n = len(points)
    def towards(p, q, d):
        L = math.hypot(q[0] - p[0], q[1] - p[1])
        return (p[0] + (q[0] - p[0]) * d / L, p[1] + (q[1] - p[1]) * d / L)
    parts = []
    for i in range(n):
        prev, cur, nxt = points[i - 1], points[i], points[(i + 1) % n]
        a, c = towards(cur, prev, r), towards(cur, nxt, r)
        parts.append(('M ' if i == 0 else 'L ') + coord(a) + ' Q ' + coord(cur) + ' ' + coord(c))
    return ' '.join(parts) + ' Z'


# The head's bottom edge sits at y=691 (translate 50 + 943 x 0.68). The torso's top is
# tucked behind it at y=672, so only the head's pink shows where they meet: an invisible
# neck, as on the 3D rig (operator, 2026-11-12). Its top used to sit at y=700, below the
# head, and its pink band showed under the head's as a "double neck".
TORSO_TOP = 672


def torso():
    # Shoulder anchors stay at (418,700) and (600,700): they now sit on the torso's sides,
    # just under the head, which is where the arms already started.
    d = rounded_polygon([(418, TORSO_TOP), (600, TORSO_TOP), (606, 930), (410, 930)], 18)
    return (f'<g id="torso" data-shoulder-left="{coord(LEFT_SHOULDER)}" '
            f'data-shoulder-right="{coord(RIGHT_SHOULDER)}">'
            # Pink outline only, no black (operator, 2026-11-12), and thin like the 3D
            # reference's torso (about 40% of the head's 37px border), not the logo-width
            # border, which looked too heavy on the body.
            f'<path d="{d}" fill="{LIME}" stroke="{PINK}" stroke-width="15" stroke-linejoin="round"/>'
            '</g>')


def pose_svg(p):
    is_jump=p['id']=='P05'
    legs_world = p.get('legs_world', False)
    limb = closed_limb if (is_jump or legs_world) else thick_limb
    legs=limb(p['leg_left'],'leg-left',58)+limb(p['leg_right'],'leg-right',58)
    if is_jump:
        boots=jumping_boots()
    elif legs_world:
        boots=shifted_boots(*p['boot_shift'])
    else:
        boots=standing_boots()
    arms=(thick_limb(p['arm_left'],'arm-left',56)
          +thick_limb(p['arm_right'],'arm-right',56))
    hands=(hand(p['hand_left'],'hand-left',p['hand_left_angle'])
           +hand(p['hand_right'],'hand-right',p['hand_right_angle']))
    head=f'<g id="head-placement" transform="translate(160 50) scale(0.68) rotate({p["head_angle"]} 500 500)">{HEAD}</g>'
    whole = f' transform="rotate({p["body_angle"]} 505 800)"' if p['body_angle'] else ''
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1200" viewBox="0 0 1000 1200" role="img" aria-label="Subo {p['name']}">
<title>{p['id']}: Subo {p['name']}</title>
<desc>Editable front-facing Subo pose. Canonical face locked. Two constant-width arms with distinct square block hands. Both arms start at the same two torso-top shoulder anchors. Transparent background, no props.</desc>
<metadata>Subo zine pose kit v1.1; approved locked clean master; head reference: logo_2d_authoritative.png; editable SVG.</metadata>
{'<g id="legs-and-feet">' + legs + boots + '</g>' if legs_world else ''}
<g id="character"{whole}>
 {'' if legs_world else '<g id="legs-and-feet">' + legs + boots + '</g>'}
 {torso()}
 {head}
 <g id="arms-front">{arms}{arm_start_cap(p['arm_left'], 56) if legs_world else ''}</g>
 {hands}
</g>
</svg>'''


def rotate_point(pt, angle, pivot=(505,800)):
    a=math.radians(angle)
    x,y=pt
    px,py=pivot
    return (round(px+(x-px)*math.cos(a)-(y-py)*math.sin(a),2),
            round(py+(x-px)*math.sin(a)+(y-py)*math.cos(a),2))


def bbox_alpha(img):
    b=img.getchannel('A').getbbox()
    return dict(x=b[0],y=b[1],width=b[2]-b[0],height=b[3]-b[1]) if b else None


def make_pose_metadata(p, fg):
    angle=p['body_angle']
    tr=lambda xy: rotate_point(xy,angle)
    feet_bottom=fg.getchannel('A').getbbox()[3]
    hands={}
    for side in ('left','right'):
        x,y=tr(p[f'hand_{side}'])
        hands[side]=dict(x=x,y=y,units='viewBox_px')
    return dict(id=p['id'],name=p['name'],file=f'poses/{p["id"]}-{p["slug"]}.svg',
                clean_png=f'previews/{p["id"]}-{p["slug"]}-transparent.png',
                inked_png=f'previews/{p["id"]}-{p["slug"]}-inked-transparent.png',
                facing=p['facing'],gesture_direction=p['gesture'],
                head_angle_degrees=p['head_angle']+angle,
                torso_angle_degrees=angle,
                shoulder_anchors={
                    'left':dict(zip(('x','y'),tr(LEFT_SHOULDER))),
                    'right':dict(zip(('x','y'),tr(RIGHT_SHOULDER)))},
                hands=hands,
                prop_anchor=dict(hand='right',**hands['right']),
                bounding_box=bbox_alpha(fg),
                ground_line=dict(y=GROUND_Y,units='viewBox_px',contact=not p['id']=='P05',
                                 feet_bottom_y=feet_bottom,
                                 note=('Scene baseline; character is airborne in P05' if p['id']=='P05'
                                       else 'Feet align with scene baseline (stroke included)')))


def contact_sheet(items, offwhite=(247,240,223), inked=False):
    # Finish AFTER composition, so Subo and the entire paper receive one grain pass.
    W,H = 2220,850
    paper=Image.new('RGBA',(W,H),(*offwhite,255))
    for i,fg in enumerate(items):
        f=fg.copy()
        f.thumbnail((700,820),Image.Resampling.LANCZOS)
        x=(i*740)+(740-f.width)//2
        y=(H-f.height)//2
        paper.alpha_composite(f,(x,y))
    if inked:
        paper=finish_image(paper,roughen=True,grain=True,seed=1211)
    return paper.convert('RGB')


def main():
    argp=argparse.ArgumentParser()
    argp.add_argument('--package',action='store_true',help='Write a zip next to the pose-kit folder')
    args=argp.parse_args()
    imgs=[]
    metadata=[]
    for p in POSES:
        slug=f'{p["id"]}-{p["slug"]}'
        svgpath=ROOT/'poses'/f'{slug}.svg'
        svgpath.write_text(pose_svg(p),encoding='utf-8')
        out=ROOT/'previews'/f'{slug}-transparent.png'
        cairosvg.svg2png(bytestring=svgpath.read_bytes(),write_to=str(out),output_width=1000,output_height=1200)
        fg=Image.open(out).convert('RGBA')
        imgs.append(fg)
        ink=finish_image(fg,roughen=True,grain=True,seed=1142)
        ink.save(ROOT/'previews'/f'{slug}-inked-transparent.png',optimize=True)
        paper=Image.new('RGBA',fg.size,(247,240,223,255))
        paper.alpha_composite(fg)
        paper.convert('RGB').save(ROOT/'previews'/f'{slug}-paper.webp',quality=90,method=5)
        metadata.append(make_pose_metadata(p,fg))
    clean_sheet=contact_sheet(imgs)
    clean_sheet.save(ROOT/'previews/pose-sheet-clean.png',optimize=True)
    clean_sheet.save(ROOT/'previews/pose-sheet-clean.webp',quality=93,method=5)
    inked_sheet=contact_sheet(imgs,inked=True)
    inked_sheet.save(ROOT/'previews/pose-sheet-inked.png',optimize=True)
    inked_sheet.save(ROOT/'previews/pose-sheet-inked.webp',quality=93,method=5)
    manifest={
        'kit_version':'1.1','spec_version':'1.0',
        'kit_status':'approved_locked',
        'approval_note':'Approved 2026-11-12 after gesture/proportion revisions: shorter reference-length arms, clear hand separation from head silhouette, scene-layer motion marks.',
        'canvas':dict(width=1000,height=1200,units='viewBox_px',origin='top-left'),
        'head_master':'masters/subo-head-vector.svg',
        'source_logo':'references/logo_2d_authoritative.png',
        'source_logo_sha256':hashlib.sha256(LOGO.read_bytes()).hexdigest(),
        'shoulder_anchor_model':dict(
            shared_local_left={'x':LEFT_SHOULDER[0],'y':LEFT_SHOULDER[1]},
            shared_local_right={'x':RIGHT_SHOULDER[0],'y':RIGHT_SHOULDER[1]},
            note='Exactly identical in local torso coordinates; transformed together with torso for P05.'),
        'hand_anchor_semantics':'Center of square block hand; use as prop attachment point in the unscaled 1000x1200 SVG coordinate system.',
        'bounding_box_semantics':'Tight alpha bounds of rasterized clean SVG, including ink outer stroke; x/y/width/height in 1000x1200 viewBox units.',
        'direction_semantics':'Facing denotes orientation of face (front). Gesture direction is separate. Do not mirror the face.',
        'ground_line_semantics':'Common scene ground baseline. For jumping pose, contact=false and feet_bottom_y is the airborne foot extent.',
        'poses':metadata,
        'finish':'Use clean SVG assets when composing scenes, then run finish_scene.py once on entire composite PNG. Standalone inked PNGs are convenience one-character exports; do not re-grain them.',
        'character_only':True,'uncolored_world_required':True
    }
    (ROOT/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf-8')
    if args.package:
        zpath=ROOT.parent/(ROOT.name+'.zip')
        with zipfile.ZipFile(zpath,'w',compression=zipfile.ZIP_DEFLATED) as z:
            for path in sorted(ROOT.rglob('*')):
                if path.is_file() and not path.name.startswith('.'):
                    z.write(path,arcname=f'{ROOT.name}/{path.relative_to(ROOT)}')
        print('wrote',zpath)
    print('built',ROOT)
    for p in metadata:
        print(p['id'],p['bounding_box'],p['hands'],p['ground_line'])


if __name__=='__main__':
    main()
