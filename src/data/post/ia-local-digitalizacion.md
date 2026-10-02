---
publishDate: 2026-04-05T00:00:00Z
title: "IA Local: Prueba de Concepto con Ollama"
excerpt: "Probé modelos LLM locales con Ollama en equipo propio, no para llevarlos a producción, sino para entender con criterio dónde la IA aporta valor real y dónde no."
image: "~/assets/images/diagrams/ia-local-ollama.svg"
category: Innovación
tags: ["Ollama", "IA local"]
highlights:
  - "Pruebas de concepto con LLMs locales"
  - "Sin depender de servicios en la nube"
  - "Criterio: IA solo donde aporta valor"
---

### El Desafío
La IA generativa está de moda, pero eso no significa que agregue valor a cualquier proceso. Antes de usarla en algo real necesitaba entender, de forma práctica, qué puede y qué no puede hacer un modelo corriendo localmente, sin depender de un servicio en la nube ni exponer datos sensibles a un tercero.

### La Solución
Hice pruebas de concepto con **Ollama** en equipo propio, probando distintos modelos LLM locales en escenarios acotados, para entender su comportamiento, sus límites y el hardware que realmente requieren, antes de considerar cualquier uso en un proceso de verdad.

### Criterio
Mi criterio de trabajo es usar **soluciones deterministas siempre que sea posible, y recurrir a IA solo donde realmente aporta valor** — no porque esté disponible. Las automatizaciones que sí tengo en producción (como la migración de perfiles con USMT) son deterministas a propósito: hacen siempre lo mismo, de forma predecible. Estas pruebas de concepto con IA local son la base para decidir, caso por caso, si en algún proceso puntual vale la pena ir más allá de un script.
