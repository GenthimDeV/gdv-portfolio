---
title: Gestión de tickets de soporte
summary: Dashboard pequeño para que un equipo de soporte reciba, asigne y resuelva incidencias. Tres funciones clave - ciclo de vida del ticket, panel de métricas y filtros con historial. Datos ficticios.
kind: Dashboard
role: Diseño y desarrollo full-stack en solitario
status: planned
stack: [React, Django REST Framework]
liveLabel: demo
screenshotAlt: '[Captura del dashboard]'
featured: true
order: 2
---

## Problema

Un equipo pequeño de soporte suele repartir las incidencias entre el correo y las hojas de cálculo. Nadie sabe con certeza qué ticket está abierto, quién lo lleva ni cuánto lleva esperando, y las prioridades se deciden de memoria.

## Solución

Un dashboard donde cada incidencia es un ticket con un ciclo de vida claro: abierto, asignado, en curso y resuelto. El proyecto gira en torno a tres funciones:

- **Ciclo de vida del ticket:** alta, asignación a un agente, cambios de estado y comentarios, con el historial de cada cambio.
- **Panel de métricas:** tickets abiertos por prioridad, carga por agente y tiempo medio de resolución.
- **Filtros y búsqueda:** por estado, prioridad, agente y texto, para llegar a un ticket sin recorrer toda la lista.

Habrá dos roles: solicitante, que abre tickets y sigue los suyos, y agente, que los gestiona.

## Decisiones técnicas

Estas son las decisiones de partida; las cambiaré si el desarrollo demuestra que no encajan.

- **API REST con Django REST Framework** y una interfaz en React que solo consume esa API, para que ambas partes se puedan probar por separado.
- **Estados como una máquina simple:** el backend rechaza las transiciones no válidas (por ejemplo, reabrir un ticket resuelto sin pasar por «abierto»), en lugar de fiarse del frontend.
- **Métricas calculadas en el servidor** con consultas agregadas, para no descargar todos los tickets al navegador.
- **Datos de demostración generados por un script**, ficticios y reproducibles.

## Limitaciones y aprendizajes

Alcance que dejo fuera a propósito: sin correo entrante, sin notificaciones en tiempo real y sin archivos adjuntos.

Los aprendizajes los escribiré cuando el proyecto esté construido.

[...]
