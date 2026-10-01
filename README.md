# MediaForge website (GitHub Pages / Jekyll)

Official marketing site for [MediaForge](https://github.com/mediaforgeapp/mediaforge), served at [www.mediaforgeapp.com](https://www.mediaforgeapp.com/).

## Pages

- `/` — home (English default)
- `/gallery/`, `/download/`, `/privacy-policy/`, `/terms-of-service/`
- Localized mirrors under `/zh/`, `/zh-TW/`, `/ja/`, `/ko/`, `/de/`, `/es/`, `/fr/` (same as the main site)

Header and footer include a language switcher that keeps you on the equivalent page.

## Local preview

```bash
bundle install
./script/jekyll serve
```

Open http://127.0.0.1:4000

> On Ruby 3.2+ / 4.x, `./script/jekyll` loads `.ruby4_boot.rb` so Liquid 4 (used by `github-pages`) can run. GitHub Pages itself uses an older Ruby and does not need the shim.

## i18n data

Translations live in `_data/i18n/*.json`, extracted from the MediaForge app repo:

```bash
python3 script/extract_i18n.py
python3 script/generate_locale_pages.py
```

## Custom domain

This repo is configured for **www.mediaforgeapp.com** (`CNAME` + `_config.yml` `url`).

In the GitHub repo **Settings → Pages**:
1. Set custom domain to `www.mediaforgeapp.com`
2. Enable **Enforce HTTPS** after DNS propagates

DNS (typical):
- `www` → CNAME → `mediaforgeapp.github.io`
- apex `mediaforgeapp.com` → A/ALIAS 到 GitHub Pages，或 301 重定向到 `www`
