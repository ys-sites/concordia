import os
import sys
import subprocess
import tempfile
import re

# Ensure UTF-8
sys.stdout.reconfigure(encoding='utf-8')

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
if not os.path.exists(CHROME_PATH):
    CHROME_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

print(f"Using browser binary: {CHROME_PATH}")

SRC_FORMULA_MD = r"c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\Miae 221\03 - 1-Page Rapid Review Sheets\MIAE 221 - Master Formula Sheet & Symbol Guide (Ch 1-6).md"
SRC_THEORY_MD = r"c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\Miae 221\03 - 1-Page Rapid Review Sheets\MIAE 221 - 2017 Midterm Theory & Past Paper Master Explainer.md"

DEST_DIRS = [
    r"c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\Miae 221\formula",
    r"c:\Users\Sharafath\Desktop\Website\Concodia new\Semester 1\Miae 221\formula",
    r"c:\Users\Sharafath\Desktop\Website\Concodia new\concordia\website\public\courses\MIAE221\formula",
    r"c:\Users\Sharafath\Documents\iCloudDrive\Concodia\Semester 1\Studocu\Need to Upload"
]

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>{title}</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"
    onload="renderMathInElement(document.body, {{
        delimiters: [
            {{left: '$$', right: '$$', display: true}},
            {{left: '$', right: '$', display: false}},
            {{left: '\\\\[', right: '\\\\]', display: true}},
            {{left: '\\\\(', right: '\\\\)', display: false}}
        ]
    }});"></script>
<style>
  @page {{
    size: letter portrait;
    margin: 18mm 14mm 18mm 14mm;
    @bottom-right {{
      content: "Page " counter(page) " of " counter(pages);
      font-size: 9pt;
      color: #64748b;
      font-family: system-ui, sans-serif;
    }}
  }}
  body {{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 10.5pt;
    line-height: 1.55;
    color: #0f172a;
    background: #ffffff;
    margin: 0;
    padding: 0;
  }}
  h1 {{
    font-size: 19pt;
    font-weight: 800;
    color: #0f172a;
    border-bottom: 2.5px solid #0284c7;
    padding-bottom: 6px;
    margin-top: 0;
    margin-bottom: 8px;
  }}
  h2 {{
    font-size: 13.5pt;
    font-weight: 750;
    color: #0369a1;
    border-bottom: 1.5px solid #e2e8f0;
    padding-bottom: 4px;
    margin-top: 20px;
    margin-bottom: 10px;
    page-break-after: avoid;
  }}
  h3 {{
    font-size: 11.5pt;
    font-weight: 700;
    color: #1e293b;
    margin-top: 14px;
    margin-bottom: 6px;
    page-break-after: avoid;
  }}
  p {{
    margin: 0 0 8px 0;
  }}
  table {{
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0 16px 0;
    font-size: 9.5pt;
    page-break-inside: avoid;
  }}
  th, td {{
    border: 1px solid #cbd5e1;
    padding: 6px 9px;
    text-align: left;
    vertical-align: top;
  }}
  th {{
    background: #f1f5f9;
    font-weight: 700;
    color: #1e293b;
  }}
  tr:nth-child(even) td {{
    background: #f8fafc;
  }}
  .header-box {{
    background: #f8fafc;
    border: 1px solid #cbd5e1;
    border-left: 4px solid #0284c7;
    padding: 10px 14px;
    border-radius: 6px;
    margin-bottom: 18px;
    font-size: 9.5pt;
  }}
  .red-alert {{
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-left: 4px solid #dc2626;
    padding: 8px 12px;
    border-radius: 6px;
    margin: 8px 0;
    color: #991b1b;
    font-weight: 600;
  }}
  .tip-box {{
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-left: 4px solid #f59e0b;
    padding: 8px 12px;
    border-radius: 6px;
    margin: 8px 0;
    color: #78350f;
  }}
  .tip-box strong {{
    color: #92400e;
  }}
  code {{
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 9pt;
    background: #f1f5f9;
    padding: 2px 4px;
    border-radius: 4px;
  }}
  blockquote {{
    margin: 8px 0;
    padding: 8px 14px;
    background: #f8fafc;
    border-left: 3.5px solid #64748b;
    color: #334155;
    font-style: italic;
  }}
  hr {{
    border: 0;
    border-top: 1px solid #e2e8f0;
    margin: 18px 0;
  }}
  .crystal-table th {{
    background: #e0f2fe;
    color: #0369a1;
  }}
</style>
</head>
<body>
{body}
</body>
</html>
"""

def md_to_html_simple(md_text):
    import html
    lines = md_text.splitlines()
    out = []
    in_table = False
    table_lines = []

    def flush_table():
        nonlocal in_table, table_lines
        if not table_lines:
            return
        html_tbl = ["<table>"]
        header = True
        for row in table_lines:
            cells = [c.strip() for c in row.strip('|').split('|')]
            if any('---' in c for c in cells):
                header = False
                continue
            tag = "th" if header else "td"
            html_tbl.append("<tr>" + "".join(f"<{tag}>{c}</{tag}>" for c in cells) + "</tr>")
            if header:
                header = False
        html_tbl.append("</table>")
        out.append("\n".join(html_tbl))
        table_lines = []
        in_table = False

    for line in lines:
        s = line.strip()
        if s.startswith('|') and s.endswith('|'):
            in_table = True
            table_lines.append(s)
            continue
        else:
            if in_table:
                flush_table()

        if s.startswith('# '):
            out.append(f"<h1>{s[2:]}</h1>")
        elif s.startswith('## '):
            out.append(f"<h2>{s[3:]}</h2>")
        elif s.startswith('### '):
            out.append(f"<h3>{s[4:]}</h3>")
        elif s.startswith('> [!NOTE]') or s.startswith('> [!IMPORTANT]') or s.startswith('> [!WARNING]'):
            out.append(f"<div class='header-box'><strong>{s[3:].strip()}</strong>")
        elif s.startswith('> 🚨 **RED ALERT') or s.startswith('> 🚨 RED ALERT'):
            out.append(f"<div class='red-alert'>{s[2:]}</div>")
        elif s.startswith('> 💡'):
            out.append(f"<div class='tip-box'><strong>Tip:</strong> {s[4:]}</div>")
        elif s.startswith('> '):
            out.append(f"<blockquote>{s[2:]}</blockquote>")
        elif s == '---':
            out.append("<hr>")
        elif s:
            # Basic bold / code formatting
            formatted = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', s)
            formatted = re.sub(r'`(.*?)`', r'<code>\1</code>', formatted)
            out.append(f"<p>{formatted}</p>")

    if in_table:
        flush_table()

    return "\n".join(out)

def render_pdf(md_path, pdf_filename, title):
    with open(md_path, 'r', encoding='utf-8') as f:
        md_text = f.read()

    body_html = md_to_html_simple(md_text)
    full_html = HTML_TEMPLATE.format(title=title, body=body_html)

    with tempfile.NamedTemporaryFile(suffix='.html', delete=False, mode='w', encoding='utf-8') as tmp_html:
        tmp_html.write(full_html)
        tmp_html_path = tmp_html.name

    tmp_pdf_path = tmp_html_path.replace('.html', '.pdf')

    user_data_dir = tempfile.mkdtemp()
    cmd = [
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        f"--user-data-dir={user_data_dir}",
        "--virtual-time-budget=2000",
        "--run-all-compositor-stages-before-draw",
        f"--print-to-pdf={tmp_pdf_path}",
        tmp_html_path
    ]

    print(f"Generating PDF for {title}...")
    res = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
    if res.returncode != 0:
        print(f"Error running browser: {res.stderr}")
        return False

    pdf_bytes = os.path.getsize(tmp_pdf_path)
    print(f"Generated PDF ({pdf_bytes} bytes). Distributing to destination folders...")

    import shutil
    for d in DEST_DIRS:
        os.makedirs(d, exist_ok=True)
        dest_file = os.path.join(d, pdf_filename)
        shutil.copyfile(tmp_pdf_path, dest_file)
        print(f" -> Copied to {dest_file}")

    try:
        os.remove(tmp_html_path)
        os.remove(tmp_pdf_path)
        shutil.rmtree(user_data_dir, ignore_errors=True)
    except:
        pass

    return True

if __name__ == '__main__':
    render_pdf(
        SRC_FORMULA_MD,
        "MIAE 221 - Master Formula Sheet & Symbol Guide (Ch 1-6).pdf",
        "MIAE 221 · Master Formula Sheet & Symbol Guide (Ch 1–6)"
    )
    render_pdf(
        SRC_THEORY_MD,
        "MIAE 221 - 2017 Midterm Theory & Past Paper Master Explainer.pdf",
        "MIAE 221 · 2017 Midterm & Past Exam Theory Explainer"
    )
    print("All PDFs successfully generated and distributed!")
