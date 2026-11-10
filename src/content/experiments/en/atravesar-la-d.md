---
title: Through the D
summary: 'A change of scale made with planes, no libraries: the logo opening becomes a door and each step crosses into the next scene.'
order: 1
---

## The idea

The D in the logo is not a letter: it is an opening. This experiment uses it as a door. As you move forward, the camera zooms in until it crosses the gap and another scene appears, which has its own D in turn.

## How it works

Four scenes are stacked and scrolling scales them exponentially: each one grows until its gap covers the screen, and the gap has the colour of the next scene's background, so the crossing is continuous. Only `transform` and `opacity` are animated, with a single script of a few lines and no libraries.

## Accessibility

No feature depends on the animation: with `prefers-reduced-motion` or without JavaScript, the journey is shown as static panels with all their text.
