---
layout: legal
title: Política de privacidad
description: "Información sobre privacidad para la app de escritorio MediaForge, sitio web, cuentas de usuario, AI Forge y pagos con Stripe."
lang: es
page_id: privacy-policy
permalink: /es/privacy-policy/
---
**Fecha de entrada en vigor: 26 de noviembre de 2026**

## Introducción

Te damos la bienvenida a **MediaForge**, una aplicación de escritorio visual para flujos de trabajo con FFmpeg. MediaForge ofrece tanto una edición local de código abierto (**MediaForge Open**) como funciones profesionales en la nube (**MediaForge Pro**), incluida AI Forge.

Esta Política de privacidad explica qué datos recopilamos, cómo los usamos y cómo protegemos tu privacidad al utilizar la aplicación de escritorio, nuestro sitio web en [mediaforgeapp.com](https://www.mediaforgeapp.com), las cuentas de usuario y los servicios de facturación (colectivamente, el "Servicio").

Nuestro principio rector es **local por defecto**: las conversiones de medios estándar se ejecutan íntegramente en tu dispositivo. El procesamiento en la nube solo se utiliza cuando activas explícitamente funciones Pro o de IA.

## Ámbito del servicio

Esta política cubre:

- **MediaForge Open** — la aplicación de escritorio gratuita y de código abierto para macOS disponible en [GitHub Releases](https://github.com/mediaforgeapp/mediaforge/releases).
- **MediaForge Pro y AI Forge** — funciones en la nube, procesamiento asistido por IA y paquetes de créditos, en la Mac App Store y por descarga directa.
- **Sitio web y servicios de cuenta** — información del producto, autenticación, perfil y pagos.

## Procesamiento local prioritario (MediaForge Open)

En los flujos de trabajo habituales de la aplicación de escritorio:

- **Archivos de medios de origen y salida** — tus vídeos, audios, imágenes y subtítulos se procesan exclusivamente en tu dispositivo local. Nunca subimos ni almacenamos tus medios en nuestros servidores.
- **Ejecución de FFmpeg** — la transcodificación y edición se realizan mediante los binarios de FFmpeg y FFprobe instalados en tu sistema.
- **Configuración local** — el historial de tareas, los ajustes preestablecidos y las preferencias se guardan en tu equipo local.
- **Sin telemetría obligatoria** — MediaForge Open no recopila el portapapeles, nombres de archivos ni envía telemetría de diagnóstico obligatoria.

## Privacidad en MediaForge Pro y AI Forge

**AI Forge** planifica comandos FFmpeg:

- Solo se transmiten el texto del prompt y metadatos técnicos (nombre de archivo, resolución, códec, contenedor) por TLS 1.3. **No se suben el vídeo ni el audio de origen.**
- El plan se ejecuta en local. Los datos se procesan en memoria y no se usan para entrenar modelos.
- BYOK: un endpoint OpenAI compatible no pasa por nuestros servidores, no gasta créditos y la clave queda en el dispositivo.
- La primera vez que usas AI Forge, la app pide tu permiso antes de enviar el prompt o detalles del archivo, e indica que la solicitud la procesa un servicio en la nube que usa proveedores de modelos de IA de terceros. Si lo rechazas, no se envía nada. Se pide un permiso aparte para un endpoint propio.
- Las funciones de IA son opcionales.

## Cuenta, autenticación y modo invitado

- **Iniciar sesión con Apple**, incluido el reenvío de correo privado.
- **OAuth** con Google o GitHub (PKCE). No recibimos contraseñas.
- **Invitado anónimo** — compra y uso sin cuenta. Identificador `guest_<deviceId>@guest.mediaforgeapp.com`. Al iniciar sesión se puede transferir el saldo.
- La app guarda los tokens en las preferencias locales del dispositivo y los elimina al cerrar sesión.

## Pagos, compras dentro de la app y créditos

1. **Mac App Store** — solo **Apple In-App Purchase (StoreKit)**. Apple procesa el pago. Guardamos identificadores de transacción firmados.
2. **Descarga web** — **Stripe** ([política de Stripe](https://stripe.com/privacy)).
3. Libro de créditos del cuenta o del dispositivo invitado.

## Analítica (PostHog)

Eventos anónimos de uso, activados por defecto. **Sin archivos multimedia, rutas privadas ni claves API.** Se desactiva en **Ajustes > General > Datos de uso anónimos** (activado por defecto).

## Proveedores externos

Apple (App Store, StoreKit, Iniciar sesión con Apple), Builtly, Stripe, PostHog, inferencia de IA y GitHub.

## Tus derechos

Acceso, rectificación, portabilidad y **eliminación de la cuenta dentro de la app** (**Ajustes > AI Forge > Delete account**). Contacto: [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com).

## Contacto

**Operador:** Aime Tech Media Limited, Room 1021, Beverley Commercial Centre, 87-105 Chatham Road South, Tsim Sha Tsui, Hong Kong. MediaForge Pro lo opera este operador. MediaForge Open es un proyecto de código abierto comunitario independiente.

Para cualquier duda sobre privacidad, contáctanos en:

**Correo:** [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com)  
**Sitio web:** [https://www.mediaforgeapp.com](https://www.mediaforgeapp.com)
