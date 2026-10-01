#!/usr/bin/env python3
"""Extract i18n JSON and localized legal pages from the MediaForge Next.js source."""

from __future__ import annotations

import json
import re
from pathlib import Path

SRC = Path("/Users/yuriy/Developer/src/github.com/youlu-cn/mediaforge/src/config/locale/messages")
PAGES_SRC = Path("/Users/yuriy/Developer/src/github.com/youlu-cn/mediaforge/content/pages")
OUT = Path(__file__).resolve().parents[1]

LOCALES = {
    "en": "English",
    "de": "Deutsch",
    "es": "Español",
    "fr": "Français",
    "ja": "日本語",
    "ko": "한국어",
    "zh": "简体中文",
    "zh-TW": "繁體中文",
}

COPYRIGHT = {
    "en": "All rights reserved",
    "zh": "保留所有权利",
    "zh-TW": "保留所有權利",
}

# pages/download.json still has stale clipboard-era metadata; override for SEO.
DOWNLOAD_META = {
    "en": {
        "title": "Download MediaForge for macOS",
        "description": "Download MediaForge Open for macOS. Visual FFmpeg presets for video export, GIF creation, audio extraction, and image tools. Windows, Linux, and mobile are coming soon.",
    },
    "zh": {
        "title": "下载 MediaForge（macOS）",
        "description": "下载适用于 macOS 的 MediaForge Open。可视化 FFmpeg 预设，支持视频导出、GIF、音频提取与图片处理。Windows、Linux 与移动端即将推出。",
    },
    "zh-TW": {
        "title": "下載 MediaForge（macOS）",
        "description": "下載適用於 macOS 的 MediaForge Open。視覺化 FFmpeg 預設，支援影片匯出、GIF、音訊擷取與圖片處理。Windows、Linux 與行動版即將推出。",
    },
    "ja": {
        "title": "MediaForge をダウンロード（macOS）",
        "description": "macOS 向け MediaForge Open をダウンロード。ビジュアル FFmpeg プリセットで動画書き出し、GIF、音声抽出、画像処理に対応。Windows / Linux / モバイルは近日対応予定です。",
    },
    "ko": {
        "title": "MediaForge 다운로드 (macOS)",
        "description": "macOS용 MediaForge Open을 다운로드하세요. 시각적 FFmpeg 프리셋으로 영상보내기, GIF, 오디오 추출, 이미지 처리를 지원합니다. Windows, Linux, 모바일은 곧 제공됩니다.",
    },
    "de": {
        "title": "MediaForge für macOS herunterladen",
        "description": "Laden Sie MediaForge Open für macOS herunter. Visuelle FFmpeg-Presets für Videoexport, GIF, Audioextraktion und Bildtools. Windows, Linux und Mobile folgen bald.",
    },
    "es": {
        "title": "Descargar MediaForge para macOS",
        "description": "Descarga MediaForge Open para macOS. Presets visuales de FFmpeg para exportar vídeo, crear GIF, extraer audio y procesar imágenes. Windows, Linux y móvil llegarán pronto.",
    },
    "fr": {
        "title": "Télécharger MediaForge pour macOS",
        "description": "Téléchargez MediaForge Open pour macOS. Presets FFmpeg visuels pour l’export vidéo, les GIF, l’extraction audio et les images. Windows, Linux et mobile bientôt disponibles.",
    },
}

LEGAL_META = {
    "privacy-policy": {
        "en": {
            "title": "Privacy Policy",
            "description": "How MediaForge handles privacy for the desktop app and website. Local-first processing; media files stay on your device.",
        },
        "zh": {
            "title": "隐私政策",
            "description": "MediaForge 桌面应用与网站的隐私说明。本地优先处理，媒体文件留在你的设备上。",
        },
        "zh-TW": {
            "title": "隱私權政策",
            "description": "MediaForge 桌面應用與網站的隱私說明。本地優先處理，媒體檔案留在你的裝置上。",
        },
        "ja": {
            "title": "プライバシーポリシー",
            "description": "MediaForge デスクトップアプリとウェブサイトのプライバシー方針。ローカル優先処理で、メディアファイルは端末内に留まります。",
        },
        "ko": {
            "title": "개인정보 처리방침",
            "description": "MediaForge 데스크톱 앱과 웹사이트의 개인정보 처리 방침. 로컬 우선 처리로 미디어 파일은 기기에 유지됩니다.",
        },
        "de": {
            "title": "Datenschutzrichtlinie",
            "description": "Datenschutz bei MediaForge für App und Website. Lokale Verarbeitung – Mediendateien bleiben auf Ihrem Gerät.",
        },
        "es": {
            "title": "Política de privacidad",
            "description": "Cómo MediaForge trata la privacidad en la app y el sitio web. Procesamiento local; tus archivos permanecen en tu dispositivo.",
        },
        "fr": {
            "title": "Politique de confidentialité",
            "description": "Confidentialité de MediaForge pour l’app et le site. Traitement local : vos fichiers restent sur votre appareil.",
        },
    },
    "terms-of-service": {
        "en": {
            "title": "Terms of Service",
            "description": "Terms governing use of the MediaForge desktop app, website, and related services.",
        },
        "zh": {
            "title": "服务条款",
            "description": "MediaForge 桌面应用、网站及相关服务的使用条款。",
        },
        "zh-TW": {
            "title": "服務條款",
            "description": "MediaForge 桌面應用、網站及相關服務的使用條款。",
        },
        "ja": {
            "title": "利用規約",
            "description": "MediaForge デスクトップアプリ、ウェブサイトおよび関連サービスの利用規約。",
        },
        "ko": {
            "title": "서비스 약관",
            "description": "MediaForge 데스크톱 앱, 웹사이트 및 관련 서비스 이용 약관.",
        },
        "de": {
            "title": "Nutzungsbedingungen",
            "description": "Bedingungen für die Nutzung der MediaForge-Desktop-App, Website und verwandter Dienste.",
        },
        "es": {
            "title": "Términos de servicio",
            "description": "Términos que rigen el uso de la app de escritorio MediaForge, el sitio web y servicios relacionados.",
        },
        "fr": {
            "title": "Conditions d’utilisation",
            "description": "Conditions régissant l’utilisation de l’app MediaForge, du site web et des services associés.",
        },
    },
}


def main() -> None:
    data_dir = OUT / "_data" / "i18n"
    data_dir.mkdir(parents=True, exist_ok=True)

    (OUT / "_data" / "locales.yml").write_text(
        "default: en\n"
        "og_locale:\n"
        '  en: "en_US"\n'
        '  de: "de_DE"\n'
        '  es: "es_ES"\n'
        '  fr: "fr_FR"\n'
        '  ja: "ja_JP"\n'
        '  ko: "ko_KR"\n'
        '  zh: "zh_CN"\n'
        '  zh-TW: "zh_TW"\n'
        "items:\n"
        + "".join(f'  - id: "{k}"\n    name: "{v}"\n' for k, v in LOCALES.items()),
        encoding="utf-8",
    )

    for loc, name in LOCALES.items():
        landing = json.loads((SRC / loc / "landing.json").read_text(encoding="utf-8"))
        gallery = json.loads((SRC / loc / "pages" / "gallery.json").read_text(encoding="utf-8"))
        common = json.loads((SRC / loc / "common.json").read_text(encoding="utf-8"))

        payload = {
            "name": name,
            "header": {
                "gallery": landing["header"]["nav"]["items"][0]["title"],
                "download": landing["header"]["buttons"][0]["title"],
            },
            "footer": {
                "description": landing["footer"]["brand"]["description"],
                "privacy": landing["footer"]["agreement"]["items"][0]["title"],
                "terms": landing["footer"]["agreement"]["items"][1]["title"],
                "copyright_suffix": COPYRIGHT.get(loc, COPYRIGHT["en"]),
            },
            "home": landing["home_v2"],
            "download": landing["download_v2"],
            "gallery": gallery["page"]["coming_soon"],
            "gallery_meta": gallery.get("metadata", {}),
            "home_meta": common.get("metadata", {}),
            "download_meta": DOWNLOAD_META[loc],
            "privacy_meta": LEGAL_META["privacy-policy"][loc],
            "terms_meta": LEGAL_META["terms-of-service"][loc],
        }

        (data_dir / f"{loc}.json").write_text(
            json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        print(f"wrote i18n/{loc}.json")

    for loc in LOCALES:
        prefix = "" if loc == "en" else f"/{loc}"
        for kind, title_fallback in (
            ("privacy-policy", "Privacy Policy"),
            ("terms-of-service", "Terms of Service"),
        ):
            src_file = (
                PAGES_SRC / f"{kind}.mdx"
                if loc == "en"
                else PAGES_SRC / f"{kind}.{loc}.mdx"
            )
            if not src_file.exists():
                print(f"missing {src_file}")
                continue

            text = src_file.read_text(encoding="utf-8")
            m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.S)
            body = m.group(2).lstrip() if m else text
            meta = LEGAL_META[kind][loc]
            title = meta["title"]
            description = meta["description"]
            permalink = f"{prefix}/{kind}/"
            content = (
                "---\n"
                f"layout: legal\n"
                f"title: {title}\n"
                f"description: \"{description}\"\n"
                f"lang: {loc}\n"
                f"page_id: {kind}\n"
                f"permalink: {permalink}\n"
                "---\n"
                f"{body}"
            )

            if loc == "en":
                dest = OUT / f"{kind}.md"
            else:
                dest_dir = OUT / loc
                dest_dir.mkdir(parents=True, exist_ok=True)
                dest = dest_dir / f"{kind}.md"
            dest.write_text(content, encoding="utf-8")
            print(f"wrote {dest.relative_to(OUT)}")

    print("done")


if __name__ == "__main__":
    main()
