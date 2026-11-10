---
title: Atravesar la D
summary: 'Un cambio de escala hecho con planos, sin librerías: la abertura del logo se convierte en una puerta y cada paso cruza a la siguiente escena.'
order: 1
---

## La idea

La D del logo no es una letra: es una abertura. Este experimento la usa como puerta. Al avanzar, la cámara se acerca hasta cruzar el hueco y aparece otra escena, que a su vez tiene su propia D.

## Cómo funciona

Cuatro escenas se apilan y el scroll las escala de forma exponencial: cada una crece hasta que su hueco cubre la pantalla, y el hueco tiene el color del fondo de la siguiente, así que el paso es continuo. Solo se animan `transform` y `opacity`, con un único script de unas pocas líneas y sin librerías.

## Accesibilidad

Ninguna función depende de la animación: con `prefers-reduced-motion` o sin JavaScript, el recorrido se muestra como láminas estáticas con todo su texto.
