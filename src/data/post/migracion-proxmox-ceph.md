---
publishDate: 2026-04-16T00:00:00Z
title: "Modernización de Datacenter: Cluster Proxmox & Ceph"
excerpt: "Diseñé e implementé desde cero la migración de un entorno legacy VMware ESXi a una plataforma propia sobre Proxmox VE y Ceph, con alta disponibilidad real y sin licenciamiento."
image: "~/assets/images/diagrams/proxmox-ceph.svg"
category: Infraestructura
tags: ["Proxmox VE", "Ceph", "Alta disponibilidad"]
highlights:
  - "Cluster Proxmox VE con Ceph y discos NVMe"
  - "Eliminación de puntos únicos de fallo"
  - "Migración de más de 50 VMs desde ESXi"
featured: true
---
### El Desafío
La infraestructura corría sobre VMware ESXi, con el costo de licenciamiento y la dependencia de un proveedor que eso implica. Necesitaba una plataforma propia, igual de confiable, pero sin esa dependencia y con margen para crecer: más VMs, más servicios, sin volver a pagar por cada funcionalidad.

### La Solución
Diseñé e implementé un cluster de **Proxmox VE** de alta disponibilidad desde cero: compra del hardware, diseño de las VLAN y de la conectividad entre nodos, y definición de qué corre dónde.

Para el almacenamiento configuré **Ceph** con los discos distribuidos entre los nodos: el sistema operativo y las bases de datos de las VM quedaron en NVMe (por la latencia), y el resto de los datos en discos HDD WD Red Plus, también sobre Ceph. Las redes de Ceph (pública y privada) están separadas, cada una con su propio enlace SFP+ de 10 Gbps, igual que la conexión al **Proxmox Backup Server**.

Con alta disponibilidad activa, si un host se cae o se apaga, las VM pasan a otro nodo sin que yo tenga que intervenir. Antes, sin HA, había que esperar a que el host volviera y a que alguien detectara la falla — algo que podía demorar unos 40 minutos. Ahora, con un apagado ordenado hay migración en vivo; ante una falla súbita de hardware, Proxmox reinicia la VM en otro nodo en cuestión de minutos.

### Resultado
Migré más de 50 VMs desde el entorno ESXi anterior sin interrupción del servicio, eliminando los puntos únicos de fallo que tenía la infraestructura previa. El paso a virtualización open source, sumado a esta migración, fue la base de la reducción del 86% en costos operativos de infraestructura que logré al eliminar el licenciamiento.