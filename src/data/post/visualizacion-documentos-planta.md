---
publishDate: 2026-03-15T00:00:00Z
title: "Digitalización: Visualización en Planta"
excerpt: "Desplegué terminales en planta conectadas al almacenamiento de objetos Minio, para que armado y prueba siempre vean la última versión del plano y no la impresa en papel."
image: "~/assets/images/diagrams/visualizacion-planta.svg"
category: Innovación
tags: ["Minio", "Terminales industriales"]
highlights:
  - "Terminales en planta con acceso a la red interna"
  - "Integración con almacenamiento Minio"
  - "Menos errores por versiones obsoletas de planos"
---
### El Desafío
En las áreas de armado y prueba se trabajaba con planos y documentos técnicos en papel, o con copias digitales sueltas. El riesgo era real: si alguien armaba algo con una versión vieja del plano, el error aparecía recién en producción.

### La Solución
Desplegué terminales en planta con acceso a la red interna, integradas con el almacenamiento de objetos on-premise (**Minio**) que ya tenía en producción para otros usos. La idea central es simple: el operario consulta la terminal y siempre ve la versión vigente del plano, porque hay una sola fuente de verdad en lugar de copias dispersas.

### Resultado
Mejor trazabilidad documental y menos errores de armado por versiones obsoletas de planos — el problema de origen (trabajar con el documento equivocado) deja de depender de que cada persona recuerde actualizar su copia en papel.