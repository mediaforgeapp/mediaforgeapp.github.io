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
- **MediaForge Pro & AI Forge** — cloud-enhanced capabilities, including AI-assisted multimedia tasks and credit pack services, distributed via the Mac App Store and direct downloads.
- **Website & Account Services** — product information, documentation, user authentication, profile settings, and payment checkouts.

## Local-First Processing (MediaForge Open)

For all standard workflows in the MediaForge desktop app, processing is strictly local:

- **Source and Output Media Files** — videos, audio, images, and subtitles you import or generate are processed exclusively on your local device. We never upload, receive, or store your local media files during standard offline workflows.
- **FFmpeg Execution** — transcoding, trimming, GIF generation, and stream inspection run locally through FFmpeg and FFprobe binaries on your system.
- **Local Application Data** — task history, custom presets, and user interface preferences are stored locally on your machine.
- **No Mandatory Telemetry** — MediaForge Open does not collect your clipboard content, track your file names, or transmit mandatory diagnostic telemetry to our servers.

## MediaForge Pro & AI Forge Privacy

MediaForge Pro provides optional, credit-based cloud features such as **AI Forge** (intelligent FFmpeg command planning and parameter recommendations):

- **What Is Transmitted for AI Tasks** — when you explicitly run an AI Forge request, only your text prompt and technical metadata about your selected media segments (such as file name, video resolution label, video codec, and container format) are securely transmitted over encrypted channels (TLS 1.3) to our backend inference service. **Your source media video and audio files are never uploaded to the cloud.**
- **Local Command Execution** — the AI model returns a structured FFmpeg command plan (arguments and output extension), which your local MediaForge client then reviews and executes entirely on your device.
- **Ephemeral Processing** — prompts and technical metadata submitted to AI Forge are processed transiently in memory solely to generate the requested FFmpeg plan. We do not retain prompt contents or file metadata after the response is delivered.
- **No Model Training on User Data** — your text prompts and media metadata submitted to AI Forge are **never used to train, retrain, or improve** our foundation models or those of our inference providers.
- **BYOK (Bring Your Own Key) Option** — in MediaForge Pro Settings, you can configure your own OpenAI-compatible endpoint (OpenAI, DeepSeek, Ollama, etc.). When BYOK is enabled, requests bypass our cloud entirely, spend 0 MediaForge credits, and communicate directly with your configured provider. Your custom API key is stored locally in your operating system's preferences and never transmitted to our servers.
- **Strict User Control** — AI features are entirely optional. Standard offline FFmpeg conversions never contact AI endpoints.

## Account, Authentication, and Guest Mode Data

When you use MediaForge Pro, authentication and credit balances are handled through our Builtly infrastructure:

- **Sign in with Apple** — on Apple platforms, you can sign in using **Sign in with Apple** (Guideline 4.8 compliant). You can choose to share your real email or use Apple's private email relay service ("Hide My Email"). We receive your verified user identifier, email (real or relay), and display name provided by Apple.
- **OAuth Authentication** — you can also sign in using Google or GitHub via OAuth 2.0 with PKCE. We receive basic public profile information (email address, display name, and avatar URL). We never receive or store your third-party passwords.
- **Anonymous Guest Device Mode (Guideline 5.1.1(v) Compliant)** — you are not required to create an account or sign in to purchase credits or use AI Forge. When you use the app without signing in, a pseudonymous device guest identifier is generated locally (e.g. `guest_<deviceId>@guest.mediaforgeapp.com`) to track purchased credits and allow immediate feature usage. If you later choose to sign in with Apple, Google, or GitHub, remaining guest credits on the device can be seamlessly transferred to your permanent cloud account.
- **Profile Management** — you may customize your display name or avatar.
- **Session Tokens** — authentication tokens (access and refresh tokens) are stored in secure local preferences on your device to maintain your session.

## Payments, In-App Purchases, and Credits

MediaForge Pro uses a pay-as-you-go credit pack model. Payment processing depends on how you installed the application:

### 1. Mac App Store (Apple In-App Purchases)
For users who install MediaForge Pro from the **Mac App Store**:
- All credit pack purchases are conducted exclusively through **Apple In-App Purchase (StoreKit)**.
- Apple processes your payment information directly according to the [Apple Privacy Policy](https://www.apple.com/legal/privacy/). MediaForge never receives, stores, or processes your credit card numbers or banking credentials.
- We receive and store cryptographically signed transaction identifiers to verify the purchase, credit your account or guest device ledger, and prevent duplicate redemption.

### 2. Direct Website Downloads (Stripe Billing)
For users who download MediaForge directly from our website:
- Credit packs are sold through **Stripe** via our Builtly SaaS billing backend.
- All payments are processed directly by Stripe under PCI-DSS compliance. Stripe processes payment data subject to the [Stripe Privacy Policy](https://stripe.com/privacy/).
- We retain basic transaction records (Stripe checkout session ID, amount, currency, timestamp, product SKU) to credit your ledger balance and fulfill tax and accounting obligations.

### 3. Credit Balance Ledger
We maintain an authoritative cryptographic ledger of purchased and consumed credits associated with your permanent account ID or anonymous guest device ID.

## Application Analytics (PostHog)

MediaForge Pro includes an optional product analytics integration powered by **PostHog** to understand feature adoption and troubleshoot software stability:

- **What Is Collected** — anonymous operational events (such as app version, operating system version, feature navigation, format selection, and anonymized error codes).
- **What Is NEVER Collected** — we **never** collect, log, or transmit your media file contents, file paths containing sensitive personal paths, file previews, clipboard data, custom API keys, or full audio/video streams.
- **User Control & Opt-Out** — you can disable usage analytics at any time directly within the application: open **Settings > General > Usage analytics** and toggle it off. When toggled off, no analytical telemetry is transmitted.

## Website and Cookie Usage

When you browse [mediaforgeapp.com](https://www.mediaforgeapp.com):

- **Essential Storage** — we use local storage and session storage exclusively for basic operational needs: language preference, active authentication tokens, and return URLs for checkout redirects.
- **No Third-Party Advertising Trackers** — our website does not run third-party advertising tracking networks or sell your personal data.
- **Contact Inquiries** — if you email us at [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com), we use your email address and message content only to respond to your inquiry.

## Third-Party Service Providers

We partner with reputable service providers to deliver parts of our online services:

- **Apple** — App Store distribution, StoreKit In-App Purchase processing, and Sign in with Apple authentication.
- **Builtly** — authentication, identity routing, guest sessions, and credit ledger infrastructure.
- **Stripe** — payment processing for direct website distribution.
- **PostHog** — privacy-first, opt-outable product usage analytics.
- **Cloud AI Inference Providers** — transient, confidential generation of FFmpeg command plans for AI Forge.
- **GitHub** — open-source code hosting, issue tracking, and software download releases.

Each service provider processes information under strict contractual obligations of confidentiality and security, consistent with this policy.

## Data Security and Storage

We implement industry-standard technical and organizational security measures, including HTTPS/TLS encryption for all data in transit and access controls for administrative services.

Because standard MediaForge workflows run locally, you retain ultimate control over your local files. We recommend keeping your operating system updated and maintaining backups of critical media.

## Your Rights and Data Choices

Depending on your jurisdiction (such as under GDPR, UK GDPR, or CCPA), you have rights regarding your personal information:

- **Access and Portability** — you may request a copy of the account information and credit transaction history we hold about you.
- **In-App Account Deletion (Guideline 5.1.1(v) Compliant)** — if you have created a permanent account, you can initiate immediate and permanent deletion of your account and all associated cloud data directly within the application settings or by contacting [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com). Deletion irrevocably removes your profile, email, authentication credentials, and remaining cloud credits from our active databases.
- **Correction** — you may update your profile display name or avatar.
- **Local Data Removal** — you can delete all locally stored presets, task history, and outputs at any time by clearing the application directory or uninstalling the app.
- **Analytics Opt-Out** — you can toggle off "Usage analytics" in Settings at any time.

To exercise your privacy rights, please contact us at [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com).

## Children's Privacy

The Service is not intended for children under 13 (or under 16 in certain jurisdictions). We do not knowingly collect personal information from children.

## Changes to This Policy

We may update this Privacy Policy from time to time to reflect new features, improvements, or legal requirements. The updated date at the top of this page indicates when changes take effect.

## Contact Us

If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:

**Email:** [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com)  
**Website:** [https://www.mediaforgeapp.com](https://www.mediaforgeapp.com)
