---
layout: legal
title: Política de privacidad
description: "Información sobre privacidad para la app de escritorio MediaForge, sitio web, cuentas de usuario, AI Forge y pagos con Stripe."
lang: es
page_id: privacy-policy
permalink: /es/privacy-policy/
---
**Fecha de entrada en vigor: 1 de noviembre de 2026**

## Introducción

Te damos la bienvenida a **MediaForge**, una aplicación de escritorio visual para flujos de trabajo con FFmpeg. MediaForge ofrece tanto una edición local de código abierto (**MediaForge Open**) como funciones profesionales en la nube (**MediaForge Pro**), incluida AI Forge.

Esta Política de privacidad explica qué datos recopilamos, cómo los usamos y cómo protegemos tu privacidad al utilizar la aplicación de escritorio, nuestro sitio web en [mediaforgeapp.com](https://www.mediaforgeapp.com), las cuentas de usuario y los servicios de facturación (colectivamente, el "Servicio").

Nuestro principio rector es **local por defecto**: las conversiones de medios estándar se ejecutan íntegramente en tu dispositivo. El procesamiento en la nube solo se utiliza cuando activas explícitamente funciones Pro o de IA.

## Ámbito del servicio

Esta política cubre:

- **MediaForge Open** — la aplicación de escritorio gratuita y de código abierto para macOS disponible en [GitHub Releases](https://github.com/mediaforgeapp/mediaforge/releases).
- **MediaForge Pro y AI Forge** — funciones en la nube, procesamiento multimedia asistido por IA y paquetes de créditos.
- **Sitio web y servicios de cuenta** — información del producto, autenticación de usuarios, perfil y pasarela de pago Stripe.

## Procesamiento local prioritario (MediaForge Open)

En los flujos de trabajo habituales de la aplicación de escritorio:

- **Archivos de medios de origen y salida** — tus vídeos, audios, imágenes y subtítulos se procesan exclusivamente en tu dispositivo local. Nunca subimos ni almacenamos tus medios en nuestros servidores.
- **Ejecución de FFmpeg** — la transcodificación y edición se realizan mediante los binarios de FFmpeg y FFprobe instalados en tu sistema.
- **Configuración local** — el historial de tareas, los ajustes preestablecidos y las preferencias se guardan en tu equipo local.
- **Sin telemetría obligatoria** — MediaForge Open no recopila el portapapeles, nombres de archivos ni envía telemetría de diagnóstico obligatoria.

## Privacidad en MediaForge Pro y AI Forge

MediaForge Pro ofrece funciones opcionales basadas en créditos en la nube, como **AI Forge** (análisis inteligente de vídeo, generación por IA y mejora neuronal):

- **Datos transmitidos para tareas de IA** — solo cuando inicias activamente una tarea de AI Forge, el fragmento de medio o texto necesario se transmite por canales cifrados (TLS 1.3) a nuestra infraestructura de inferencia.
- **Procesamiento efímero** — los medios enviados a AI Forge se procesan en memoria volátil únicamente para completar la tarea solicitada y se eliminan de inmediato al terminar.
- **Sin entrenamiento de modelos** — los archivos y textos que envías a AI Forge **nunca se utilizan para entrenar ni mejorar modelos de IA**.
- **Control total del usuario** — las funciones de IA son completamente opcionales. El FFmpeg local no se conecta a endpoints de IA.

## Datos de cuenta y autenticación

Al iniciar sesión para gestionar créditos o usar funciones Pro a través de Builtly:

- **Inicio de sesión OAuth** — puedes acceder con Google o GitHub mediante OAuth 2.0 (PKCE). Solo recibimos datos públicos básicos (correo, nombre y avatar). Nunca recibimos tus contraseñas.
- **Gestión de perfil** — puedes personalizar tu nombre o subir una imagen de avatar, almacenada de forma segura en la nube.
- **Tokens de sesión** — los tokens de acceso y actualización se almacenan en el navegador para mantener tu sesión activa de manera segura.

## Pagos, facturación y créditos

Los paquetes de créditos se adquieren a través de **Stripe**:

- **Pagos seguros PCI-DSS** — todos los pagos se procesan directamente en Stripe. MediaForge no almacena números de tarjeta ni códigos CVV. Aplica la [Política de privacidad de Stripe](https://stripe.com/privacy).
- **Registros de compra** — guardamos identificadores de sesión de Stripe, importes, marcas de tiempo y productos para acreditar tu saldo y cumplir con obligaciones contables.
- **Libro de créditos** — mantenemos un registro seguro de tus créditos adquiridos y consumidos.

## Proveedores externos

Colaboramos con proveedores de confianza: Builtly (cuentas y catálogo), Stripe (pagos), proveedores de inferencia de IA en la nube y GitHub (código y descargas).

## Tus derechos

Bajo normativas como el RGPD, puedes solicitar acceso, rectificación, portabilidad o eliminación de tus datos de cuenta escribiendo a [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com).

## Contacto

Para cualquier duda sobre privacidad, contáctanos en:

**Correo:** [support@mediaforgeapp.com](mailto:support@mediaforgeapp.com)  
**Sitio web:** [https://www.mediaforgeapp.com](https://www.mediaforgeapp.com)
