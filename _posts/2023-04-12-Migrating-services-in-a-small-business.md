---
layout: post
title:  "Migrating services in a small business"
date: 2023-04-12 10:00:00 -0500
categories: infrastructure
tags: vmware esxi virtual-machine windows-server sysadmin hardware
image:
  path: /assets/img/headers/migrating-servers.png
---

In a small company, which does not have the resources for an advanced infrastructure and can only have an On-Premise installation, I have modified the structure of the services to obtain:

- Independence of operation
- Redundancy of services
- Resource Optimization
- Data integrity
- Good availability

It is possible to obtain a good architecture within the limitations that the installation offers to obtain these advantages. Here is how I did it:

- First, the services will be grouped according to their type and distributed on different devices to obtain the best independence of operation:

![server-migration](/assets/img/posts/server-migration.png)

The figure shows the change from a precarious structure (on the left) to a structure (right) with the advantages mentioned above

The distribution of the active MVs (in orange) and those that are turned off (in gray) is shown. These are replicas of the active ones and are arranged so that if a failure occurs, they can be manually activated. It doesn’t offer uninterrupted service or failover, but at least downtime is as short as possible.An attempt has been made to separate the services as best as possible given that there were only 2 servers with the capacity for virtualization and a low-resource server (Veeam B&R) to make backup copies and replicate the virtual machines. The separation of services before and after is detailed below:

![service-separation](/assets/img/posts/service-separation.png)