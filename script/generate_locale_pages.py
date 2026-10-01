#!/usr/bin/env python3
"""Generate localized home/gallery/download pages for each non-default locale."""

from pathlib import Path

OUT = Path(__file__).resolve().parents[1]
LOCALES = ["de", "es", "fr", "ja", "ko", "zh", "zh-TW"]
PAGES = [
    ("home", "index.html", "/"),
    ("gallery", "gallery.html", "/gallery/"),
    ("download", "download.html", "/download/"),
]


def main() -> None:
    for loc in LOCALES:
        dest_dir = OUT / loc
        dest_dir.mkdir(parents=True, exist_ok=True)
        for page_id, filename, suffix in PAGES:
            include = "home" if page_id == "home" else page_id
            permalink = f"/{loc}{suffix}"
            content = (
                "---\n"
                "layout: default\n"
                f"lang: {loc}\n"
                f"page_id: {page_id}\n"
                f"permalink: {permalink}\n"
                "---\n"
                f"{{% include {include}.html %}}\n"
            )
            (dest_dir / filename).write_text(content, encoding="utf-8")
            print(f"wrote {loc}/{filename}")


if __name__ == "__main__":
    main()
