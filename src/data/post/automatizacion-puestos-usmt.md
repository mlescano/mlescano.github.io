---
publishDate: 2026-04-17T00:00:00Z
title: "Despliegue automatico Zero-Touch: USMT & Windows"
excerpt: "Automaticé la migración de perfiles de usuario con USMT y PowerShell, para que el recambio de equipos sea un proceso repetible y no una tarea manual puesto por puesto."
image: "~/assets/images/diagrams/usmt-automatizacion.svg"
category: Automatización
tags: ["USMT", "PowerShell", "Windows"]
highlights:
  - "Automatización de la migración de perfiles de usuario"
  - "Menos configuración manual por equipo"
  - "Menor margen de error en el despliegue"
---
### El Desafío
Cada renovación de hardware significaba repetir, equipo por equipo, la misma secuencia manual: copiar archivos, reconfigurar accesos, reinstalar lo que hiciera falta. Era lento, dependía de que la persona que lo hacía no se saltara ningún paso, y no escalaba si había que renovar varios puestos a la vez.

### La Solución
Diseñé un flujo de trabajo con **PowerShell** y **USMT** (User State Migration Tool) que captura el perfil completo del usuario en el equipo viejo — configuración, archivos, accesos — y lo restaura en el equipo nuevo de forma automática, sin que alguien tenga que hacerlo manualmente paso a paso. Es parte del mismo criterio que uso para toda la automatización de soporte: donde el proceso es repetible y bien definido, conviene scriptearlo en vez de depender de que salga bien "a mano" cada vez.

### Resultado
El tiempo de configuración manual por equipo bajó, y con él el margen de error del proceso — ya no depende de que nadie se olvide un paso. Es uno de los procesos de soporte que automatizo con este criterio: deterministas primero, y con asistencia de IA donde ayuda a escribir o ajustar el script, no para decidir qué hacer con los datos del usuario.