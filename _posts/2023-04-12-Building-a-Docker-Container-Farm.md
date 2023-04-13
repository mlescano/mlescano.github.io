---
layout: post
title:  "Building a Docker Container Farm"
date: 2023-04-12 10:00:00 -0500
categories: infrastructure
tags: vmware esxi virtual-machine docker portainer
image:
  path: /assets/img/headers/docker-arch.png
---

In order to separate the services and make the most of the resources provided by the server, it is proposed to take further advantage of the resources. In this case the CPU and RAM, since virtual machines cannot do so, wasting the potential of the server. This is achieved by implementing a “Container” technology, which is an evolution of virtual machines, but abstracts the hardware in such a way that each container gives the service only the CPU, RAM and Storage it needs, and unused resources, are dynamically shared with other containers. This is a huge advantage over MVs.The following image illustrates a comparison with virtual machines indicating the performance of containers that share resources dynamically:

![containers](/assets/img/posts/containers-1024x499.png)

The image above shows that while the virtual machine must use a complete operating system with its CPU, RAM and reserved and non-shared disk to host an application, the containers share the same resources (Docker Engine) dynamically taking advantage of them, saving energy and contributing to the environment.

To deploy such infrastructure, a MV is created in VMWARE ESXI with Linux to install Docker later for container management to create the services of:

- Unifi Communications Control
- Openfire Chat Service
- GLPI Support Service
- OCS Inventory Service
- Server Monitoring Service
- Docker Backup Service

This MV consists of 8Gb of RAM on a single Core, where Debian 10 is installed with Docker and Portainer, which allow the visual administration of containers.The following containers are installed with the following Stacks (Compose):

![stacks](/assets/img/posts/Docker-containers.png)

Deploying container stacks via compose is very easy with Portainer:

![stack](/assets/img/posts/stack-en-portainer.png)

Finally we get the deployment of all the containers:

![containers](/assets/img/posts/portainer2.png)

Conclusion: Docker allows you to isolate container installations in such a way that, through external volumes, images can be manipulated, reinstalled and updated while conserving configurations and data. This gives it an exceptional practicality compared to common installations.