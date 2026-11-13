#!/usr/bin/env python3
"""Apply a restrained zine ink finish to a *finished* Subo scene.

Use clean pose SVGs for composition; run this step ONCE after compositing
Subo, monochrome props, and paper. It includes Subo in the grain pass.

Examples (from any directory):
    python path/to/pose-kit-v1.1/finish_scene.py scene.png scene-inked.png

Requires Pillow, NumPy, and OpenCV (optional; Pillow fallback for morphology).
"""
from __future__ import annotations

import argparse
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

try:
    import cv2
except ImportError:
    cv2 = None


def finish_image(image: Image.Image, *, roughen=True, grain=True, seed=1211):
    """Return an RGBA image with restrained monochrome edge wear + one grain pass.

    Geometrically exact character source stays unchanged; only raster output is
    modified. Eye/mouth fills are protected: edge wear targets near-black ink
    only, never magenta/cream/salmon. Noise affects the whole final composite.
    """
    rng=np.random.default_rng(seed)
    pix=np.asarray(image.convert('RGBA')).copy()
    h,w=pix.shape[:2]
    alpha=pix[:,:,3]
    visible=alpha>24
    dark=(pix[:,:,0]<60)&(pix[:,:,1]<60)&(pix[:,:,2]<60)&(alpha>100)

    if roughen:
        dark8=dark.astype('uint8')*255
        if cv2 is not None:
            # Irregularity is limited to the outer 1–2 pixels of printed ink,
            # NOT to the logo's colored face shapes.
            ker=np.ones((3,3),np.uint8)
            dil=cv2.dilate(dark8,ker,iterations=1)>0
            ero=cv2.erode(dark8,ker,iterations=1)>0
        else:
            maskimg=Image.fromarray(dark8)
            dil=np.asarray(maskimg.filter(ImageFilter.MaxFilter(3)))>0
            ero=np.asarray(maskimg.filter(ImageFilter.MinFilter(3)))>0
        outer=dil & (~dark)
        inner=dark & (~ero)
        # Correlated low-amplitude ink-edge texture gives a lightly xeroxed
        # contour rather than geometric-perfect vector edges.
        coarse=rng.random((max(2,h//3+2),max(2,w//3+2)))
        noise=np.asarray(Image.fromarray((coarse*255).astype('uint8')).resize((w,h),Image.Resampling.BILINEAR))/255.0
        paper_around=outer & (noise>0.66)
        # Fine black fringe along the outside of dark outlines; for transparent
        # output these become translucent dark pixels.
        pix[paper_around,0]=26
        pix[paper_around,1]=23
        pix[paper_around,2]=21
        pix[paper_around,3]=np.maximum(pix[paper_around,3],np.uint8(110))
        flecks=inner & (noise<0.25)
        # Very small edge thinning, not full holes: retains readability.
        pix[flecks,0:3]=np.minimum(pix[flecks,0:3]+np.uint8(26),255)

    if grain:
        # A single shared noise field is applied to the *whole finished image*,
        # including Subo and any composited props and paper (when present).
        # Do not apply this to already-inked assets a second time.
        gr=rng.normal(0,2.8,size=(h,w,1)).astype('float32')
        rgb=np.asarray(pix[:,:,:3],dtype=np.float32)
        rgb=np.clip(rgb+gr,0,255).astype('uint8')
        pix[visible,:3]=rgb[visible]

    return Image.fromarray(pix,mode='RGBA')


def main():
    ap=argparse.ArgumentParser(description=__doc__)
    ap.add_argument('input',type=Path)
    ap.add_argument('output',type=Path)
    ap.add_argument('--seed',type=int,default=1211)
    ap.add_argument('--no-roughen',action='store_true')
    ap.add_argument('--no-grain',action='store_true')
    args=ap.parse_args()
    source=Image.open(args.input).convert('RGBA')
    result=finish_image(source,roughen=not args.no_roughen,grain=not args.no_grain,seed=args.seed)
    args.output.parent.mkdir(parents=True,exist_ok=True)
    result.save(args.output,optimize=True)
    print('inked output:',args.output)


if __name__=='__main__':
    main()
