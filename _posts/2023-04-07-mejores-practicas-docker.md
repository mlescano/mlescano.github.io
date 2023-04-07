# mejores practicas docker

### Buenas Prácticas **Portainer**

1. Utilizar los stacks de Portainer para definir y desplegar servicios
2. Configurar los endpoints para conectarse a los clusters de Docker y Swarm
3. Utilizar etiquetas y constraints para distribuir los servicios en los nodos correctos
4. Configurar roles y permisos de usuario para controlar el acceso a las funcionalidades de Portainer
5. Usar el monitoreo y registro de logs de Portainer para tener visibilidad del estado de los servicios.
6. Crea un endpoint de Docker en Portainer para poder acceder a tus recursos Docker y desplegar contenedores.
7. Utiliza el modo Swarm para trabajar con múltiples nodos, ya que te permitirá desplegar servicios de forma escalable y en alta disponibilidad.
8. Crea los stacks y servicios de forma separada y utiliza los nombres de servicios y redes de forma consistente.
9. Evita la creación de redes dentro del compose del stack. En su lugar, crea las redes previamente y utiliza **`external`** en tu archivo Compose para hacer referencia a ellas.
10. Utiliza etiquetas de Docker en tus contenedores para hacer el seguimiento de su estado y propiedad.
11. Utiliza etiquetas de Docker en tus stacks y servicios para hacer el seguimiento de su versión y propiedad.

### Buenas Prácticas **Docker**

1. Utiliza imágenes de Docker oficiales siempre que sea posible. Estas imágenes son mantenidas por el equipo de Docker y suelen ser más seguras y confiables que otras. Tambien puedes utilizar imágenes confiables  o crear la propia a a partir de estas o las oficiales.
2. No guardar datos persistentes dentro de los contenedores
3. Utilizar Docker Compose para definir, orquestar y desplegar servicios o contenedores.
4. Crear y utilizar volúmenes para persistencia de datos.
5. Utilizar puertos explícitos y no aleatorios para la exposición de servicios.
6. Utilizar variables de entorno para la configuración de servicios.
7. Utilizar etiquetas de Docker para etiquetar y organizar contenedores.
8. Tener un sistema de monitoreo y registro de logs.
9. Hacer backups y pruebas de restauración regularmente.