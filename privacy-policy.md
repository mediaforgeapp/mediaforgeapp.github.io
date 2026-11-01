---
layout: legal
title: Privacy Policy
description: "How MediaForge handles privacy for the desktop app, website, user accounts, AI Forge, and Stripe billing."
lang: en
page_id: privacy-policy
permalink: /privacy-policy/
---
**Effective Date: November 1, 2026**

## Introduction

Welcome to **MediaForge**, a desktop-first visual multimedia application for FFmpeg workflows. MediaForge provides both an open-core local desktop edition (**MediaForge Open**) and cloud-enhanced professional capabilities (**MediaForge Pro**), including AI Forge.

This Privacy Policy explains what information we collect, how we use it, and how we protect your privacy across the MediaForge desktop application, our website at [mediaforgeapp.com](https://www.mediaforgeapp.com), user accounts, billing systems, and related services (collectively, the "Service").

Our guiding principle is **local-first by default**: standard media conversions happen entirely on your machine. Cloud processing and account data are only used when you explicitly opt in to Pro or online features.

## Scope of Services

This policy covers:

- **MediaForge Open** — the free, open-source desktop app for macOS (and future platforms) available from [GitHub Releases](https://github.com/mediaforgeapp/mediaforge/releases).
- **MediaForge Pro & AI Forge** — cloud-enhanced capabilities, including AI-assisted multimedia tasks and credit pack services.
- **Website & Account Services** — product information, documentation, user authentication, profile settings, and payment checkouts.

## Local-First Processing (MediaForge Open)

For all standard workflows in the MediaForge desktop app, processing is strictly local:

- **Source and Output Media Files** — videos, audio, images, and subtitles you import or generate are processed exclusively on your local device. We never upload, receive, or store your local media files during standard offline workflows.
- **FFmpeg Execution** — transcoding, trimming, GIF generation, and stream inspection run locally through FFmpeg and FFprobe binaries on your system.
- **Local Application Data** — task history, custom presets, and user interface preferences are stored locally on your machine.
- **No Mandatory Telemetry** — MediaForge Open does not collect your clipboard content, track your file names, or transmit mandatory diagnostic telemetry to our servers.

## MediaForge Pro & AI Forge Privacy

MediaForge Pro provides optional, credit-based cloud features such as **AI Forge** (smart video analysis, AI generation, and neural audio/video enhancement):

- **Data Transmitted for AI Tasks** — when you explicitly initiate an AI Forge task, the specific media clip, image frame, or prompt required for that operation is securely transmitted over encrypted channels (TLS 1.3) to our backend infrastructure.
- **Ephemeral Processing** — media submitted to AI Forge is processed in transient memory solely to fulfill your requested task. We do not retain your media files after processing completes.
- **No Model Training on User Data** — your private media and prompts submitted to AI Forge are **never used to train, retrain, or improve** our AI foundation models or those of our third-party inference providers.
- **Strict User Control** — AI features are entirely optional. Offline FFmpeg workflows never contact AI endpoints.

## Account and Authentication Data

When you sign in to MediaForge to manage credits or use Pro features, we handle limited account data through our Builtly infrastructure:

- **OAuth Authentication** — you can sign in using third-party identity providers (Google or GitHub) via OAuth 2.0 with PKCE. We receive basic public profile information, including your email address, display name, and avatar URL. We never receive or store your third-party account passwords.
- **Profile Management** — you may optionally customize your display name or upload a custom profile avatar. Uploaded avatars are stored securely in cloud object storage for your account profile.
- **Session Tokens** — authentication tokens (access and refresh tokens) are stored in your browser's local or session storage to keep you signed in securely.

## Payments, Billing, and Credits

Credit packs for MediaForge Pro are sold on our website through **Stripe** via our Builtly SaaS billing backend:

- **PCI-DSS Compliant Payments** — all payments are processed directly by Stripe. MediaForge does not collect, handle, or store your credit card numbers, expiration dates, CVVs, or full payment credentials. Stripe handles transactions subject to the [Stripe Privacy Policy](https://stripe.com/privacy).
- **Billing Records** — we retain transaction records (such as Stripe Checkout session ID, amount paid, currency, timestamp, and product identifier) to credit your account balance and fulfill legal tax and accounting requirements.
- **Credit Balance Ledger** — we maintain a secure ledger balance of your purchased and consumed credits associated with your account ID.

## Website and Cookie Usage

When you browse [mediaforgeapp.com](https://www.mediaforgeapp.com):

- **Essential Storage** — we use local storage and session storage exclusively for basic operational needs: language preference, active authentication tokens, and return URLs for checkout redirects.
- **No Third-Party Advertising Trackers** — our website does not run third-party advertising tracking networks or sell your personal data.
- **Contact Inquiries** — if you email us at [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com), we use your email address and message content only to respond to your inquiry.

## Third-Party Service Providers

We partner with reputable service providers to deliver parts of our online services:

- **Builtly** — authentication, user account management, and credit pack catalog infrastructure.
- **Stripe** — payment processing and checkout interfaces.
- **Cloud AI Inference Providers** — ephemeral, confidential processing of AI Forge tasks.
- **GitHub** — open-source code hosting, issue tracking, and software download releases.

Each service provider processes information under strict contractual obligations of confidentiality and security, consistent with this policy.

## Data Security and Storage

We implement industry-standard technical and organizational security measures, including HTTPS/TLS encryption for all data in transit and access controls for administrative services.

Because standard MediaForge workflows run locally, you retain ultimate control over your local files. We recommend keeping your operating system updated and maintaining backups of critical media.

## Your Rights and Data Choices

Depending on your jurisdiction (such as under GDPR, UK GDPR, or CCPA), you have rights regarding your personal information:

- **Access and Portability** — you may request a copy of the account information and credit transaction history we hold about you.
- **Correction and Deletion** — you may update your profile or request the deletion of your account and associated personal data by contacting us.
- **Local Data Removal** — for MediaForge Open, you can delete all locally stored presets, task history, and outputs by clearing the application directory or uninstalling the app.

To exercise your privacy rights, please contact us at [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com).

## Children's Privacy

The Service is not intended for children under 13 (or under 16 in certain jurisdictions). We do not knowingly collect personal information from children.

## Changes to This Policy

We may update this Privacy Policy from time to time to reflect new features, improvements, or legal requirements. The updated date at the top of this page indicates when changes take effect.

## Contact Us

If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:

**Email:** [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com)  
**Website:** [https://www.mediaforgeapp.com](https://www.mediaforgeapp.com)
