---
title: Café Faro
summary: Landing page for a fictional specialty-coffee brand that sells a monthly subscription. A single action, fast loading and accessible design.
kind: Landing page
role: Solo front-end design and development
status: planned
stack: [Astro, Tailwind CSS]
liveLabel: view
screenshotAlt: '[Landing page screenshot]'
featured: true
order: 3
---

## Problem

A small, fictional roastery, Café Faro, wants to sell a monthly coffee subscription, but its only storefront is a social network: it doesn't explain the offer, doesn't build trust and has no clear way to subscribe.

## Solution

A single page, in reading order: what Café Faro is, how the subscription works in three steps, which coffees it includes, frequently asked questions and a call to action. The whole page pushes toward one action: subscribe.

The brand is made up (name, offer and copy), and the piece also serves to test the portfolio's hosting.

## Technical decisions

These are the starting decisions; I will change them if development shows they don't fit.

- **Astro with no client-side JavaScript:** the page is static content, so there is no reason to ship a framework to the browser.
- **Tailwind CSS with the brand's own tokens** (color, typography, spacing) defined in one place.
- **A single call to action**, repeated at the top and at the bottom, instead of several competing paths.
- **Accessibility from the start:** AA contrast, keyboard navigation, visible focus and a correct heading hierarchy.
- **Self-hosted fonts**, with no dependency on external services.

## Limitations and lessons learned

It is a demo piece: the subscribe button charges nothing and stores no data, because there is no business behind it.

I will write the lessons learned once the page is built.

[...]
