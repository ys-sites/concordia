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
    def __init__(self, ox, oy, s):
        self.ox, self.oy, self.s = ox, oy, s

    def p(self, x, y, z):
        s = self.s
        return (self.ox + s * (y - 0.68 * x), self.oy + s * (-z + 0.40 * x))

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


for name, fn in (('w26-directions-a-d', directions), ('w26-planes-a-b', planes_ab), ('w26-planes-c-d', planes_cd),
                 ('w26-stress-strain', stress_strain), ('fx-figure-1', energy_force), ('f17-q1-plane', f17_plane)):
    with open(os.path.join(OUT, name + '.svg'), 'w', encoding='utf-8') as fh:
        fh.write(fn())
    print('wrote', name + '.svg')

# sanity: the stress–strain drawing must give the keyed answers
f = pchip(KNOTS)
cross = next(e / 100000 for e in range(200, 2000) if E * (e / 100000 - 0.002) >= f(e / 100000))
print(f'E = {200 / 0.00345 / 1000:.0f} GPa | 0.2% offset yield ~ {f(cross):.0f} MPa at strain {cross:.4f} | peak at strain {max(range(1, 159), key=lambda i: f(i / 1000)) / 1000} | '
      f'%EL = {(0.159 - 290 / E) * 100:.1f} % | strain at 320 MPa = {next(i / 10000 for i in range(35, 1590) if f(i / 10000) >= 320):.4f}')
