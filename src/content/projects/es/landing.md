---
title: Café Faro
summary: Landing page de una marca ficticia de café de especialidad que vende una suscripción mensual. Una sola acción, carga rápida y diseño accesible.
kind: Landing page
role: Diseño y desarrollo front-end en solitario
status: planned
stack: [Astro, Tailwind CSS]
liveLabel: view
screenshotAlt: '[Captura de la landing]'
featured: true
order: 3
---

## Problema

Un tostadero pequeño y ficticio, Café Faro, quiere vender una suscripción mensual de café, pero su único escaparate es una red social: no explica la oferta, no genera confianza y no tiene una acción clara para suscribirse.

## Solución

Una página única, en orden de lectura: qué es Café Faro, cómo funciona la suscripción en tres pasos, qué cafés incluye, preguntas frecuentes y una llamada a la acción. Toda la página empuja hacia una sola acción: suscribirse.

La marca es inventada (nombre, oferta y textos), y la pieza sirve también para probar el alojamiento del portfolio.

## Decisiones técnicas

Estas son las decisiones de partida; las cambiaré si el desarrollo demuestra que no encajan.

- **Astro sin JavaScript en el cliente:** la página es contenido estático, así que no hay motivo para enviar un framework al navegador.
- **Tailwind CSS con tokens propios** de la marca (color, tipografía, espaciado) definidos en un solo lugar.
- **Una sola llamada a la acción**, repetida al inicio y al final, en lugar de varios caminos que compitan.
- **Accesibilidad desde el principio:** contraste AA, navegación por teclado, foco visible y jerarquía de títulos correcta.
- **Fuentes alojadas en el propio sitio**, sin depender de servicios externos.

## Limitaciones y aprendizajes

Es una pieza de demostración: el botón de suscripción no cobra nada ni guarda datos, porque no hay un negocio detrás.

Los aprendizajes los escribiré cuando la página esté construida.

[...]
