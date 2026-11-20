"""Scan the Taiwan ayurveda pages for leftover prices from before the 2026-11-20 price list.

Run from the repo root: python tools/check_ayurveda_prices.py
Exits 1 and prints the lines if any old price or wording is still on a page.
Zushi (yen) prices on /ja/ayurveda/ and the Zushi block on /en/ayurveda/ are separate and not checked here.
"""
import re, sys, pathlib

PAGES = ['ayurveda/index.html', 'ayurveda/postpartum/index.html',
         'en/ayurveda/index.html', 'en/ayurveda/postpartum/index.html', 'ja/ayurveda/postpartum/index.html']
OLD = [r'NT\$ ?2,800', r'NT\$ ?4,900', r'NT\$ ?4,600', r'NT\$ ?4,400', r'14,400', r'22,500',
       r'首次體驗價 NT\$ ?2,800', r'主題套組', r'基礎款', r'完整套組', r'足浴', r'foot bath',
       r'子宮收復', r'惡露排淨', r'會陰傷口癒合', r'全身排毒', r'產後第 ?\d+ ?週以後']
bad = 0
for p in PAGES:
    for n, line in enumerate(pathlib.Path(p).read_text(encoding='utf-8').splitlines(), 1):
        for pat in OLD:
            if re.search(pat, line):
                print(f'{p}:{n}: {pat}: {line.strip()[:120]}'); bad += 1
print('OK, no old prices' if not bad else f'{bad} leftover(s)')
sys.exit(1 if bad else 0)
