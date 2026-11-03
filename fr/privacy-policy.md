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
- **MediaForge Pro et AI Forge** — fonctionnalités cloud, packs de crédits, via le Mac App Store et le téléchargement direct.
- **Site web et gestion de compte** — documentation, authentification, profil et paiement.

## Traitement local prioritaire (MediaForge Open)

Pour les flux de travail standards sur l'application de bureau :

- **Fichiers sources et exportés** — vos vidéos, fichiers audio et images sont traités exclusivement sur votre appareil. Nous ne téléchargeons ni ne stockons jamais vos médias sur nos serveurs.
- **Exécution locale de FFmpeg** — le transcodage, le découpage et la création de GIF s'effectuent via les binaires FFmpeg et FFprobe installés localement.
- **Données locales** — vos historiques, préréglages personnalisés et préférences restent stockés sur votre disque local.
- **Aucune télémétrie obligatoire** — MediaForge Open ne lit pas votre presse-papier, n'enregistre pas vos noms de fichiers et ne transmet aucune télémétrie obligatoire.

## Confidentialité de MediaForge Pro et AI Forge

**AI Forge** planifie des commandes FFmpeg :

- Seuls le prompt et des métadonnées techniques (nom de fichier, résolution, codec, conteneur) sont envoyés en TLS 1.3. **La vidéo et l'audio sources ne sont pas téléversés.**
- Le plan s'exécute en local. Les données ne servent pas à entraîner des modèles.
- BYOK : un endpoint compatible OpenAI évite nos serveurs, ne dépense aucun crédit et la clé reste sur l'appareil.
- Les fonctions d'IA sont facultatives.

## Compte, authentification et mode invité

- **Se connecter avec Apple**, y compris le relais d'e-mail privé.
- **OAuth** Google ou GitHub (PKCE). Aucun mot de passe.
- **Invité anonyme (directive 5.1.1(v))** — achat et usage sans compte (`guest_<deviceId>@guest.mediaforgeapp.com`). Le solde peut être transféré à la connexion.
- Jetons stockés sur l'appareil.

## Paiements, achats intégrés et crédits

1. **Mac App Store** — uniquement **Apple In-App Purchase (StoreKit)**. Apple traite le paiement. Nous conservons des identifiants de transaction signés.
2. **Téléchargement web** — **Stripe** ([politique Stripe](https://stripe.com/privacy)).
3. Registre de crédits du compte ou de l'appareil invité.

## Analytique (PostHog)

Événements anonymes, activés par défaut. **Aucun fichier média, chemin privé ni clé API.** Désactivation dans **Réglages > Général > Analyse d'utilisation**.

## Prestataires tiers

Apple (App Store, StoreKit, Se connecter avec Apple), Builtly, Stripe, PostHog, inférence IA et GitHub.

## Vos droits

Accès, rectification, portabilité et **suppression du compte dans l'app** (directive 5.1.1(v)). Contact : [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com).

## Contact

Pour toute question relative à cette politique de confidentialité :

**E-mail :** [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com)  
**Site web :** [https://www.mediaforgeapp.com](https://www.mediaforgeapp.com)
