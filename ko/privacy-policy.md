---
layout: legal
title: 개인정보 처리방침
description: "MediaForge 데스크톱 앱, 웹사이트, 사용자 계정, AI Forge 및 Stripe 결제 시스템의 개인정보 보호 정책."
lang: ko
page_id: privacy-policy
permalink: /ko/privacy-policy/
---
**시행일: 2026년 11월 1일**

## 개요

**MediaForge**에 오신 것을 환영합니다. MediaForge는 데스크톱 환경을 위한 FFmpeg 비주얼 멀티미디어 처리 프로그램입니다. 완전한 오픈소스 로컬 버전(**MediaForge Open**)과 클라우드 기반 프로 기능(**MediaForge Pro**, AI Forge 포함)을 제공합니다.

본 개인정보 처리방침은 MediaForge 데스크톱 응용 프로그램, 공식 웹사이트 [mediaforgeapp.com](https://www.mediaforgeapp.com), 사용자 계정 및 결제 시스템(통칭 "서비스")을 이용하실 때 개인정보가 어떻게 수집, 처리, 보호되는지 안내합니다.

당사의 핵심 원칙은 **로컬 우선(Local-First)**입니다. 표준 미디어 변환은 사용자의 로컬 기기에서 완전히 처리되며, 클라우드 및 계정 데이터는 Pro 또는 온라인 기능을 명시적으로 사용할 때만 필요한 범위 내에서 처리됩니다.

## 적용 범위

본 방침은 다음에 적용됩니다:

- **MediaForge Open** — [GitHub Releases](https://github.com/mediaforgeapp/mediaforge/releases)를 통해 제공되는 무료 오픈소스 데스크톱 앱.
- **MediaForge Pro 및 AI Forge** — 클라우드 AI 기능 및 크레딧 팩. Mac App Store와 직접 다운로드로 제공.
- **웹사이트 및 계정 서비스** — 제품 안내, 인증, 프로필 및 결제.

## 로컬 우선 처리 (MediaForge Open)

데스크톱 앱의 표준 오프라인 워크플로에서 미디어 처리는 로컬 장치 내에서만 이루어집니다:

- **원본 및 출력 미디어 파일** — 사용자가 가져오거나 내보내는 비디오, 오디오, 이미지, 자막은 오직 로컬 장치에서만 처리됩니다. 일반 변환 작업 시 미디어 파일이 외부 서버로 업로드되거나 저장되지 않습니다.
- **FFmpeg 로컬 실행** — 트랜스코딩, 자르기, GIF 생성은 사용자의 컴퓨터에 설치된 FFmpeg 및 FFprobe 바이너리를 통해 직접 실행됩니다.
- **로컬 설정 데이터** — 작업 기록, 사용자 사전 설정(Presets), 인터페이스 환경설정은 기기 로컬 드라이브에 저장됩니다.
- **필수 텔레메트리 미수집** — 클립보드 내용, 파일 이름, 강제 원격 진단 데이터는 수집되지 않습니다.

## MediaForge Pro 및 AI Forge 개인정보 보호

**AI Forge**는 FFmpeg 명령 계획을 생성합니다.

- 텍스트 프롬프트와 기술 메타데이터(파일 이름, 해상도, 코덱, 컨테이너)만 TLS 1.3으로 전송됩니다. **원본 영상·음원 파일은 업로드되지 않습니다.**
- 계획은 기기에서 실행되며, 학습에 사용되지 않습니다.
- BYOK: OpenAI 호환 엔드포인트는 당사 서버를 거치지 않고 크레딧을 쓰지 않으며, API 키는 기기에만 저장됩니다.
- AI 기능은 선택 사항입니다.

## 계정, 인증 및 게스트 모드

- **Apple로 로그인**. 비공개 이메일 중계 포함.
- **OAuth** Google 또는 GitHub(PKCE). 비밀번호는 수집하지 않습니다.
- **익명 기기 게스트(5.1.1(v))** — 계정 없이 구매·사용. `guest_<deviceId>@guest.mediaforgeapp.com`. 로그인 후 잔액 이전 가능.
- 토큰은 기기에 저장됩니다.

## 결제, 인앱 구매 및 크레딧

1. **Mac App Store** — **Apple In-App Purchase(StoreKit)**만 사용. 결제는 Apple이 처리합니다.
2. **웹 직접 배포** — **Stripe**([Stripe 방침](https://stripe.com/privacy)).
3. 계정 또는 게스트 기기 원장.

## 사용 분석(PostHog)

익명 이벤트, 기본 켜짐. **미디어 파일, 개인 경로, API 키는 수집하지 않습니다.** **설정 > 일반 > 사용 분석**에서 끌 수 있습니다.

## 제3자 서비스 제공업체

Apple(App Store, StoreKit, Apple로 로그인), Builtly, Stripe, PostHog, AI 추론, GitHub.

## 이용자의 권리

열람, 수정, 이전 및 **앱 내 계정 삭제**(5.1.1(v)). 문의: [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com).

## 문의처

개인정보 처리방침과 관련된 문의는 아래로 연락해 주십시오:

**이메일:** [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com)  
**공식 웹사이트:** [https://www.mediaforgeapp.com](https://www.mediaforgeapp.com)
