---
publishDate: 2026-05-01T00:00:00Z
title: "Plataforma ITSM/CRM a Medida: Reemplazo de Herramienta Legacy"
excerpt: "Plataforma ITSM/CRM a medida para una empresa industrial exportadora: reemplaza una herramienta legacy y unifica mesa de ayuda, proyectos, cambios, compras e inventario con trazabilidad completa entre áreas."
image: "~/assets/images/diagrams/itsm-plataforma.svg"
category: Gestión
tags: ["Node.js", "React", "SQL Server", "Docker"]
highlights:
  - "Unifica mesa de ayuda, proyectos, cambios y compras en una sola plataforma"
  - "Trazabilidad completa entre ticket, proyecto, cambio y compra"
  - "Login con Active Directory (LDAP)"
---

### Contexto y problema

En una empresa industrial exportadora, la gestión de TI estaba repartida entre una herramienta legacy, planillas, correos y carpetas compartidas. No había trazabilidad entre un pedido, un proyecto, un cambio y una compra: cada área llevaba su propio registro, por separado. Eso hacía difícil medir costos, disponibilidad y satisfacción, y generaba trabajo duplicado entre equipos.

### Solución

Diseñé y dirigí el desarrollo de una plataforma única que conecta mesa de ayuda, proyectos, cambios, compras, inventario, contratos y procesos. Cada registro muestra de dónde vino y permite volver a su origen, así que ya no hace falta reconstruir el historial a mano entre sistemas separados.

### Funcionalidades clave

- **Mesa de ayuda con SLA**: se congela al convertir un ticket en tarea de un proyecto y se restaura si vuelve a la mesa de ayuda, para no perder el seguimiento del compromiso de atención.
- **Ticket → tarea de proyecto sin duplicar datos**: comparten la misma tabla, distinguidos por el proyecto al que pertenecen, evitando información desincronizada entre dos registros del mismo trabajo.
- **Kanban con detección de estancamiento**: marca automáticamente las tareas sin movimiento en 5 días hábiles, para que nada quede olvidado en un tablero.
- **Trazabilidad entre ticket, proyecto, cambio, compra y proceso**, navegable en ambas direcciones, para reconstruir el origen de cualquier decisión o gasto.
- **Dependencias entre tareas** (4 tipos, con desbloqueo automático en 2 de ellos), para ordenar el trabajo sin coordinación manual constante.
- **Reciclaje de activos** con cadena completa de trazabilidad.
- **Ingreso de tickets por mail**, con respuesta automática, para no obligar a nadie a aprender una herramienta nueva solo para pedir ayuda.
- **Login con Active Directory (LDAP)**, para no duplicar usuarios ni contraseñas.
- **Vistas de inicio por rol** (junior, senior, desarrollo, administración).
- **Plataforma de reportes**, con 9 reportes, para medir lo que antes era difícil de medir.

### Arquitectura y stack

Backend en Node.js/Express, frontend en React con Vite y Tailwind. TanStack Query maneja el estado que viene del servidor y Zustand el estado de la interfaz; Tiptap se usa para edición de texto enriquecido. Base de datos SQLite en desarrollo, con SQL Server como destino de producción. El piloto corre sobre Docker/Portainer.

### Decisiones técnicas

El sistema había arrancado como un monolito en Python/FastAPI. Antes de migrar a Node/React, reduje el archivo principal de ~11.400 a ~2.100 líneas para que la migración partiera de una base más manejable. Para la trazabilidad usé un patrón polimórfico (origen_tipo / origen_id) que permite que cualquier entidad apunte a cualquier otra sin una tabla intermedia por cada combinación posible. Mantengo dos entornos (desarrollo y piloto) y cambio una sola variable grande por vez, para poder aislar la causa si algo falla. La base de datos del piloto vive en un volumen externo al contenedor, para no perder datos si el contenedor se recrea.

### Metodología de trabajo

Desarrollo asistido por agentes de IA y otros desarrolladores, con un archivo de convenciones como fuente única de reglas del proyecto. Las verificaciones se priorizan por nivel de riesgo. Antes de tocar datos reales siempre hago backup y pruebo primero sobre una réplica. Documenté 71 recorridos de usuario con 74 capturas para dejar registro de cómo se espera que funcione cada flujo.

### Estado actual y próximos pasos

Hay 24 módulos de negocio completos, y el rediseño visual y funcional de los módulos de Proyectos e Inventario ya está cerrado. **Todavía no está en producción**: estoy preparando el piloto con datos reales. Los próximos pasos son importar los datos históricos de la herramienta legacy, correr el piloto en Docker, y sumar un módulo de reservas de salas y activos, además de agentes de inventario automático.

### Aprendizajes

Reducir el código antes de migrar bajó mucho el riesgo del cambio de stack. Cambiar una sola variable grande por vez en el piloto resultó clave para aislar fallas sin perder tiempo adivinando la causa. Documentar los recorridos de usuario con capturas, aunque lleva tiempo, terminó siendo más rápido que explicar cada flujo de memoria cada vez que alguien lo necesitaba.
