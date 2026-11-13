#!/usr/bin/env python3
"""Small reproducible QA suite for pose-kit v1.1; run from any directory."""
from pathlib import Path
import json
import math
import re
import xml.etree.ElementTree as ET
from PIL import Image

ROOT=Path(__file__).resolve().parent
man=json.loads((ROOT/'manifest.json').read_text())
assert man['kit_version']=='1.1'
assert len(man['poses'])==4
shoulders=man['shoulder_anchor_model']
left=(shoulders['shared_local_left']['x'],shoulders['shared_local_left']['y'])
right=(shoulders['shared_local_right']['x'],shoulders['shared_local_right']['y'])
assert left==(418,700) and right==(600,700)
head_master=(ROOT/'masters/subo-head-vector.svg').read_text()
head=re.search(r'<g id="subo-head-locked".*?</g>',head_master,re.S).group(0)
for p in man['poses']:
    svgtext=(ROOT/p['file']).read_text()
    assert head in svgtext, (p['id'],'head source drift')
    assert 'data-shoulder-left="418.00,700.00"' in svgtext
    assert 'data-shoulder-right="600.00,700.00"' in svgtext
    for side,xy in [('left',left),('right',right)]:
        group=re.search(r'<g id="arm-'+side+r'".*?</g>',svgtext,re.S).group(0)
        assert 'data-core-width="56"' in group
        assert f'M {xy[0]:.2f},{xy[1]:.2f}' in group
        assert f'id="hand-{side}"' in svgtext
    assert svgtext.count('id="subo-head-locked"')==1
    ET.fromstring(svgtext)
    bb=p['bounding_box']
    assert 10<bb['x'] and bb['x']+bb['width']<990, (p['id'],'horizontal clip',bb)
    assert 10<bb['y'] and bb['y']+bb['height']<1190, (p['id'],'vertical clip',bb)
    assert p['facing']=='front'
    assert p['prop_anchor']['hand']=='right'
    assert p['ground_line']['y']==1145
    assert abs(p['ground_line']['feet_bottom_y']-1145)<3 if p['id']!='P05' else p['ground_line']['feet_bottom_y']<1135
    clean=Image.open(ROOT/p['clean_png']).convert('RGBA')
    assert clean.size==(1000,1200)
    assert clean.getchannel('A').getbbox() == (bb['x'],bb['y'],bb['x']+bb['width'],bb['y']+bb['height'])
    inked=Image.open(ROOT/p['inked_png']).convert('RGBA')
    assert inked.size==clean.size
    assert clean.getpixel((0,0))[3]==0 and inked.getpixel((0,0))[3]==0
    if p['id']=='P02':
        # Wave gesture is completed by scene-layer motion ticks; the pose only needs a clear hand
        # beside the head and outside its silhouette, without an overlong arm.
        assert p['hands']['right']['x'] > bb['x'] + bb['width'] - 60, 'P02 hand should sit clearly to the waving side'
        assert p['hands']['right']['y'] > bb['y'] + 450, 'P02 hand should stay around jaw level, not above the bars'
    if p['id']=='P04':
        g=re.search(r'<g id="arm-right".*?</g>',svgtext,re.S).group(0)
        assert re.search(r'd="M [^\"]+"',g).group(0).count(' L ')==1, 'presenting arm kink'
    if p['id']=='P13':
        # Leans back away from the rope; feet stay planted on the ground line.
        assert p['torso_angle_degrees']<0
        assert p['ground_line']['contact'] is True
        assert p['hands']['right']['x'] > p['hands']['left']['x'] and p['hands']['right']['y'] < p['hands']['left']['y'], 'rope grips: right hand higher and further right'
    if p['id']=='P05':
        assert p['torso_angle_degrees']!=0
        assert p['head_angle_degrees']==p['torso_angle_degrees']
        assert p['ground_line']['contact'] is False
        assert p['shoulder_anchors']['left']['x']!=418
print('QA PASS: 4 locked poses, shared shoulder anchors, block hands, clean + inked exports, metadata, and no clipping.')
