---
layout: legal
title: Datenschutzerklärung
description: "Informationen zum Datenschutz für die MediaForge-Desktop-App, Website, Benutzerkonten, AI Forge und Stripe-Abrechnung."
lang: de
page_id: privacy-policy
permalink: /de/privacy-policy/
---
**Gültig ab: 1. November 2026**

## Einführung

Willkommen bei **MediaForge**, einer visuellen Multimedia-Desktop-Anwendung für FFmpeg-Workflows. MediaForge bietet sowohl eine quelloffene lokale Desktop-Version (**MediaForge Open**) als auch cloud-gestützte professionelle Funktionen (**MediaForge Pro**), einschließlich AI Forge.

Diese Datenschutzerklärung erläutert, welche Daten wir erheben, wie wir sie verwenden und wie wir Ihre Privatsphäre bei der Nutzung der MediaForge-Desktop-App, unserer Website [mediaforgeapp.com](https://www.mediaforgeapp.com), Benutzerkonten und Stripe-Abrechnungsdienste (zusammen der „Dienst“) schützen.

Unser Leitprinzip lautet **Local-First**: Standardmäßige Medienkonvertierungen finden vollständig auf Ihrem lokalen Gerät statt. Cloud-Verarbeitung und Kontodaten werden nur genutzt, wenn Sie Pro- oder Online-Funktionen explizit aktivieren.

## Geltungsbereich

Diese Erklärung gilt für:

- **MediaForge Open** — die kostenlose Open-Source-App für macOS (und künftige Plattformen) über [GitHub Releases](https://github.com/mediaforgeapp/mediaforge/releases).
- **MediaForge Pro & AI Forge** — cloud-gestützte Funktionen, KI-unterstützte Medienverarbeitung und Credit-Pakete.
- **Website & Kontodienste** — Website, Benutzerauthentifizierung, Profileinstellungen und Stripe-Checkout.

## Lokale Verarbeitung (MediaForge Open)

Bei allen regulären Workflows in der Desktop-App verbleiben Ihre Daten strikt auf Ihrem Rechner:

- **Quell- und Ausgabedateien** — Videos, Audiodateien, Bilder und Untertitel werden ausschließlich lokal verarbeitet. Wir laden Ihre Mediendateien niemals auf Server hoch.
- **FFmpeg-Ausführung** — Transkodierung, Schnitt und GIF-Erstellung erfolgen lokal über die auf Ihrem System installierten FFmpeg- und FFprobe-Binärdateien.
- **Lokale Konfiguration** — Verlauf, Voreinstellungen und Oberflächeneinstellungen werden lokal auf Ihrem Gerät gespeichert.
- **Keine Pflicht-Telemetrie** — MediaForge Open erfasst keine Zwischenablageinhalte, keine Dateinamen und keine obligatorischen Diagnose-Telemetriedaten.

## MediaForge Pro & AI Forge Datenschutz

MediaForge Pro bietet optionale, guthabenbasierte Cloud-Funktionen wie **AI Forge** (intelligente Videoanalyse, KI-Generierung und neuronale Audio-/Videoverbesserung):

- **Für KI-Aufgaben übertragene Daten** — Nur wenn Sie eine AI-Forge-Aufgabe starten, werden die dafür erforderlichen Medienabschnitte oder Prompts über verschlüsselte Verbindungen (TLS 1.3) an unsere Backend-Infrastruktur übertragen.
- **Flüchtige Verarbeitung (Ephemeral Processing)** — An AI Forge übermittelte Mediendaten werden ausschließlich im Arbeitsspeicher verarbeitet und nach Abschluss der Aufgabe umgehend verworfen. Es findet keine dauerhafte Speicherung statt.
- **Kein KI-Training mit Nutzerdaten** — Ihre über AI Forge verarbeiteten Medien und Prompts werden **niemals zum Trainieren von KI-Basismodellen verwendet**.
- **Volle Kontrolle** — KI-Funktionen sind vollständig optional. Lokale FFmpeg-Workflows stellen keinerlei Verbindung zu KI-Endpunkten her.

## Konto- und Authentifizierungsdaten

Wenn Sie sich anmelden, um Credits zu verwalten oder Pro-Funktionen zu nutzen, verarbeiten wir begrenzte Kontodaten über Builtly:

- **OAuth-Anmeldung** — Anmeldung über Google oder GitHub via OAuth 2.0 (PKCE). Wir erhalten grundlegende öffentliche Profildaten (E-Mail-Adresse, Name, Avatar-URL). Passwörter erhalten wir niemals.
- **Profilverwaltung** — Sie können Ihren Namen anpassen oder ein Profilbild hochladen. Profilbilder werden sicher in der Cloud gespeichert.
- **Sitzungs-Token** — Zugriffs- und Aktualisierungs-Token werden im lokalen Speicher Ihres Browsers abgelegt, um Ihre Sitzung aufrechtzuerhalten.

## Zahlungen, Abrechnung und Credits

Credit-Pakete für MediaForge Pro werden über **Stripe** abgewickelt:

- **PCI-DSS-konforme Zahlungen** — Zahlungsdaten werden direkt von Stripe verarbeitet. MediaForge speichert keine Kreditkartennummern oder CVVs. Es gilt die [Stripe-Datenschutzerklärung](https://stripe.com/privacy).
- **Abrechnungsbelege** — Wir speichern Transaktionsbelege (Stripe-Session-ID, Betrag, Währung, Zeitstempel, Produkt-ID) zur Gutschrift und für gesetzliche Buchhaltungspflichten.
- **Credit-Guthabenbuch** — Wir führen ein sicheres Register über gekaufte und verbrauchte Credits Ihres Kontos.

## Drittanbieter-Dienstleister

Wir arbeiten mit vertrauenswürdigen Partnern zusammen:

- **Builtly** — Authentifizierung und Credit-Verwaltung.
- **Stripe** — Sichere Zahlungsabwicklung.
- **Cloud-KI-Inferenz-Provider** — Sichere, flüchtige Ausführung von AI-Forge-Aufträgen.
- **GitHub** — Quellcode-Hosting und Download-Bereitstellung.

## Ihre Rechte

Gemäß DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung und Datenübertragbarkeit Ihrer Kontodaten. Wenden Sie sich hierzu an [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com).

Lokale Daten von MediaForge Open können Sie jederzeit durch Löschen des Anwendungsverzeichnisses oder Deinstallation entfernen.

## Kontakt

Bei Fragen zum Datenschutz kontaktieren Sie uns unter:

**E-Mail:** [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com)  
**Website:** [https://www.mediaforgeapp.com](https://www.mediaforgeapp.com)
