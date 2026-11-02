# Monta index.html desde plantilla.html + textos.json + iconos.json.
#   python montar.py
import json, pathlib

aqui = pathlib.Path(__file__).parent
html = (aqui / 'plantilla.html').read_text(encoding='utf-8')
textos = json.loads((aqui / 'textos.json').read_text(encoding='utf-8'))
iconos = json.loads((aqui / 'iconos.json').read_text(encoding='utf-8'))
iconos['offline'] = 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'

claves = set(textos['es'])
for l, t in textos.items():
    assert set(t) == claves, (l, claves ^ set(t))

PLAY_LOGO = '''<svg viewBox="0 0 500 556" aria-hidden="true"><mask id="tri{n}"><path d="M65 75 L65 481 L435 278 Z" fill="#fff" stroke="#fff" stroke-width="110" stroke-linejoin="round"/></mask><g mask="url(#tri{n})"><path d="M-20 0 L235 278 L-20 556 Z" fill="#4285f4"/><path d="M-20 0 L235 278 L545 -41 L-20 -41 Z" fill="#34a853"/><path d="M-20 556 L235 278 L545 597 L-20 597 Z" fill="#ea4335"/><path d="M235 278 L545 -41 L600 -41 L600 597 L545 597 Z" fill="#fbbc04"/></g></svg>'''
n = 0
while '{{PLAY_LOGO}}' in html:
    n += 1
    html = html.replace('{{PLAY_LOGO}}', PLAY_LOGO.replace('{n}', str(n)), 1)
for k, d in iconos.items():
    html = html.replace('{{ICON_' + k + '}}', f'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="{d}"/></svg>')
html = html.replace('{{TEXTOS}}', json.dumps(textos, ensure_ascii=False))
assert '{{' not in html, html[html.index('{{'):html.index('{{') + 40]
(aqui / 'index.html').write_text(html, encoding='utf-8')
print('index.html', len(html), 'bytes')
