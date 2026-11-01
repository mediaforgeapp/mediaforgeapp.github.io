#!/usr/bin/env python3
"""Generate localized home/gallery/download pages for each non-default locale."""

from pathlib import Path

OUT = Path(__file__).resolve().parents[1]
LOCALES = ["de", "es", "fr", "ja", "ko", "zh", "zh-TW"]
PAGES = [
    ("home", "index.html", "/"),
    ("gallery", "gallery.html", "/gallery/"),
    ("download", "download.html", "/download/"),
    ("login", "account/login.html", "/account/login/"),
    ("account", "account/index.html", "/account/"),
    ("pricing", "pricing.html", "/pricing/"),
    ("billing-thanks", "billing/thanks.html", "/billing/thanks/"),
]


def main() -> None:
    for loc in LOCALES:
        dest_dir = OUT / loc
        dest_dir.mkdir(parents=True, exist_ok=True)
        for page_id, filename, suffix in PAGES:
            include = (
                "home"
                if page_id == "home"
                else ("thanks" if page_id == "billing-thanks" else page_id)
            )
            permalink = f"/{loc}{suffix}"
            out_path = dest_dir / filename
            out_path.parent.mkdir(parents=True, exist_ok=True)
            extra_meta = ""
            if page_id in ("login", "account", "billing-thanks"):
                extra_meta = "robots: noindex, nofollow\nsitemap: false\n"
            content = (
                "---\n"
                "layout: default\n"
                f"lang: {loc}\n"
                f"page_id: {page_id}\n"
                f"permalink: {permalink}\n"
                f"{extra_meta}"
                "---\n"
                f"{{% include {include}.html %}}\n"
            )
            out_path.write_text(content, encoding="utf-8")
            print(f"wrote {loc}/{filename}")


if __name__ == "__main__":
    main()
