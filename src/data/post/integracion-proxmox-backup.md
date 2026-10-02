---
publishDate: 2024-05-10T00:00:00Z
title: "Ecosistema Proxmox: Integración de PBS"
excerpt: "Implementación de Proxmox Backup Server para garantizar la integridad y recuperación de datos crítica."
image: "~/assets/images/diagrams/proxmox-backup.svg"
category: Infraestructura
tags: ["Proxmox Backup Server", "Veeam B&R"]
highlights:
  - "Backups incrementales con verificación de integridad"
  - "Réplica off-site"
  - "Restauración estimada en menos de 4 horas (antes ~22h)"
---
### El Desafío
Asegurar que la nueva infraestructura de virtualización tuviera un sistema de respaldo de nivel empresarial, rápido y eficiente.

### La Solución
Integración nativa de **Proxmox Backup Server (PBS)** con el cluster PVE:
* **Deduplicación:** Reducción del espacio de almacenamiento necesario para los backups.
* **Seguridad:** Backups incrementales con verificación de integridad y réplica off-site.
* **Resultado:** Para el servidor más grande (50 GB de SO + 500 GB de datos, 250 GB de base de datos), el tiempo de restauración estimado bajó de ~22 horas (con la infraestructura anterior) a menos de 4 horas.