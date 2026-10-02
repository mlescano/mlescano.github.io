---
publishDate: 2024-05-10T00:00:00Z
title: "Ecosistema Proxmox: Integración de PBS"
excerpt: "Integré Proxmox Backup Server con el cluster PVE y con Veeam B&R, y sumé réplica off-site, para bajar el tiempo de restauración de horas a menos de 4."
image: "~/assets/images/diagrams/proxmox-backup.svg"
category: Infraestructura
tags: ["Proxmox Backup Server", "Veeam B&R"]
highlights:
  - "Backups incrementales con verificación de integridad"
  - "Réplica off-site"
  - "Restauración estimada en menos de 4 horas (antes ~22h)"
---
### El Desafío
Migrar a una plataforma de virtualización propia no tenía sentido si no venía acompañada de un sistema de respaldo a la altura. La infraestructura anterior, sobre red UTP Cat5e y discos mecánicos, tardaba cerca de 22 horas en restaurar el servidor más grande del entorno (50 GB de sistema operativo, 500 GB de datos y 250 GB de base de datos) — un tiempo de recuperación que no era aceptable para una operación crítica.

### La Solución
Integré **Proxmox Backup Server (PBS)** de forma nativa con el cluster PVE, conectado por un enlace SFP+ de 10 Gbps dedicado, y lo combiné con **Veeam B&R** para tener dos capas de protección. Los backups son incrementales, con deduplicación (que reduce bastante el espacio que ocupan) y verificación de integridad, y se replican off-site para no depender de un único punto físico.

### Resultado
Para ese mismo servidor más grande, el tiempo de restauración estimado bajó de ~22 horas a menos de 4 horas (cálculo conservador; en los casos que pude medir, entre 1 y 1,5 horas). Todavía es una estimación — lo voy a confirmar con una prueba de restauración completa —, pero el salto respecto al esquema anterior ya es significativo para la continuidad del negocio.