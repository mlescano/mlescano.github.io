---
publishDate: 2026-03-25T00:00:00Z
title: "Almacenamiento de Objetos On-Premise con Minio"
excerpt: "Evalué Nextcloud y Minio como almacenamiento de objetos propio: descarté el primero por no ajustarse a la necesidad real, y dejé el segundo en producción por su simplicidad."
image: "~/assets/images/diagrams/minio-almacenamiento.svg"
category: Infraestructura
tags: ["Minio", "S3 compatible"]
highlights:
  - "Evaluación de Nextcloud vs. Minio"
  - "Minio en producción, Nextcloud descartado"
  - "Sin costos de licenciamiento"
---

### El Desafío
Necesitaba almacenamiento de objetos propio, compatible con S3, para que otros sistemas (como las terminales de planta) pudieran guardar y consultar archivos sin depender de servicios de terceros ni pagar licenciamiento.

### La Solución
Evalué dos alternativas de almacenamiento on-premise antes de decidir. Primero instalé y probé **Nextcloud** como posible capa de colaboración con interfaz de usuario, pero lo descarté: el equipo no iba a usar la mayor parte de sus funciones, y mantener una herramienta tan completa solo para almacenar archivos no se justificaba. En paralelo evalué **Minio**, un backend de almacenamiento de objetos compatible con S3, y fue el que terminó quedando en producción por su simplicidad y rendimiento para lo que realmente necesitaba: manejo de archivos, sin interfaz de colaboración de por medio.

### Resultado
Terminé con almacenamiento de objetos propio y escalable, sin costos de licenciamiento. El aprendizaje concreto fue que la solución más simple (Minio) resultó mejor que la más completa (Nextcloud) justamente porque no iba a usar todas sus funciones — instalar menos, pero lo que realmente se necesita, también es una decisión técnica válida.
