---
publishDate: 2021-12-01T00:00:00Z
title: "Resiliencia de Infraestructura Crítica"
excerpt: "El primer año del Plan Estratégico: hardening de routers, UPS para servidores y las primeras políticas de backup con Veeam B&R, la base sobre la que construí todo lo que vino después."
image: "~/assets/images/diagrams/resiliencia-infraestructura.svg"
category: Infraestructura
tags: ["Veeam B&R", "UPS", "Seguridad de red"]
highlights:
  - "Hardening de routers y segmentación de red"
  - "UPS para servidores"
  - "Políticas de backup robustas"
---
### El Desafío
Era el primer año de ejecución del Plan Estratégico de TI 2021–2026, y antes de pensar en modernización había que resolver lo básico: la infraestructura no tenía una política de backup consistente, la red no estaba segmentada, y no había UPS en los puntos críticos.

### La Solución
Llevé adelante la estabilización del núcleo tecnológico en varios frentes a la vez: hardening de routers y segmentación de la red profesional, instalación de sistemas UPS para servidores, actualización completa de sistemas operativos y migración de dominios, y la puesta en marcha de políticas de backup robustas con **Veeam B&R**.

### Resultado
Con esto quedó la base de continuidad operativa sobre la que construí los años siguientes: sin esta estabilización inicial, no hubiera tenido sentido avanzar directamente a contenedores o a la migración a Proxmox — primero había que asegurar que lo que ya existía no se cayera.