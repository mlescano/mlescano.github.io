---
publishDate: 2021-06-20T00:00:00Z
title: "Migración: de Bare Metal a Microservicios"
excerpt: "Separé las aplicaciones del hardware físico con Docker Swarm y LXC, un primer paso de contenedores que sentó las bases para la migración a Proxmox que vino después."
image: "~/assets/images/diagrams/microservicios-docker.svg"
category: Infraestructura
tags: ["Docker Swarm", "LXC"]
highlights:
  - "Aislamiento de aplicaciones con contenedores"
  - "Mejor aprovechamiento de recursos"
  - "Menos tiempo de inactividad"
---
### El Desafío
Las aplicaciones corrían directamente sobre servidores físicos (bare metal): cada una atada a su hardware, sin margen para escalar ni para moverlas si un servidor fallaba o necesitaba mantenimiento.

### La Solución
Implementé una transición hacia contenedores con **Docker Swarm** y **LXC** para aislar aplicaciones de su hardware subyacente. En vez de instalar cada servicio directamente sobre un servidor, pasó a correr en un contenedor que se puede mover, replicar o reiniciar sin tocar el resto del entorno.

### Resultado
Mejor aprovechamiento de recursos, despliegues más simples y menos tiempo de inactividad al hacer mantenimiento, porque los servicios ya no dependían de un único servidor físico. Este trabajo con contenedores fue la base técnica y de criterio sobre la que, años después, construí la migración a Proxmox VE y Ceph.