# Redraws the MIAE 221 past-exam figures that only survive as unclear photos or marked-up scans, as clean SVGs
# in public/exam-figures/miae221/. Every point, intercept and curve value comes from the question it belongs to
# (gates/miae221.ts, the verified answer and its note), so the drawing gives exactly the keyed answer.
#   python scripts/figures/miae221-exam-figures.py
import math
import os

OUT = os.path.join(os.path.dirname(__file__), '..', '..', 'public', 'exam-figures', 'miae221')
INK = '#1e293b'
MUTED = '#64748b'
FONT = "font-family='Inter, Segoe UI, Arial, sans-serif'"
COLORS = {'A': '#2563eb', 'B': '#d97706', 'C': '#db2777', 'D': '#059669'}


def svg(w, h, body):
    return (f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {w} {h}' width='{w}' height='{h}' {FONT}>"
            f"<rect width='{w}' height='{h}' fill='#fff'/>"
            "<defs><marker id='arr' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'>"
            "<path d='M0,0 L10,5 L0,10 z' fill='context-stroke'/></marker>"
            f"<marker id='ax' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='6' markerHeight='6' orient='auto'><path d='M0,0 L10,5 L0,10 z' fill='{INK}'/></marker></defs>"
            f"{body}</svg>")


def frac(x, y, num, den, color=INK, size=17, anchor='middle'):
    """A stacked fraction centred at (x, y)."""
    w = size * 0.75
    dx = {'middle': 0, 'start': w / 2, 'end': -w / 2}[anchor]
    cx = x + dx
    return (f"<text x='{cx:.1f}' y='{y - 3:.1f}' font-size='{size}' text-anchor='middle' fill='{color}' font-weight='600'>{num}</text>"
            f"<line x1='{cx - w / 2:.1f}' y1='{y + 1:.1f}' x2='{cx + w / 2:.1f}' y2='{y + 1:.1f}' stroke='{color}' stroke-width='1.6'/>"
            f"<text x='{cx:.1f}' y='{y + size + 1:.1f}' font-size='{size}' text-anchor='middle' fill='{color}' font-weight='600'>{den}</text>")


def text(x, y, s, size=18, color=INK, weight=600, anchor='middle', style=''):
    return f"<text x='{x:.1f}' y='{y:.1f}' font-size='{size}' text-anchor='{anchor}' fill='{color}' font-weight='{weight}' {style}>{s}</text>"


# ── the unit cube in oblique projection: x toward the viewer (lower left), y right, z up ─────────────────────
class Cube:
    def __init__(self, ox, oy, s, depth=(0.68, 0.40)):
        """depth: how far one unit of x moves left and down on the page."""
        self.ox, self.oy, self.s, self.depth = ox, oy, s, depth

    def p(self, x, y, z):
        s, (kx, ky) = self.s, self.depth
        return (self.ox + s * (y - kx * x), self.oy + s * (-z + ky * x))

    def line(self, a, b, color=INK, width=2.0, dash=None, marker=None):
        (x1, y1), (x2, y2) = self.p(*a), self.p(*b)
        d = f" stroke-dasharray='{dash}'" if dash else ''
        m = f" marker-end='url(#{marker})'" if marker else ''
        return f"<line x1='{x1:.1f}' y1='{y1:.1f}' x2='{x2:.1f}' y2='{y2:.1f}' stroke='{color}' stroke-width='{width}' stroke-linecap='round'{d}{m}/>"

    def poly(self, pts, fill, opacity, stroke):
        d = ' '.join(f'{x:.1f},{y:.1f}' for x, y in (self.p(*q) for q in pts))
        return f"<polygon points='{d}' fill='{fill}' fill-opacity='{opacity}' stroke='{stroke}' stroke-width='2.2' stroke-linejoin='round'/>"

    def frame(self, axes=True):
        hidden = [((0, 0, 0), (1, 0, 0)), ((0, 0, 0), (0, 1, 0)), ((0, 0, 0), (0, 0, 1))]
        seen = [((1, 0, 0), (1, 1, 0)), ((1, 1, 0), (0, 1, 0)), ((1, 0, 0), (1, 0, 1)), ((1, 1, 0), (1, 1, 1)), ((0, 1, 0), (0, 1, 1)),
                ((1, 0, 1), (1, 1, 1)), ((0, 0, 1), (0, 1, 1)), ((1, 0, 1), (0, 0, 1)), ((1, 1, 1), (0, 1, 1))]
        out = [self.line(a, b, '#94a3b8', 1.6, '6 5') for a, b in hidden] + [self.line(a, b, INK, 2.0) for a, b in seen]
        if axes:
            out += [self.line((0, 0, 1), (0, 0, 1.32), INK, 1.6, marker='ax'), self.line((0, 1, 0), (0, 1.38, 0), INK, 1.6, marker='ax'),
                    self.line((1, 0, 0), (1.45, 0, 0), INK, 1.6, marker='ax')]
            for lab, q, dx, dy in (('z', (0, 0, 1.36), 0, -6), ('y', (0, 1.42, 0), 14, 6), ('x', (1.5, 0, 0), -10, 12)):
                x, y = self.p(*q)
                out.append(text(x + dx, y + dy, lab, 21, INK, 500, style="font-style='italic'"))
            x, y = self.p(0, 0, 0)
            out.append(f"<circle cx='{x:.1f}' cy='{y:.1f}' r='3.5' fill='{INK}'/>")
            out.append(text(x - 14, y - 8, 'O', 14, MUTED, 600))
        return ''.join(out)

    def tick(self, q, num, den, side, color=INK):
        """A fraction label next to point q on an edge; side = (dx, dy) offset in px."""
        x, y = self.p(*q)
        return f"<circle cx='{x:.1f}' cy='{y:.1f}' r='3.2' fill='{color}'/>" + frac(x + side[0], y + side[1], num, den, color)


def directions():
    c = Cube(320, 410, 280)
    body = c.frame()
    arrows = {  # tail → head, straight from W26 Q1–2
        'A': ((1, 1, 0), (0.25, 0, 1)),
        'B': ((1, 0, 2 / 3), (0, 1, 1 / 3)),
        'C': ((0, 1, 0.5), (1, 0, 0.25)),
        'D': ((0, 1, 0.75), (0.75, 0, 0)),
    }
    for k, (t, h) in arrows.items():
        body += c.line(t, h, COLORS[k], 3.2, marker='arr')
    # where the letters sit along each arrow (fraction of the way from tail to head) and their nudge
    for k, f, dx, dy in (('A', 0.62, 16, 4), ('B', 0.28, 0, -12), ('C', 0.2, 2, -12), ('D', 0.36, -4, -14)):
        t, h = arrows[k]
        x, y = c.p(*[t[i] + f * (h[i] - t[i]) for i in range(3)])
        body += text(x + dx, y + dy, k, 22, COLORS[k], 800)
    # the fractions the question needs, on their edges
    body += c.tick((1, 0, 2 / 3), 2, 3, (-26, -8))
    body += c.tick((1, 0, 0.25), 1, 4, (-26, -8))
    body += c.tick((0, 1, 0.75), 3, 4, (26, -8))
    body += c.tick((0, 1, 0.5), 1, 2, (26, -8))
    body += c.tick((0, 1, 1 / 3), 1, 3, (26, -8))
    body += c.tick((0.25, 0, 1), 1, 4, (-6, -34))
    body += c.tick((0.75, 0, 0), 3, 4, (-22, 18))
    return svg(780, 630, body)


def planes_ab():
    c = Cube(320, 410, 280)
    body = c.frame()
    body += c.poly([(0, 0, 1), (1, 0, 1), (1, 1, 0.75), (0, 1, 0.75)], COLORS['A'], 0.28, COLORS['A'])  # z = 1 − y/4
    body += c.poly([(0, 0, 0), (1, 0, 0), (1, 1, 1 / 3), (0, 1, 1 / 3)], COLORS['B'], 0.30, COLORS['B'])  # z = y/3
    x, y = c.p(0.5, 0.45, 0.89)
    body += text(x, y + 7, 'A', 26, COLORS['A'], 800)
    x, y = c.p(0.55, 0.55, 0.18)
    body += text(x, y + 7, 'B', 26, COLORS['B'], 800)
    body += c.tick((0, 1, 0.75), 3, 4, (26, -8))
    body += c.tick((0, 1, 1 / 3), 1, 3, (26, -8))
    return svg(780, 630, body)


def planes_cd():
    c = Cube(320, 410, 280)
    body = c.frame()
    body += c.poly([(0, 0.25, 0), (1, 0.75, 0), (1, 0.75, 1), (0, 0.25, 1)], COLORS['D'], 0.25, COLORS['D'])  # −x + 2y = ½
    body += c.poly([(0, 0, 1), (0, 1, 1 / 3), (1, 1, 1)], COLORS['C'], 0.30, COLORS['C'])  # 2x − 2y − 3z = −3
    x, y = c.p(0.3, 0.72, 0.84)
    body += text(x, y + 7, 'C', 26, COLORS['C'], 800)
    x, y = c.p(0.55, 0.52, 0.35)
    body += text(x - 14, y + 7, 'D', 26, COLORS['D'], 800)
    body += c.tick((0, 1, 1 / 3), 1, 3, (26, -8))
    body += c.tick((0, 0.25, 1), 1, 4, (0, -36))
    body += c.tick((1, 0.75, 0), 3, 4, (0, 30))
    return svg(780, 630, body)


def f17_plane():
    """Final 2017 Q1: the plane cutting x at 1, parallel to y, cutting z at 1/2 (the answer is (102))."""
    c = Cube(320, 410, 280)
    body = c.frame()
    body += c.poly([(1, 0, 0), (1, 1, 0), (0, 1, 0.5), (0, 0, 0.5)], '#2563eb', 0.25, '#2563eb')
    body += c.tick((0, 0, 0.5), 1, 2, (-26, -8))
    body += c.tick((0, 1, 0.5), 1, 2, (26, -8))
    for q, lab, dx, dy in (((1, 0.5, 0), 'a', 0, 26), ((0.5, 1, 0), 'a', 22, 18), ((1, 1, 0.5), 'a', 16, 6)):
        x, y = c.p(*q)
        body += text(x + dx, y + dy, lab, 19, MUTED, 600, style="font-style='italic'")
    return svg(780, 630, body)


# ── W26 Q16–20: engineering stress–strain curve with a low-strain inset ──────────────────────────────────────
E = 58000.0  # MPa
KNOTS = [(0.0030, 174), (0.00345, 200), (0.0050, 255), (0.00709, 295), (0.010, 305), (0.020, 316), (0.030, 326), (0.050, 345), (0.070, 356),
         (0.090, 360), (0.110, 356), (0.130, 341), (0.150, 314), (0.159, 290)]


def pchip(pts):
    """Monotone cubic (Fritsch–Carlson) through pts; returns f(x)."""
    xs, ys = [p[0] for p in pts], [p[1] for p in pts]
    n = len(xs)
    h = [xs[i + 1] - xs[i] for i in range(n - 1)]
    d = [(ys[i + 1] - ys[i]) / h[i] for i in range(n - 1)]
    m = [0.0] * n
    m[0], m[-1] = d[0], d[-1]
    for i in range(1, n - 1):
        if d[i - 1] * d[i] <= 0:
            m[i] = 0.0
        else:
            w1, w2 = 2 * h[i] + h[i - 1], h[i] + 2 * h[i - 1]
            m[i] = (w1 + w2) / (w1 / d[i - 1] + w2 / d[i])

    def f(x):
        if x <= xs[0]:
            return E * x  # straight elastic line up to the first knot
        for i in range(n - 1):
            if x <= xs[i + 1]:
                t = (x - xs[i]) / h[i]
                h00, h10, h01, h11 = 2 * t**3 - 3 * t**2 + 1, t**3 - 2 * t**2 + t, -2 * t**3 + 3 * t**2, t**3 - t**2
                return h00 * ys[i] + h10 * h[i] * m[i] + h01 * ys[i + 1] + h11 * h[i] * m[i + 1]
        return ys[-1]
    return f


def stress_strain():
    f = pchip(KNOTS)
    W, H = 900, 600
    # main plot
    L, T, R, B = 90, 30, 870, 520
    sx = lambda e: L + (R - L) * e / 0.2
    sy = lambda s: B - (B - T) * s / 400
    out = [f"<rect x='{L}' y='{T}' width='{R - L}' height='{B - T}' fill='none' stroke='{INK}' stroke-width='1.6'/>"]
    for i in range(0, 21):
        e = i * 0.01
        major = i % 5 == 0
        out.append(f"<line x1='{sx(e):.1f}' y1='{B}' x2='{sx(e):.1f}' y2='{B - (10 if major else 5)}' stroke='{INK}' stroke-width='1.3'/>")
        if major:
            out.append(text(sx(e), B + 24, '0' if i == 0 else f'{e:.2f}', 16, INK, 500))
    for s in range(0, 401, 50):
        major = s % 100 == 0
        out.append(f"<line x1='{L}' y1='{sy(s):.1f}' x2='{L + (10 if major else 5)}' y2='{sy(s):.1f}' stroke='{INK}' stroke-width='1.3'/>")
        if major:
            out.append(text(L - 10, sy(s) + 5, str(s), 16, INK, 500, 'end'))
    out.append(text((L + R) / 2, B + 52, 'Strain', 18, INK, 600))
    out.append(f"<text x='30' y='{(T + B) / 2:.0f}' font-size='18' font-weight='600' fill='{INK}' text-anchor='middle' transform='rotate(-90 30 {(T + B) / 2:.0f})'>Stress (MPa)</text>")
    pts = [(0.0, 0.0)] + [(i * 0.0005, f(i * 0.0005)) for i in range(1, 319)]
    out.append("<polyline fill='none' stroke='#0f172a' stroke-width='3' stroke-linejoin='round' points='" + ' '.join(f'{sx(e):.1f},{sy(s):.1f}' for e, s in pts) + "'/>")
    # inset: 0–0.010 strain, 0–345 MPa (0–50 ×10³ psi)
    iL, iT, iR, iB = 360, 222, 640, 470
    ix = lambda e: iL + (iR - iL) * e / 0.010
    iy = lambda s: iB - (iB - iT) * s / 345
    out.append(f"<line x1='{iL}' y1='{iB}' x2='{iR}' y2='{iB}' stroke='{INK}' stroke-width='1.5'/>")
    out.append(f"<line x1='{iL}' y1='{iB}' x2='{iL}' y2='{iT}' stroke='{INK}' stroke-width='1.5'/>")
    out.append(f"<line x1='{iL - 48}' y1='{iB}' x2='{iL - 48}' y2='{iT}' stroke='{INK}' stroke-width='1.5'/>")
    for i in range(0, 11):
        e = i * 0.001
        major = i % 5 == 0
        out.append(f"<line x1='{ix(e):.1f}' y1='{iB}' x2='{ix(e):.1f}' y2='{iB - (9 if major else 5)}' stroke='{INK}' stroke-width='1.2'/>")
        if major:
            out.append(text(ix(e), iB + 21, '0' if i == 0 else f'{e:.3f}', 14, INK, 500))
    for s in (0, 100, 200, 300):  # MPa, on the outer axis
        out.append(f"<line x1='{iL - 48}' y1='{iy(s):.1f}' x2='{iL - 40}' y2='{iy(s):.1f}' stroke='{INK}' stroke-width='1.2'/>")
        out.append(text(iL - 54, iy(s) + 5, str(s), 14, INK, 500, 'end'))
    for k in range(0, 51, 10):  # ×10³ psi, on the inner axis
        s = k * 6.895
        out.append(f"<line x1='{iL}' y1='{iy(s):.1f}' x2='{iL + 8}' y2='{iy(s):.1f}' stroke='{INK}' stroke-width='1.2'/>")
        out.append(text(iL - 6, iy(s) + 5, str(k), 13, MUTED, 500, 'end'))
    out.append(text(iL - 48, iT - 12, 'MPa', 14, INK, 600))
    out.append(text(iL + 2, iT - 12, '10³ psi', 13, MUTED, 600, 'start'))
    ipts = [(i * 0.0001, f(i * 0.0001)) for i in range(0, 101)]
    out.append("<polyline fill='none' stroke='#0f172a' stroke-width='2.6' stroke-linejoin='round' points='" + ' '.join(f'{ix(e):.1f},{iy(s):.1f}' for e, s in ipts) + "'/>")
    return svg(W, H, ''.join(out))


# ── old final, Figure 1: a) energy and b) force vs separation, points A–E ───────────────────────────────────
def energy_force():
    W, H = 640, 640
    out = []

    def panel(top, label, ylab, fn, rmin, marks, extra=''):
        L, R = 90, 600
        mid = top + 120
        sx = lambda r: L + (R - L) * (r - rmin) / (4.0 - rmin)
        sy = lambda v: mid - 95 * v
        o = [f"<line x1='{L}' y1='{top}' x2='{L}' y2='{top + 250}' stroke='{INK}' stroke-width='1.8'/>",
             f"<line x1='{L}' y1='{mid}' x2='{R}' y2='{mid}' stroke='{INK}' stroke-width='1.8' marker-end='url(#ax)'/>",
             text(R + 14, mid + 6, 'r', 20, INK, 500, style="font-style='italic'"),
             text(28, top + 125, label, 18, INK, 700),
             f"<text x='60' y='{top + 125}' font-size='17' font-weight='600' fill='{INK}' text-anchor='middle' transform='rotate(-90 60 {top + 125})'>{ylab}</text>", extra]
        pts = []
        r = rmin
        while r <= 4.0:
            v = fn(r)
            if -1.25 <= v <= 1.25:
                pts.append(f'{sx(r):.1f},{sy(v):.1f}')
            r += 0.005
        o.append("<polyline fill='none' stroke='#0f172a' stroke-width='3' points='" + ' '.join(pts) + "'/>")
        for name, r0, dx, dy in marks:
            x, y = sx(r0), sy(fn(r0))
            o.append(f"<circle cx='{x:.1f}' cy='{y:.1f}' r='4.5' fill='#0f172a'/>")
            o.append(f"<line x1='{x:.1f}' y1='{y:.1f}' x2='{x + dx * 0.7:.1f}' y2='{y + dy * 0.7:.1f}' stroke='{INK}' stroke-width='1.4'/>")
            o.append(text(x + dx, y + dy + 6, name, 18, INK, 700))
        return ''.join(o)

    # Lennard-Jones-like shapes with the equilibrium spacing at r0 = 1.5
    r0 = 1.5
    energy = lambda r: 1.0 * ((r0 / r) ** 12 - 2 * (r0 / r) ** 6)  # minimum −1 at r0, zero at r0 / 2^(1/6)
    force = lambda r: 3.2 * ((r0 / r) ** 13 - (r0 / r) ** 7) * -1  # attractive (+, up) beyond r0, zero at r0
    rz = r0 / 2 ** (1 / 6)
    r_peak = r0 * (13 / 7) ** (1 / 6)
    out.append(panel(20, 'a)', 'Energy', energy, 1.2, [('A', rz, 30, -36), ('E', r0, 34, 30)]))
    out.append(panel(330, 'b)', 'Force', force, 1.2, [('B', r0, 26, 40), ('C', r_peak, 18, -40), ('D', r_peak + 0.45, 30, -34)],
                     text(70, 352, 'attractive', 13, MUTED, 600, 'end') + text(70, 590, 'repulsive', 13, MUTED, 600, 'end')))
    out.append(text(W / 2, H - 6, 'Figure 1', 18, INK, 600))
    return svg(W, H, ''.join(out))


# ── atoms drawn as shaded spheres (reduced-sphere unit cells) ─────────────────────────────────────────────────
SPHERES = ("<defs>"
           "<radialGradient id='gCorner' cx='35%' cy='30%' r='72%'><stop offset='0' stop-color='#e0e7ff'/><stop offset='0.45' stop-color='#6366f1'/><stop offset='1' stop-color='#312e81'/></radialGradient>"
           "<radialGradient id='gCentre' cx='35%' cy='30%' r='72%'><stop offset='0' stop-color='#fef3c7'/><stop offset='0.45' stop-color='#f59e0b'/><stop offset='1' stop-color='#78350f'/></radialGradient>"
           "<radialGradient id='gFace' cx='35%' cy='30%' r='72%'><stop offset='0' stop-color='#ccfbf1'/><stop offset='0.45' stop-color='#14b8a6'/><stop offset='1' stop-color='#134e4a'/></radialGradient>"
           "</defs>")


def atom(c, q, r, grad, hidden=False):
    x, y = c.p(*q)
    if hidden:
        return f"<circle cx='{x:.1f}' cy='{y:.1f}' r='{r}' fill='url(#{grad})' fill-opacity='0.35' stroke='#475569' stroke-width='1.4' stroke-dasharray='4 3'/>"
    return f"<circle cx='{x:.1f}' cy='{y:.1f}' r='{r}' fill='url(#{grad})' stroke='#1e1b4b' stroke-width='1.2'/>"


def corner_label(c, q, lab, gap):
    """A letter just outside corner q, pushed away from the cell's centre."""
    (x, y), (cx, cy) = c.p(*q), c.p(0.5, 0.5, 0.5)
    d = math.hypot(x - cx, y - cy)
    return text(x + (x - cx) / d * gap, y + (y - cy) / d * gap + 8, lab, 26, INK, 800)


def a25_fig1():
    """Midterm 2025, Figure 1: BCC cell, corners A–G (A–D on top, E and F at the front bottom, G at the back bottom
    right; the back bottom left corner is unlabelled). ACGE is x + y = 1, ABGF is y + z = 1, BCFE is x + z = 1."""
    c = Cube(330, 440, 300)
    body = SPHERES + c.frame(axes=False)
    labels = {'A': (1, 0, 1), 'B': (0, 0, 1), 'C': (0, 1, 1), 'D': (1, 1, 1), 'E': (1, 0, 0), 'F': (1, 1, 0), 'G': (0, 1, 0)}
    body += atom(c, (0, 0, 0), 26, 'gCorner', hidden=True)
    for q in ((0, 0, 1), (0, 1, 1), (0, 1, 0)):
        body += atom(c, q, 26, 'gCorner')
    body += atom(c, (0.5, 0.5, 0.5), 32, 'gCentre')
    for q in ((1, 0, 1), (1, 1, 1), (1, 0, 0), (1, 1, 0)):
        body += atom(c, q, 26, 'gCorner')
    for lab, q in labels.items():
        body += corner_label(c, q, lab, 46)
    return svg(760, 640, body)


def fx_fig2():
    """Old final, Figure 2: FCC cell, corners A (front top left), B (back top left), C (back top right), D (back bottom
    right), E (front bottom right). ACE is x + y + z = 2, a {111} plane; ABD and ABE are both y + z = 1."""
    c = Cube(330, 440, 300)
    body = SPHERES + c.frame(axes=False)
    labels = {'A': (1, 0, 1), 'B': (0, 0, 1), 'C': (0, 1, 1), 'D': (0, 1, 0), 'E': (1, 1, 0)}
    for q in ((0, 0, 0),):
        body += atom(c, q, 22, 'gCorner', hidden=True)
    for q in ((0, 0.5, 0.5), (0.5, 0, 0.5), (0.5, 0.5, 0)):  # face centres on the three hidden faces
        body += atom(c, q, 22, 'gFace', hidden=True)
    for q in ((0, 0, 1), (0, 1, 1), (0, 1, 0)):
        body += atom(c, q, 22, 'gCorner')
    for q in ((1, 0.5, 0.5), (0.5, 1, 0.5), (0.5, 0.5, 1)):  # face centres on the three faces in view
        body += atom(c, q, 22, 'gFace')
    for q in ((1, 0, 1), (1, 1, 1), (1, 0, 0), (1, 1, 0)):
        body += atom(c, q, 22, 'gCorner')
    for lab, q in labels.items():
        body += corner_label(c, q, lab, 42)
    return svg(760, 640, body)


def a25_fig2():
    """Midterm 2025, Figure 2: plane B cuts x at ½, y at ½, z at 1 → (221); plane A passes through the origin,
    (0, 1, ½) and (⅔, 1, 0): 3x − 2y + 4z = 0 → (3 2̄ 4)."""
    c = Cube(320, 410, 280)
    body = c.frame()
    body += c.poly([(0, 0, 0), (0, 1, 0.5), (2 / 3, 1, 0)], COLORS['A'], 0.30, COLORS['A'])
    body += c.poly([(0, 0, 1), (0.5, 0, 0), (0, 0.5, 0)], COLORS['B'], 0.32, COLORS['B'])
    x, y = c.p(0.22, 0.75, 0.2)
    body += text(x, y + 8, 'A', 26, COLORS['A'], 800)
    x, y = c.p(0.12, 0.12, 0.55)
    body += text(x, y + 8, 'B', 26, COLORS['B'], 800)
    body += c.tick((0.5, 0, 0), 1, 2, (-24, -10), COLORS['B'])
    body += c.tick((0, 0.5, 0), 1, 2, (0, 30), COLORS['B'])
    body += c.tick((0, 1, 0.5), 1, 2, (26, -8), COLORS['A'])
    body += c.tick((2 / 3, 1, 0), 2, 3, (24, 22), COLORS['A'])
    return svg(780, 630, body)


def dislocation():
    """Midterm 2025 Figure 3 / old final Figure 5: a crystal with an extra half-plane of atoms ending in the middle
    (an edge dislocation), sheared by τ (top → right, bottom → left), drawn two atoms deep."""
    d = 62
    top_cols, bot_cols, rows = 9, 8, 3  # the top half has one more column: the extra half-plane
    ox, oy = 360, 140  # front layer: centre column x, top row y
    A = lambda x: (2 / math.pi) * math.atan(x / (1.3 * d))  # −1 far left … +1 far right
    pos = {}
    for half, ncol in (('t', top_cols), ('b', bot_cols)):
        for r in range(rows):
            dist = rows - r if half == 't' else r + 1  # rows away from the slip plane (1 = next to it)
            g = math.exp(-(dist - 1) / 2.2)
            for i in range(ncol):
                X = (i - (ncol - 1) / 2) * d
                ux = (-1 if half == 't' else 1) * (d / 4) * A(X) * g
                uy = (-1 if half == 't' else 1) * 7 * math.exp(-(X / (1.4 * d)) ** 2) * g  # the core pushes rows apart
                Y = r * d if half == 't' else (rows + r) * d
                pos[(half, r, i)] = (X + ux, Y + uy)
    bonds = []
    for (half, r, i), _ in pos.items():
        if (half, r, i + 1) in pos:
            bonds.append(((half, r, i), (half, r, i + 1)))
        if (half, r + 1, i) in pos:
            bonds.append(((half, r, i), (half, r + 1, i)))
    centre = (top_cols - 1) // 2
    for i in range(bot_cols):  # across the slip plane; the centre top column (the extra half-plane) has no partner
        X = (i - (bot_cols - 1) / 2) * d
        bonds.append((('t', rows - 1, i if X < 0 else i + 1), ('b', 0, i)))
    layers = [(24, -18, 0.28), (0, 0, 1.0)]  # back to front: offset and strength
    out = []
    for li, (dx, dy, k) in enumerate(layers):
        sx = lambda key: ox + dx + pos[key][0]
        sy = lambda key: oy + dy + pos[key][1]
        col = '#334155' if k == 1 else '#94a3b8'
        for a, b in bonds:
            out.append(f"<line x1='{sx(a):.1f}' y1='{sy(a):.1f}' x2='{sx(b):.1f}' y2='{sy(b):.1f}' stroke='{col}' stroke-width='{4 if k == 1 else 3}' stroke-opacity='{k:.2f}' stroke-linecap='round'/>")
        if li:  # depth bonds back to the previous layer
            pdx, pdy, _ = layers[li - 1]
            for key, (x, y) in pos.items():
                out.append(f"<line x1='{ox + pdx + x:.1f}' y1='{oy + pdy + y:.1f}' x2='{ox + dx + x:.1f}' y2='{oy + dy + y:.1f}' stroke='#94a3b8' stroke-width='3' stroke-opacity='{k:.2f}'/>")
        for key in pos:
            out.append(f"<circle cx='{sx(key):.1f}' cy='{sy(key):.1f}' r='{13 if k == 1 else 12}' fill='url(#gCorner)' fill-opacity='{k:.2f}' stroke='#1e1b4b' stroke-width='1' stroke-opacity='{k:.2f}'/>")
    # shear stress arrows and the axes
    top, bot = oy - 22 - 46, oy + (2 * rows - 1) * d + 52
    out.append(f"<line x1='{ox - 150}' y1='{top}' x2='{ox + 170}' y2='{top}' stroke='{INK}' stroke-width='3' marker-end='url(#ax)'/>")
    out.append(text(ox + 10, top - 12, 'τ', 26, INK, 600, style="font-style='italic'"))
    out.append(f"<line x1='{ox + 170}' y1='{bot}' x2='{ox - 150}' y2='{bot}' stroke='{INK}' stroke-width='3' marker-end='url(#ax)'/>")
    out.append(text(ox + 10, bot + 32, 'τ', 26, INK, 600, style="font-style='italic'"))
    ax, ay = 46, bot + 50
    out.append(f"<line x1='{ax}' y1='{ay}' x2='{ax}' y2='{ay - 110}' stroke='{INK}' stroke-width='2' marker-end='url(#ax)'/>")
    out.append(f"<line x1='{ax}' y1='{ay}' x2='{ax + 110}' y2='{ay}' stroke='{INK}' stroke-width='2' marker-end='url(#ax)'/>")
    out.append(text(ax - 14, ay - 100, 'y', 21, INK, 500, style="font-style='italic'"))
    out.append(text(ax + 122, ay + 6, 'x', 21, INK, 500, style="font-style='italic'"))
    return svg(760, 600, SPHERES + ''.join(out))


def smooth(pts):
    """A smooth SVG path through pts (Catmull-Rom → cubic Béziers)."""
    p = [pts[0]] + pts + [pts[-1]]
    d = f'M{p[1][0]:.1f},{p[1][1]:.1f}'
    for i in range(1, len(p) - 2):
        (x0, y0), (x1, y1), (x2, y2), (x3, y3) = p[i - 1], p[i], p[i + 1], p[i + 2]
        d += f' C{x1 + (x2 - x0) / 6:.1f},{y1 + (y2 - y0) / 6:.1f} {x2 - (x3 - x1) / 6:.1f},{y2 - (y3 - y1) / 6:.1f} {x2:.1f},{y2:.1f}'
    return d


def a25_fig4():
    """Midterm 2025, Figure 4: five σ–ε curves. F is the steepest straight line and breaks while still elastic (stiffest);
    D leaves the straight line at the highest stress (highest yield strength, largest area); A has the lowest
    strength but the longest strain (most ductile); B and C lie in between."""
    L, T, R, B = 80, 40, 860, 520
    sx = lambda e: L + (R - L) * e
    sy = lambda s: B - (B - T) * s
    curves = {
        'F': [(0, 0), (0.105, 0.95)],
        'D': [(0, 0), (0.06, 0.40), (0.1, 0.63), (0.14, 0.67), (0.3, 0.71), (0.5, 0.75), (0.66, 0.76), (0.76, 0.73), (0.83, 0.67)],
        'C': [(0, 0), (0.05, 0.25), (0.1, 0.43), (0.17, 0.53), (0.28, 0.585), (0.45, 0.59), (0.58, 0.57), (0.65, 0.52), (0.7, 0.44)],
        'B': [(0, 0), (0.05, 0.22), (0.1, 0.36), (0.17, 0.44), (0.24, 0.46), (0.3, 0.43), (0.35, 0.38), (0.39, 0.33)],
        'A': [(0, 0), (0.04, 0.13), (0.08, 0.2), (0.14, 0.235), (0.3, 0.255), (0.6, 0.265), (0.86, 0.26), (0.92, 0.245), (0.95, 0.215)],
    }
    color = {'F': '#2563eb', 'D': '#059669', 'C': '#db2777', 'B': '#d97706', 'A': '#7c3aed'}
    out = [f"<line x1='{L}' y1='{B}' x2='{R + 20}' y2='{B}' stroke='{INK}' stroke-width='2' marker-end='url(#ax)'/>",
           f"<line x1='{L}' y1='{B}' x2='{L}' y2='{T - 20}' stroke='{INK}' stroke-width='2' marker-end='url(#ax)'/>",
           text(L - 22, T - 6, 'σ', 26, INK, 600, style="font-style='italic'"), text(R + 34, B + 8, 'ε', 26, INK, 600, style="font-style='italic'")]
    for k, pts in curves.items():
        scr = [(sx(e), sy(s)) for e, s in pts]
        d = f'M{scr[0][0]:.1f},{scr[0][1]:.1f} L{scr[1][0]:.1f},{scr[1][1]:.1f}' if len(scr) == 2 else smooth(scr)
        out.append(f"<path d='{d}' fill='none' stroke='{color[k]}' stroke-width='3.4' stroke-linecap='round' stroke-linejoin='round'/>")
        ex, ey = scr[-1]
        out.append(f"<circle cx='{ex:.1f}' cy='{ey:.1f}' r='4.5' fill='{color[k]}'/>")  # fracture
        nudge = {'F': (16, -6), 'D': (22, 8), 'C': (20, 12), 'B': (20, 12), 'A': (18, 22)}[k]
        out.append(text(ex + nudge[0], ey + nudge[1], k, 24, color[k], 800))
    return svg(920, 580, ''.join(out))


def f24_force():
    """Fall 2024 midterm, Q6: net bonding force vs separation; F = 0 at 3 Å (attractive, positive, beyond it)."""
    L, R, T, B = 110, 860, 40, 540
    rmax = 13.0
    sx = lambda r: L + (R - L) * r / rmax
    mid = 300
    sy = lambda f: mid - 520 * f
    out = [f"<line x1='{L}' y1='{T}' x2='{L}' y2='{B}' stroke='{INK}' stroke-width='2'/>",
           f"<line x1='{L}' y1='{mid}' x2='{R + 10}' y2='{mid}' stroke='{INK}' stroke-width='2' marker-end='url(#ax)'/>"]
    for r in range(0, 11, 2):
        out.append(f"<line x1='{sx(r):.1f}' y1='{mid}' x2='{sx(r):.1f}' y2='{mid + 9}' stroke='{INK}' stroke-width='1.6'/>")
        out.append(text(sx(r) + (12 if r == 0 else 0), mid + 32, str(r), 20, INK, 700))
    for r in range(1, 12, 2):
        out.append(f"<line x1='{sx(r):.1f}' y1='{mid}' x2='{sx(r):.1f}' y2='{mid + 5}' stroke='{INK}' stroke-width='1.2'/>")
    out.append(text((L + R) / 2 + 60, mid + 80, 'Interatomic separation (Å)', 21, INK, 600))
    out.append(f"<text x='44' y='{mid - 40}' font-size='21' font-weight='600' fill='{INK}' text-anchor='middle' transform='rotate(-90 44 {mid - 40})'>Bonding force (kN)</text>")
    out.append(text(L + 14, T + 18, 'attractive', 15, MUTED, 600, 'start'))
    out.append(text(L + 14, B - 8, 'repulsive', 15, MUTED, 600, 'start'))
    force = lambda r: 1.6 * ((3 / r) ** 2 - (3 / r) ** 4)  # zero at 3 Å, peak near 4.2 Å, long attractive tail
    pts, r = [], 1.5
    while r <= rmax:
        f = force(r)
        if sy(f) <= B:
            pts.append(f'{sx(r):.1f},{sy(f):.1f}')
        r += 0.02
    out.append("<polyline fill='none' stroke='#0f172a' stroke-width='3.2' stroke-linejoin='round' points='" + ' '.join(pts) + "'/>")
    out.append(f"<circle cx='{sx(3):.1f}' cy='{mid}' r='6' fill='#0f172a'/>")
    return svg(920, 600, ''.join(out))


def f24_cube():
    """Fall 2024 midterm, Q13–14. Plane K: the triangle (1,1,1), (1,0,0), (0,1,0) → x + y − z = 1; with the origin
    moved to (1,1,0) its intercepts are (−1, −1, 1) → (1̄1̄1). Direction I: from point H (1,1,1) to the centre of the
    back edge on the z-axis (0,0,½) → (−1, −1, −½) → [2̄2̄1̄]. Plane L: y + z = ½. Direction J: (0,1,0) → (1,1,0).
    Point G: the bottom face centre (½,½,0)."""
    c = Cube(300, 470, 320, depth=(0.42, 0.25))  # a shallow depth axis, as on the paper, so direction I is not foreshortened
    body = c.frame()
    body += c.poly([(0, 0, 0.5), (0, 0.5, 0), (1, 0.5, 0), (1, 0, 0.5)], '#64748b', 0.38, '#334155')  # plane L
    body += c.poly([(1, 1, 1), (1, 0, 0), (0, 1, 0)], '#2563eb', 0.16, '#2563eb')  # plane K
    body += c.line((1, 1, 1), (0, 0, 0.5), '#db2777', 3.6, marker='arr')  # direction I
    body += c.line((0, 1, 0), (1, 1, 0), '#059669', 3.6, marker='arr')  # direction J
    for q in ((1, 1, 1), (0.5, 0.5, 0), (0, 0, 0.5)):
        x, y = c.p(*q)
        body += f"<circle cx='{x:.1f}' cy='{y:.1f}' r='6.5' fill='{INK}'/>"

    def callout(q, lx, ly, s, color=INK, anchor='middle'):
        x, y = c.p(*q)
        return (f"<line x1='{lx:.1f}' y1='{ly:.1f}' x2='{x:.1f}' y2='{y:.1f}' stroke='{MUTED}' stroke-width='1.4'/>"
                + text(lx, ly + (-8 if ly < y else 22), s, 19, color, 700, anchor))

    body += callout((1, 1, 1), 600, 80, 'Point H')
    body += callout((0.6, 0.6, 0.8), 150, 70, 'Direction I', '#db2777')
    body += callout((0, 0, 0.5), 110, 230, '(edge center)', MUTED)
    body += callout((0.75, 0.25, 0.25), 40, 470, 'Plane L', '#334155', 'start')
    body += callout((0.55, 0.8, 0.35), 720, 330, 'Plane K', '#2563eb')
    body += callout((0.5, 1, 0), 700, 600, 'Direction J', '#059669')
    body += callout((0.5, 0.5, 0), 400, 630, 'Point G (face center)')
    return svg(820, 680, body)


for name, fn in (('w26-directions-a-d', directions), ('w26-planes-a-b', planes_ab), ('w26-planes-c-d', planes_cd),
                 ('w26-stress-strain', stress_strain), ('fx-figure-1', energy_force), ('f17-q1-plane', f17_plane),
                 ('a25-figure-1', a25_fig1), ('a25-figure-2', a25_fig2), ('a25-figure-3', dislocation), ('a25-figure-4', a25_fig4),
                 ('fx-figure-2', fx_fig2), ('fx-figure-5', dislocation), ('f24-force-curve', f24_force), ('f24-cube-plane-k-direction-i', f24_cube)):
    with open(os.path.join(OUT, name + '.svg'), 'w', encoding='utf-8') as fh:
        fh.write(fn())
    print('wrote', name + '.svg')

# sanity: the stress–strain drawing must give the keyed answers
f = pchip(KNOTS)
cross = next(e / 100000 for e in range(200, 2000) if E * (e / 100000 - 0.002) >= f(e / 100000))
print(f'E = {200 / 0.00345 / 1000:.0f} GPa | 0.2% offset yield ~ {f(cross):.0f} MPa at strain {cross:.4f} | peak at strain {max(range(1, 159), key=lambda i: f(i / 1000)) / 1000} | '
      f'%EL = {(0.159 - 290 / E) * 100:.1f} % | strain at 320 MPa = {next(i / 10000 for i in range(35, 1590) if f(i / 10000) >= 320):.4f}')
