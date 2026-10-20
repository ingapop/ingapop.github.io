# popovaite.com

Asmeninė Ingos Popovaitės svetainė, sukurta su [Eleventy](https://www.11ty.dev/).

## Kur kas yra

| Puslapis | Failas |
|---|---|
| Apie | `index.md` |
| Pozicijos | `positions.md` |
| Tekstai | `writing/index.md`, po vieną failą kiekvienam tekstui `writing/posts/` |
| Žiniasklaida | `press.md` |
| Renginiai | `talks.md` |
| Vardas, šūkis, meniu, socialiniai tinklai | `_data/site.json` |
| Spalvos ir išvaizda | `assets/css/style.css` |
| CV (PDF) | `assets/pdf/inga-popovaite-cv.pdf` |

## Peržiūra kompiuteryje

```
npm install   # tik pirmą kartą
npm start     # http://localhost:8080/
```

## Paskelbimas

Kiekvienas `git push` į `master` šaką automatiškai atnaujina popovaite.com (per GitHub Actions, ~1 min.).

## Archyvas

Senoji Jekyll svetainė išsaugota žymoje `jekyll-svetaine-2022`, senosios šakos – žymose `archyvas/*`.
Asmeninė medžiaga (senos nuotraukos, CV versijos, tyrimų paveikslai) – `~/Documents/popovaite-archyvas/` (ne GitHub'e).
