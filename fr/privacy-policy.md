---
layout: legal
title: Politique de confidentialité
description: "Protection de la vie privée pour l'application MediaForge, le site web, les comptes utilisateurs, AI Forge et Stripe."
lang: fr
page_id: privacy-policy
permalink: /fr/privacy-policy/
---
**Date d'entrée en vigueur : 1er novembre 2026**

## Introduction

Bienvenue sur **MediaForge**, une application bureautique visuelle pour vos flux de travail FFmpeg. MediaForge propose une version open source locale (**MediaForge Open**) ainsi que des fonctionnalités cloud professionnelles (**MediaForge Pro**), dont AI Forge.

Cette Politique de confidentialité décrit les données que nous collectons, la manière dont nous les utilisons et les mesures prises pour protéger votre vie privée sur l'application de bureau, notre site [mediaforgeapp.com](https://www.mediaforgeapp.com), les comptes utilisateurs et nos systèmes de facturation (ensemble, le « Service »).

Notre principe directeur est le **traitement local par défaut (Local-First)** : vos conversions multimédias courantes s'exécutent entièrement sur votre machine. Le traitement cloud n'intervient que si vous choisissez activement d'utiliser les fonctionnalités Pro.

## Champ d'application

Cette politique s'applique à :

- **MediaForge Open** — l'application bureautique gratuite et open source pour macOS disponible sur [GitHub Releases](https://github.com/mediaforgeapp/mediaforge/releases).
- **MediaForge Pro et AI Forge** — les fonctionnalités cloud avancées basées sur l'intelligence artificielle et les packs de crédits.
- **Site web et gestion de compte** — la documentation, l'authentification des utilisateurs, le profil et le paiement sécurisé via Stripe.

## Traitement local prioritaire (MediaForge Open)

Pour les flux de travail standards sur l'application de bureau :

- **Fichiers sources et exportés** — vos vidéos, fichiers audio et images sont traités exclusivement sur votre appareil. Nous ne téléchargeons ni ne stockons jamais vos médias sur nos serveurs.
- **Exécution locale de FFmpeg** — le transcodage, le découpage et la création de GIF s'effectuent via les binaires FFmpeg et FFprobe installés localement.
- **Données locales** — vos historiques, préréglages personnalisés et préférences restent stockés sur votre disque local.
- **Aucune télémétrie obligatoire** — MediaForge Open ne lit pas votre presse-papier, n'enregistre pas vos noms de fichiers et ne transmet aucune télémétrie obligatoire.

## Confidentialité de MediaForge Pro et AI Forge

MediaForge Pro met à disposition des fonctionnalités cloud optionnelles par crédits, notamment **AI Forge** (analyse intelligente, génération et amélioration audiovisuelle) :

- **Données transmises pour les tâches d'IA** — uniquement lorsque vous lancez une tâche AI Forge, le segment de média ou le prompt requis est transmis via un canal chiffré (TLS 1.3) à notre infrastructure.
- **Traitement éphémère** — les données envoyées à AI Forge sont traitées uniquement en mémoire vive pour accomplir la tâche, puis immédiatement détruites. Aucun stockage persistant n'est conservé.
- **Aucun entraînement de modèles IA** — vos fichiers et invites traités via AI Forge **ne sont jamais utilisés pour entraîner, affiner ou améliorer des modèles d'IA**.
- **Contrôle absolu** — les fonctionnalités d'IA sont facultatives. Les opérations FFmpeg locales ne contactent aucun serveur d'IA.

## Comptes et données d'authentification

Lorsque vous vous connectez pour gérer vos crédits ou vos options Pro via Builtly :

- **Connexion OAuth** — authentification sécurisée via Google ou GitHub (OAuth 2.0 PKCE). Nous ne recevons que les informations de profil public (e-mail, nom, avatar). Nous n'avons jamais accès à vos mots de passe.
- **Gestion du profil** — vous pouvez modifier votre nom ou téléverser un avatar, conservé de façon sécurisée sur notre stockage cloud.
- **Jetons de session** — vos jetons d'accès et de rafraîchissement sont stockés dans votre navigateur pour maintenir votre session en toute sécurité.

## Paiements, facturation et crédits

Les packs de crédits pour MediaForge Pro s'achètent via **Stripe** :

- **Paiements certifiés PCI-DSS** — Stripe traite l'intégralité des paiements. MediaForge ne collecte ni ne conserve aucun numéro de carte bancaire ni cryptogramme. Voir la [Politique de confidentialité de Stripe](https://stripe.com/privacy).
- **Historique de facturation** — nous conservons les identifiants de transaction, montants, devises et horodatages pour créditer votre compte et répondre à nos obligations comptables.
- **Registre des crédits** — nous tenons un registre sécurisé de vos crédits achetés et consommés.

## Prestataires tiers

Nous collaborons avec des partenaires de premier plan : Builtly (comptes et catalogue), Stripe (paiements sécurisés), fournisseurs d'inférence IA cloud et GitHub (code source et téléchargements).

## Vos droits

Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos données personnelles en nous écrivant à [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com).

## Contact

Pour toute question relative à cette politique de confidentialité :

**E-mail :** [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com)  
**Site web :** [https://www.mediaforgeapp.com](https://www.mediaforgeapp.com)
