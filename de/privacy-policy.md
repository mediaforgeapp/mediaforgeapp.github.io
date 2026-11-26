---
layout: legal
title: Datenschutzerklärung
description: "Informationen zum Datenschutz für die MediaForge-Desktop-App, Website, Benutzerkonten, AI Forge und Stripe-Abrechnung."
lang: de
page_id: privacy-policy
permalink: /de/privacy-policy/
---
**Gültig ab: 26. November 2026**

## Einführung

Willkommen bei **MediaForge**, einer visuellen Multimedia-Desktop-Anwendung für FFmpeg-Workflows. MediaForge bietet sowohl eine quelloffene lokale Desktop-Version (**MediaForge Open**) als auch cloud-gestützte professionelle Funktionen (**MediaForge Pro**), einschließlich AI Forge.

Diese Datenschutzerklärung erläutert, welche Daten wir erheben, wie wir sie verwenden und wie wir Ihre Privatsphäre bei der Nutzung der MediaForge-Desktop-App, unserer Website [mediaforgeapp.com](https://www.mediaforgeapp.com), Benutzerkonten und Stripe-Abrechnungsdienste (zusammen der „Dienst“) schützen.

Unser Leitprinzip lautet **Local-First**: Standardmäßige Medienkonvertierungen finden vollständig auf Ihrem lokalen Gerät statt. Cloud-Verarbeitung und Kontodaten werden nur genutzt, wenn Sie Pro- oder Online-Funktionen explizit aktivieren.

## Geltungsbereich

Diese Erklärung gilt für:

- **MediaForge Open** — die kostenlose Open-Source-App für macOS (und künftige Plattformen) über [GitHub Releases](https://github.com/mediaforgeapp/mediaforge/releases).
- **MediaForge Pro & AI Forge** — cloud-gestützte Funktionen, KI-unterstützte Medienverarbeitung und Credit-Pakete, über den Mac App Store und Direkt-Downloads.
- **Website & Kontodienste** — Website, Benutzerauthentifizierung, Profileinstellungen und Zahlungsabwicklung.

## Lokale Verarbeitung (MediaForge Open)

Bei allen regulären Workflows in der Desktop-App verbleiben Ihre Daten strikt auf Ihrem Rechner:

- **Quell- und Ausgabedateien** — Videos, Audiodateien, Bilder und Untertitel werden ausschließlich lokal verarbeitet. Wir laden Ihre Mediendateien niemals auf Server hoch.
- **FFmpeg-Ausführung** — Transkodierung, Schnitt und GIF-Erstellung erfolgen lokal über die auf Ihrem System installierten FFmpeg- und FFprobe-Binärdateien.
- **Lokale Konfiguration** — Verlauf, Voreinstellungen und Oberflächeneinstellungen werden lokal auf Ihrem Gerät gespeichert.
- **Keine Pflicht-Telemetrie** — MediaForge Open erfasst keine Zwischenablageinhalte, keine Dateinamen und keine obligatorischen Diagnose-Telemetriedaten.

## MediaForge Pro & AI Forge Datenschutz

MediaForge Pro bietet optionale, guthabenbasierte Cloud-Funktionen wie **AI Forge** (FFmpeg-Befehlsplanung):

- **Übertragene Daten** — Nur wenn Sie AI Forge starten, werden Ihr Text-Prompt und technische Metadaten der gewählten Segmente (Dateiname, Auflösung, Codec, Container) über TLS 1.3 übertragen. **Quellvideo und -audio werden nicht hochgeladen.**
- **Lokale Ausführung** — Das Modell liefert einen FFmpeg-Plan, den die App lokal ausführt.
- **Nur Weiterleitung, keine Speicherung** — AI-Forge-Anfragen (Prompt und technische Metadaten) werden über unsere API an den KI-Modellanbieter weitergeleitet, um den FFmpeg-Plan zu erzeugen. Nach Rückgabe der Antwort speichert MediaForge weder Prompt-Inhalte noch Dateimetadaten.
- **Kein KI-Training** — Diese Daten werden **niemals zum Trainieren von Modellen verwendet**.
- **BYOK** — Ein eigener OpenAI-kompatibler Endpunkt umgeht unsere Server, verbraucht 0 Credits und speichert den API-Schlüssel nur lokal.
- **Zustimmung vor dem Senden** — Bei der ersten Nutzung von AI Forge fragt die App um Erlaubnis, bevor Prompt oder Dateidetails gesendet werden, und weist darauf hin, dass ein Cloud-Dienst mit KI-Modellanbietern Dritter die Anfrage verarbeitet. Bei Ablehnung wird nichts gesendet. Für einen eigenen Endpunkt wird separat gefragt.
- **Volle Kontrolle** — KI-Funktionen sind optional. Lokale FFmpeg-Workflows kontaktieren keine KI-Endpunkte.

## Konto, Authentifizierung und Gastmodus

- **Mit Apple anmelden** — Auf Apple-Plattformen inklusive privater E-Mail-Weiterleitung (Hide My Email).
- **OAuth** — Google oder GitHub via OAuth 2.0 (PKCE). Wir erhalten nur öffentliche Profildaten, niemals Passwörter.
- **Anonymer Gerätegast** — Kauf und Nutzung ohne Konto. Ein pseudonymes Gerätekonto (z. B. `guest_<deviceId>@guest.mediaforgeapp.com`) bucht Credits. Nach der Anmeldung können Restguthaben übertragen werden.
- **Sitzungs-Token** — werden von der App in den lokalen Einstellungen auf dem Gerät gespeichert und beim Abmelden entfernt.

## Zahlungen, In-App-Käufe und Credits

1. **Mac App Store** — Credit-Pakete nur über **Apple In-App Purchase (StoreKit)**. Zahlungsdaten verarbeitet Apple. Wir speichern signierte Transaktions-IDs zur Gutschrift.
2. **Website-Direktvertrieb** — Zahlung über **Stripe** ([Stripe-Datenschutzerklärung](https://stripe.com/privacy)). Wir speichern Sitzungs-ID, Betrag, Währung, Zeitstempel und Produkt-ID.
3. **Credit-Buch** — für Konto oder Gastgerät.

## Nutzungsanalyse (PostHog)

Optionale, standardmäßig aktive Produktanalyse: App-Version, Betriebssystem, Funktionsnutzung und anonyme Fehlercodes. **Keine Mediendateien, keine privaten Pfade, keine API-Schlüssel.** Abschaltbar unter **Einstellungen > Allgemein > Anonyme Nutzungsdaten** (standardmäßig aktiv).

## Drittanbieter-Dienstleister

- **Apple** — App Store, StoreKit und Mit Apple anmelden.
- **Builtly** — Authentifizierung, Gastsitzungen und Credit-Buch.
- **Stripe** — Zahlung für Direktvertrieb.
- **PostHog** — abschaltbare Nutzungsanalyse.
- **Cloud-KI-Modellanbieter** — verarbeiten weitergeleitete AI-Forge-Anfragen zur Erstellung von FFmpeg-Plänen.
- **GitHub** — Quellcode und Downloads.

## Ihre Rechte

Auskunft, Berichtigung, Übertragbarkeit und **Löschung des Kontos in der App** (**Einstellungen > AI Forge > Delete account**). Lokale Daten durch Deinstallation entfernbar. Analyse jederzeit abschaltbar. Kontakt: [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com).

## Kontakt

**Betreiber:** Aime Tech Media Limited, Room 1021, Beverley Commercial Centre, 87-105 Chatham Road South, Tsim Sha Tsui, Hong Kong. MediaForge Pro wird von diesem Betreiber bereitgestellt. MediaForge Open ist ein separates quelloffenes Community-Projekt.

Bei Fragen zum Datenschutz kontaktieren Sie uns unter:

**E-Mail:** [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com)  
**Website:** [https://www.mediaforgeapp.com](https://www.mediaforgeapp.com)
