---
publishDate: 2021-06-20T00:00:00Z
title: "Migración: de Bare Metal a Microservicios"
excerpt: "Abstracción de la capa de hardware mediante la implementación de arquitecturas basadas en contenedores."
image: "~/assets/images/microservicios-docker.png"
category: Infraestructura
tags: ["Docker Swarm", "LXC"]
highlights:
  - "Aislamiento de aplicaciones con contenedores"
  - "Mejor aprovechamiento de recursos"
  - "Menos tiempo de inactividad"
---
### El Desafío
Superar las limitaciones de escalabilidad y la rigidez de las aplicaciones corriendo directamente sobre servidores físicos (Bare Metal).

### La Solución
Implementé una transición hacia una arquitectura de **Microservicios** utilizando:
* **Tecnología:** Docker y LXC para el aislamiento de aplicaciones.
* **Optimización:** Mejora drástica en el aprovechamiento de recursos y facilidad de despliegue.
* **Impacto:** Reducción de tiempos de inactividad, independización de servidores y simplificación de las tareas de mantenimiento.