import os, math

OUT = os.path.join(os.path.dirname(__file__), '..', '..', 'public', 'exam-figures', 'miae221')
os.makedirs(OUT, exist_ok=True)

# 1. Copper Vacancy Concentration Curve vs Temperature (matching user reference image!)
def generate_copper_vacancy_curve():
    w, h = 800, 700
    L, R, T_top, B = 140, 720, 60, 560
    
    # Temperature range: 0 to 1050 °C
    # Nv/N * 10^4 range: 0 to 5.0
    sx = lambda t_c: L + (R - L) * (t_c / 1050.0)
    sy = lambda nv_val: B - (B - T_top) * (nv_val / 5.0)
    
    # Calculate Nv/N = exp(-Qv / (k * (T + 273.15))) * 10^4
    # Qv = 0.9 eV, k = 8.62e-5 eV/K
    Qv = 0.9
    k = 8.62e-5
    
    pts = []
    for t_c in range(20, 1051, 5):
        T_k = t_c + 273.15
        nv_frac = math.exp(-Qv / (k * T_k))
        val_scaled = nv_frac * 1e4
        x = sx(t_c)
        y = sy(val_scaled)
        pts.append(f"{x:.1f},{y:.1f}")
        
    svg_elements = [
        f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {w} {h}' width='{w}' height='{h}' font-family='Inter, -apple-system, Segoe UI, Roboto, sans-serif'>",
        # Dark premium background
        f"<rect width='{w}' height='{h}' fill='#0f172a' rx='12'/>",
        # Grid lines
        "<g stroke='#1e293b' stroke-width='1.2' stroke-dasharray='4,4'>"
    ]
    
    # Horizontal grid lines (1 to 5)
    for y_val in range(1, 6):
        y_pos = sy(y_val)
        svg_elements.append(f"<line x1='{L}' y1='{y_pos:.1f}' x2='{R}' y2='{y_pos:.1f}'/>")
    # Vertical grid lines (200, 400, 600, 800, 1000)
    for x_val in [200, 400, 600, 800, 1000]:
        x_pos = sx(x_val)
        svg_elements.append(f"<line x1='{x_pos:.1f}' y1='{T_top}' x2='{x_pos:.1f}' y2='{B}'/>")
    svg_elements.append("</g>")
    
    # Axes
    svg_elements.append(
        f"<defs>"
        f"<marker id='ax-arrow' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto'>"
        f"<path d='M0,1 L8,5 L0,9 z' fill='#94a3b8'/>"
        f"</marker>"
        f"</defs>"
    )
    # X and Y axis lines with arrow markers
    svg_elements.append(f"<line x1='{L}' y1='{B}' x2='{L}' y2='{T_top - 20}' stroke='#94a3b8' stroke-width='2.2' marker-end='url(#ax-arrow)'/>")
    svg_elements.append(f"<line x1='{L}' y1='{B}' x2='{R + 25}' y2='{B}' stroke='#94a3b8' stroke-width='2.2' marker-end='url(#ax-arrow)'/>")
    
    # Y-axis ticks and labels (0 to 5)
    for y_val in range(1, 6):
        y_pos = sy(y_val)
        svg_elements.append(f"<line x1='{L - 6}' y1='{y_pos:.1f}' x2='{L}' y2='{y_pos:.1f}' stroke='#94a3b8' stroke-width='2'/>")
        svg_elements.append(f"<text x='{L - 16}' y='{y_pos + 6:.1f}' font-size='18' font-weight='600' fill='#cbd5e1' text-anchor='end'>{y_val}</text>")
    
    # X-axis ticks and labels (200 to 1000)
    for x_val in [200, 400, 600, 800, 1000]:
        x_pos = sx(x_val)
        svg_elements.append(f"<line x1='{x_pos:.1f}' y1='{B}' x2='{x_pos:.1f}' y2='{B + 6}' stroke='#94a3b8' stroke-width='2'/>")
        svg_elements.append(f"<text x='{x_pos:.1f}' y='{B + 28}' font-size='18' font-weight='600' fill='#cbd5e1' text-anchor='middle'>{x_val}</text>")
    
    # Axis titles
    svg_elements.append(f"<text x='{(L + R)/2:.1f}' y='{B + 65}' font-size='20' font-weight='700' fill='#f1f5f9' text-anchor='middle'>Temperature T (°C)</text>")
    svg_elements.append(f"<text x='48' y='{(T_top + B)/2:.1f}' font-size='20' font-weight='700' fill='#f1f5f9' text-anchor='middle' transform='rotate(-90 48 {(T_top + B)/2:.1f})'>Nᵥ / N (×10⁻⁴)</text>")
    
    # The exponential curve (gold/amber)
    svg_elements.append(f"<polyline points='{' '.join(pts)}' fill='none' stroke='#fbbf24' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>")
    
    # Point 1: 20 °C (blue)
    p1_x = sx(20)
    p1_y = sy(math.exp(-Qv / (k * (20 + 273.15))) * 1e4)
    svg_elements.append(f"<circle cx='{p1_x:.1f}' cy='{p1_y:.1f}' r='10' fill='#0284c7' fill-opacity='0.4'/>")
    svg_elements.append(f"<circle cx='{p1_x:.1f}' cy='{p1_y:.1f}' r='5.5' fill='#38bdf8'/>")
    svg_elements.append(f"<text x='{p1_x + 12:.1f}' y='{p1_y - 14:.1f}' font-size='17' font-weight='700' fill='#38bdf8'>20 °C: 3×10⁻¹⁶</text>")
    
    # Point 2: 1000 °C (coral/red) -> 2.7 * 10^-4
    p2_x = sx(1000)
    p2_y = sy(2.7)
    svg_elements.append(f"<circle cx='{p2_x:.1f}' cy='{p2_y:.1f}' r='12' fill='#e11d48' fill-opacity='0.35'/>")
    svg_elements.append(f"<circle cx='{p2_x:.1f}' cy='{p2_y:.1f}' r='6' fill='#f43f5e'/>")
    svg_elements.append(f"<text x='{p2_x - 16:.1f}' y='{p2_y - 16:.1f}' font-size='19' font-weight='700' fill='#fb7185' text-anchor='end'>1000 °C: 2.7×10⁻⁴</text>")
    
    # Bottom caption
    svg_elements.append(f"<text x='{(L + R)/2:.1f}' y='{h - 22}' font-size='16' font-weight='500' fill='#94a3b8' text-anchor='middle'>Copper (Qᵥ = 0.9 eV/atom): vacancies rise exponentially with temperature T</text>")
    
    svg_elements.append("</svg>")
    return "\n".join(svg_elements)

# 2. Bragg's Law Diffraction Geometry
def generate_braggs_law():
    w, h = 760, 440
    svg_elements = [
        f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {w} {h}' width='{w}' height='{h}' font-family='Inter, sans-serif'>",
        f"<rect width='{w}' height='{h}' fill='#0f172a' rx='12'/>",
        f"<defs>",
        f"<marker id='bragg-arr' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto'>",
        f"<path d='M0,1 L8,5 L0,9 z' fill='#38bdf8'/>",
        f"</marker>",
        f"</defs>"
    ]
    
    y1, y2 = 140, 260
    # Two parallel atomic planes
    svg_elements.append(f"<line x1='80' y1='{y1}' x2='680' y2='{y1}' stroke='#475569' stroke-width='2' stroke-dasharray='6,6'/>")
    svg_elements.append(f"<line x1='80' y1='{y2}' x2='680' y2='{y2}' stroke='#475569' stroke-width='2' stroke-dasharray='6,6'/>")
    
    # Plane labels
    svg_elements.append(f"<text x='90' y='{y1 - 15}' font-size='15' fill='#94a3b8' font-weight='600'>Plane 1 (hkl)</text>")
    svg_elements.append(f"<text x='90' y='{y2 + 25}' font-size='15' fill='#94a3b8' font-weight='600'>Plane 2 (hkl)</text>")
    
    # Atoms on planes
    for x in range(160, 640, 70):
        svg_elements.append(f"<circle cx='{x}' cy='{y1}' r='10' fill='#3b82f6'/>")
        svg_elements.append(f"<circle cx='{x}' cy='{y2}' r='10' fill='#3b82f6'/>")
        
    # Interplanar spacing d_hkl arrow
    svg_elements.append(f"<line x1='640' y1='{y1}' x2='640' y2='{y2}' stroke='#fbbf24' stroke-width='2.2'/>")
    svg_elements.append(f"<line x1='630' y1='{y1}' x2='650' y2='{y1}' stroke='#fbbf24' stroke-width='2'/>")
    svg_elements.append(f"<line x1='630' y1='{y2}' x2='650' y2='{y2}' stroke='#fbbf24' stroke-width='2'/>")
    svg_elements.append(f"<text x='665' y='{(y1+y2)/2 + 6}' font-size='17' font-weight='700' fill='#fbbf24'>d_hkl</text>")
    
    # Incident beam 1 (hits atom at 300, y1)
    # Incident beam 2 (hits atom at 370, y2)
    theta_rad = math.radians(28)
    dx = (y2 - y1) / math.tan(theta_rad)
    
    # Ray 1
    svg_elements.append(f"<line x1='120' y1='{y1 - (300-120)*math.tan(theta_rad):.1f}' x2='300' y2='{y1}' stroke='#38bdf8' stroke-width='2.8' marker-end='url(#bragg-arr)'/>")
    svg_elements.append(f"<line x1='300' y1='{y1}' x2='480' y2='{y1 - (480-300)*math.tan(theta_rad):.1f}' stroke='#38bdf8' stroke-width='2.8' marker-end='url(#bragg-arr)'/>")
    
    # Ray 2
    svg_elements.append(f"<line x1='120' y1='{y2 - (370-120)*math.tan(theta_rad):.1f}' x2='370' y2='{y2}' stroke='#38bdf8' stroke-width='2.8' marker-end='url(#bragg-arr)'/>")
    svg_elements.append(f"<line x1='370' y1='{y2}' x2='550' y2='{y2 - (550-370)*math.tan(theta_rad):.1f}' stroke='#38bdf8' stroke-width='2.8' marker-end='url(#bragg-arr)'/>")
    
    # Extra path: perpendiculars from (300, y1) to ray 2
    svg_elements.append(f"<text x='380' y='{h - 40}' font-size='19' font-weight='700' fill='#f8fafc' text-anchor='middle'>Constructive Interference Condition: nλ = 2 d_hkl sin(θ)</text>")
    svg_elements.append(f"<text x='380' y='{h - 15}' font-size='15' fill='#94a3b8' text-anchor='middle'>Detector records 2θ angle · d_hkl = a / √(h² + k² + l²)</text>")
    
    svg_elements.append("</svg>")
    return "\n".join(svg_elements)

# 3. Schmid's Law Resolved Shear Stress Geometry
def generate_schmids_law():
    w, h = 760, 480
    svg_elements = [
        f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {w} {h}' width='{w}' height='{h}' font-family='Inter, sans-serif'>",
        f"<rect width='{w}' height='{h}' fill='#0f172a' rx='12'/>",
        f"<defs>",
        f"<marker id='schmid-arr' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto'>",
        f"<path d='M0,1 L8,5 L0,9 z' fill='#f43f5e'/>",
        f"</marker>",
        f"<marker id='axis-arr' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto'>",
        f"<path d='M0,1 L8,5 L0,9 z' fill='#38bdf8'/>",
        f"</marker>",
        f"</defs>"
    ]
    
    # Cylinder outline representing single crystal under tension
    cx, top_y, bot_y, r = 380, 70, 390, 80
    # Top ellipse
    svg_elements.append(f"<ellipse cx='{cx}' cy='{top_y}' rx='{r}' ry='22' fill='#1e293b' stroke='#64748b' stroke-width='2'/>")
    # Body lines
    svg_elements.append(f"<line x1='{cx - r}' y1='{top_y}' x2='{cx - r}' y2='{bot_y}' stroke='#64748b' stroke-width='2'/>")
    svg_elements.append(f"<line x1='{cx + r}' y1='{top_y}' x2='{cx + r}' y2='{bot_y}' stroke='#64748b' stroke-width='2'/>")
    # Bottom ellipse
    svg_elements.append(f"<ellipse cx='{cx}' cy='{bot_y}' rx='{r}' ry='22' fill='#1e293b' stroke='#64748b' stroke-width='2'/>")
    
    # Tensile force arrows along central axis
    svg_elements.append(f"<line x1='{cx}' y1='{top_y - 45}' x2='{cx}' y2='{top_y}' stroke='#38bdf8' stroke-width='3.5' marker-end='url(#axis-arr)'/>")
    svg_elements.append(f"<line x1='{cx}' y1='{bot_y}' x2='{cx}' y2='{bot_y + 45}' stroke='#38bdf8' stroke-width='3.5' marker-end='url(#axis-arr)'/>")
    svg_elements.append(f"<text x='{cx + 18}' y='{top_y - 25}' font-size='18' font-weight='700' fill='#38bdf8'>Tensile Stress σ</text>")
    
    # Tilted slip plane ellipse
    mid_y = (top_y + bot_y) / 2
    svg_elements.append(f"<ellipse cx='{cx}' cy='{mid_y}' rx='{r}' ry='42' fill='#334155' fill-opacity='0.6' stroke='#fbbf24' stroke-width='2.6' transform='rotate(-25 {cx} {mid_y})'/>")
    
    # Normal to slip plane n (angle phi with tensile axis)
    svg_elements.append(f"<line x1='{cx}' y1='{mid_y}' x2='{cx + 90}' y2='{mid_y - 100}' stroke='#a855f7' stroke-width='2.8' marker-end='url(#schmid-arr)'/>")
    svg_elements.append(f"<text x='{cx + 105}' y='{mid_y - 105}' font-size='17' font-weight='700' fill='#a855f7'>Normal n (Angle φ)</text>")
    
    # Slip direction vector on the plane (angle lambda with tensile axis)
    svg_elements.append(f"<line x1='{cx}' y1='{mid_y}' x2='{cx + 110}' y2='{mid_y - 30}' stroke='#10b981' stroke-width='2.8' marker-end='url(#schmid-arr)'/>")
    svg_elements.append(f"<text x='{cx + 125}' y='{mid_y - 25}' font-size='17' font-weight='700' fill='#10b981'>Slip Direction s (Angle λ)</text>")
    
    # Central vertical axis line dashed
    svg_elements.append(f"<line x1='{cx}' y1='{top_y}' x2='{cx}' y2='{bot_y}' stroke='#94a3b8' stroke-width='1.5' stroke-dasharray='4,4'/>")
    
    # Formula box on the left
    svg_elements.append(f"<rect x='30' y='180' width='230' height='130' rx='8' fill='#1e293b' stroke='#334155' stroke-width='1.5'/>")
    svg_elements.append(f"<text x='145' y='210' font-size='16' font-weight='700' fill='#f8fafc' text-anchor='middle'>Schmid's Law</text>")
    svg_elements.append(f"<text x='145' y='240' font-size='16' font-weight='600' fill='#fbbf24' text-anchor='middle'>τ_R = σ cos(φ) cos(λ)</text>")
    svg_elements.append(f"<text x='145' y='270' font-size='14' font-weight='600' fill='#34d399' text-anchor='middle'>Max shear at φ = λ = 45°</text>")
    svg_elements.append(f"<text x='145' y='295' font-size='14' font-weight='600' fill='#38bdf8' text-anchor='middle'>τ_R,max = 0.5 σ</text>")
    
    svg_elements.append("</svg>")
    return "\n".join(svg_elements)

# Write out the three new clean SVGs
with open(os.path.join(OUT, 'copper-vacancy-curve.svg'), 'w', encoding='utf-8') as f:
    f.write(generate_copper_vacancy_curve())
print("Created copper-vacancy-curve.svg")

with open(os.path.join(OUT, 'braggs-law-diffraction.svg'), 'w', encoding='utf-8') as f:
    f.write(generate_braggs_law())
print("Created braggs-law-diffraction.svg")

with open(os.path.join(OUT, 'schmids-law-geometry.svg'), 'w', encoding='utf-8') as f:
    f.write(generate_schmids_law())
print("Created schmids-law-geometry.svg")
