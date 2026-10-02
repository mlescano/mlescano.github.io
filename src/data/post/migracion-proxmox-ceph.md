---
publishDate: 2026-04-16T00:00:00Z
title: "Modernización de Datacenter: Cluster Proxmox & Ceph"
excerpt: "Transformación de un entorno legacy ESXi a un cluster de alta disponibilidad con almacenamiento distribuido NVMe."
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
Migrar una infraestructura crítica basada en tecnologías legacy (ESXi/Hyper-V) hacia una arquitectura moderna y escalable sin interrumpir la operación.

### La Solución
Implementé un cluster de **Proxmox VE** de alta disponibilidad con:
* **Almacenamiento:** Configuración de **Ceph** con nodos distribuidos y discos NVMe.
* **Respaldo:** Despliegue de **Proxmox Backup Server** para garantizar un RPO/RTO mínimo.
* **Resultados:** Eliminación de puntos únicos de fallo y soberanía técnica total.