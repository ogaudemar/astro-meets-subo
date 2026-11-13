"""Stand-in for cairosvg.svg2png on Windows without libcairo: renders with headless Edge.
Only the call signature the pose kit uses is supported."""
import subprocess, tempfile, os, pathlib
EDGE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

def svg2png(bytestring=None, url=None, write_to=None, output_width=None, output_height=None, **_):
    svg = bytestring if bytestring is not None else pathlib.Path(url).read_bytes()
    w, h = int(output_width), int(output_height)
    with tempfile.TemporaryDirectory() as d:
        html = pathlib.Path(d) / "page.html"
        html.write_text(
            '<!doctype html><html><head><style>html,body{margin:0;background:transparent}'
            'svg{display:block;width:%dpx;height:%dpx}</style></head><body>%s</body></html>'
            % (w, h, svg.decode("utf-8").split("?>", 1)[-1]), encoding="utf-8")
        out = pathlib.Path(d) / "shot.png"
        subprocess.run([EDGE, "--headless=new", "--disable-gpu", "--hide-scrollbars",
                        "--force-device-scale-factor=1", "--default-background-color=00000000",
                        f"--window-size={w},{h}", f"--screenshot={out}", html.as_uri()],
                       check=True, capture_output=True, timeout=60)
        data = out.read_bytes()
    if write_to:
        pathlib.Path(write_to).write_bytes(data)
    return data
