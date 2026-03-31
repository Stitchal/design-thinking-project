# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static single-page website presenting a Design Thinking project: **"Le HUB — Réinsertion des personnes sans domicile fixe dans la vie active"** — a hub concept for reintegrating homeless individuals into active life.

## Running the Project

No build process required. Open `index.html` directly in a browser, or use VS Code Live Server (configured on port 5501).

## Architecture

**Single-file SPA:** All HTML, CSS, and JavaScript live in `index.html` (~966 lines). No external dependencies, no framework, no bundler.

**CSS:** Uses CSS custom properties (`--primary`, `--accent`, etc.) for the green-based color scheme. Responsive breakpoint at 600px.

**JavaScript:** Vanilla JS with two key behaviors:
- `IntersectionObserver` for scroll-triggered fade-in animations on `.fade-in` elements
- Active navigation highlighting based on scroll position using `IntersectionObserver` on each section

**Content structure** (in order): Hero → Problématique → Parcours (3-step journey) → Personas → Services Grid → Fonctionnement (org structure) → Événementiel (partner companies) → Footer

**Embedded data objects** in the JS:
- `personas` — 3 archetypes (Alexie: primary homeless persona; Louis: mayor buyer persona; Linda: excluded contrast)
- `services` — 5 service categories rendered as a grid
- `partners` — 8 partner companies for the events section

## Content Language

The project is in **French**. Maintain French for all content edits and additions.
