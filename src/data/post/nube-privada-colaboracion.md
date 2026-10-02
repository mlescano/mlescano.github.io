---
publishDate: 2026-03-25T00:00:00Z
title: "Almacenamiento de Objetos On-Premise con Minio"
excerpt: "Evaluación de dos alternativas de almacenamiento privado y adopción de Minio como backend de objetos."
image: "~/assets/images/diagrams/minio-almacenamiento.svg"
category: Infraestructura
tags: ["Minio", "S3 compatible"]
highlights:
  - "Evaluación de Nextcloud vs. Minio"
  - "Minio en producción, Nextcloud descartado"
  - "Sin costos de licenciamiento"
---

### El Desafío
Contar con almacenamiento de objetos propio, compatible con S3, sin depender de servicios de terceros ni de licenciamiento.

### La Solución
Evalué dos alternativas de almacenamiento on-premise:
* **Nextcloud:** lo instalé y probé como posible capa de colaboración, pero lo descarté por no ajustarse a la necesidad real del equipo.
* **Minio:** backend de almacenamiento de objetos (compatible S3) que sí quedó en producción, por su simplicidad y rendimiento para el manejo de archivos.

### Resultado
Almacenamiento de objetos propio y escalable, sin costos de licenciamiento. Aprendizaje: a veces la solución más simple (Minio) es mejor que la más completa (Nextcloud) cuando no se usan todas sus funciones.
