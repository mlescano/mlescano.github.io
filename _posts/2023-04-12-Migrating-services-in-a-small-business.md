---
layout: post
title:  "Migrating services in a small business"
date: 2023-04-12 10:00:00 -0500
categories: infrastructure
tags: vmware esxi virtual-machine windows-server sysadmin hardware
image:
  path: /assets/img/headers/migrating-servers.png
  crop: '16:9'
    media_crop:
      tablet: '16:9'
      mobile: '16:9'
---

In a small company, which does not have the resources for an advanced infrastructure and can only have an On-Premise installation, it is possible to obtain a good architecture within the limitations offered by the resources available to obtain a good implementation.

## NEED OF RESTRUCTURATION OF SERVICES

In the first instance I came across a service organization that was not very well sized. This was implemented by:

- A VM with a **CENTRAL MULTIPURPOSE SERVER** that offered DC/AD, DNS, DHCP, FILE SHARING, SQL SERVER, ERP, APPS services. Everything on Windows Server. And this can be very economical or take advantage of the resources within the same VM in a dynamic way, but these services were not independent from each other, so if any failed, the server had to be restarted, interrupting the rest of the services that had no problem.
- This server had an **outdated version of Windows Server**, resulting in security and functionality issues.
- There was also another file server in a separate VM, implemented in Linux and for this reason it was not regulated in AD.
- The network security configuration was applied by the pfsense solution with a VM, which did not offer the granularity and functionality necessary for the company.
- In addition, there were other VMs with specific applications that were wasting virtualized resources since most of them used one VM per service.

For these reasons, it was decided to migrate to a more complex and robust architecture that does not waste so many resources, as well as offering a more granular separation of services.

## GOALS

Then, the objectives to be met to solve these inconveniences are listed:
- **INDEPENDENCE OF OPERATION**:
The services must be able to be managed independently so any situation does not affect the other services
- **GOOD AVAILABILITY**:
The services must be supported with some redundancy, to offer, to the extent possible, a service that is as highly available.
- **RESOURCE OPTIMIZATION**:
Services should consume only the resources they need and release the rest so that they are available to other services.
- **DATA INTEGRITY**:
The greatest possible integrity must be safeguarded, so in its design there must be a good backup solution, both in technology and strategy.

## TASKS
To achieve these objectives, the following activities are carried out:
- **RESTRUCTURING OF PHYSICAL SERVERS** (for *Resource Optimization*)
- **SERVICE ISOLATION** (for *Independence of operation*)
- **REPLICAS OF VMs** (for *Good Availability*)
- **CREATION of VM and DOCKER SERVERS** (for *Resource Optimization*)
- **CREATION OF BACKUP SERVERS** (for *Data integrity*)


### RESTRUCTURING OF PHYSICAL SERVERS
There are 3 small physical servers of different technologies. These servers are not new or powerful, but since it is the only existing hardware, they are modified to obtain the maximum performance from them:
1. **HP PROLIANT ML150 G3** (2 logical cores, 4GB RAM)
    - It will be used with a single application as a BACKUP server with VEEAM B&R

2. **HP PROLIANT DL160 G10** (6 logical cores, 32GB RAM)
    - will be used with VMWARE ESXI virtualization as SRV1

3. **IBM SYSTEM X3550 M4** (12 logical cores, 32GB RAM)
    - will be used with VMWARE ESXI virtualization as SRV2


### SERVICE ISOLATION

In order to choose which devices offer certain services and to obtain a better isolation of them, they were grouped according to the CIA triad (Confidentiality, Integrity and Availability) and separated according the convenience as follows:


![service-isolation](/assets/img/posts/service-organization2.png)
*The figure shows the isolation of services before and after.*


Therefore, in terms of:

**CONFIDENTIALITY**: the following services were provided for being in charge of offering security and protection of information as follows:
  - ROUTING, PROXY, VPN, VLAN: physical devices such as Router and Switches were used, due to their capacity, speed and convenience
  - NAP, AD, DC, LDAP: Windows Server was used in VM due to its association with the Microsoft ecosystem.
  - Reverse-PROXY: it is implemented in DOCKER with TRAEFIK due to its ease of use and allows to protect internal services through SSL certificates.

**INTEGRITY**: the following services were provided for being in charge of offering protection in terms of backing up information in case of loss, as follows:
  - BACKUP: VEEAM B&R and DOCKER were used.
    - VEEAM takes care of the backups of VMs, physical machines and folders.
    The backup is deposited on disks according to an Online/Offline Backup schedule and strategy.
    - DOCKER is in charge of backups through DUPLICATI with backup in the cloud for the data of the services deployed in DOCKER

**AVAILABILITY**: The following services were provided in terms of:
  - *CONNECTIVITY*:
    - DNS, DHCP, NAT: a physical device was used as a Router for its capacity, speed and convenience.
    - TRANSPORT: physical device such as Switch was used for its capacity, speed and convenience.
    - WIFI-CTRL: a UNIFI DOCKER container was used due to the need to use resources and convenience.
  - *REDUNDANCY*:
    - ISP FAILOVER: a physical device was used as a Router for the FAILOVER service with two ISPs to offer REDUNDANCY of service, due to its capacity, speed and convenience.
    - VM REPLICAS: VEEAM replicates VMs between physical servers to obtain a kind of non-automatic FAILOVER, which allows VMs to be set up in a short time and to obtain good availability despite the few available resources.
    - DOCKER SWARM: this technology is used to offer uninterrupted container service. This is already available in DOCKER and offers a good service.

  - *COMMUNICATION*: offered by
    - CHAT with OPENFIRE for internal communications with DOCKER
  - *IT SERVICE*: offered by
    - ITSM with GLPI for the management of ASSET MANAGEMENT, HELP and SERVICE DESK
  - *SHARING*: offered by
    - SMB FILE SHARING on a Windows Server VM for its convenience of functionality and compatibility with the Microsoft ecosystem
  - *WORK SERVICES*: offered by
    - REMOTE APP: it is implemented in a VM with Windows Server, given its nature and needs of the different departments of the company.
    - SQL, ERP: it is implemented in a VM with Windows Server, given its nature and needs of the different departments of the company.
    - INTRANET: it is implemented in DOCKER and consists of a Web server with the development of a page that offers required services.


More about specific steps I did to ensure data integrity and good availability, please read here.


### REPLICAS OF VMs
Through the Backup server, replicas of VMs are made to obtain a mirror on each server, thus being able to opt for the mirror replica in case of failure of any.


- The services was grouped according to their type and distributed on different devices to obtain the best independence of operation:

![server-migration](/assets/img/posts/server-migration.png)

The figure shows the change from a precarious structure (on the left) to a structure (right) with the advantages mentioned above.

The distribution of the active VMs (in orange) and those that are turned off (in gray) is shown. These are replicas of the active ones and are arranged so that if a failure occurs, they can be manually activated. It doesn’t offer uninterrupted service or failover, but at least downtime is as short as possible.An attempt has been made to separate the services as best as possible given that there were only 2 servers with the capacity for virtualization and a low-resource server (Veeam B&R) to make backup copies and replicate the virtual machines. 


### CREATION OF DOCKER SERVERS
A VM with Linux and Docker for container management is created to create the services that cover:
- COMMUNICATION
- DOCKER ADMINISTRATION
- IT SERVICES
- INTRANET
- BACKUP


## LIMITATIONS:
- This structure does not offer FAILOVER for the VMs, but as described, it only has replicas that can be turned on when required.
- This structure does not have a DR system, that is to say that in the event of a disaster it can only offer replacement of VMs from the backup, this implies that it depends on the moment in which the SNAPSHOT was obtained and depending on the severity of the disaster and the frequency of exchange of the Offline copy, the last operational state of the same will be obtained.
- This structure does not have redundancy of the physical devices, due to the low budget that the company manages.

<!-- Consider the audience: It's not entirely clear who your intended audience is for this document - are you writing for technical colleagues, management, or both? Depending on the audience, you may need to adjust your level of technical detail and explain concepts more or less thoroughly.

Review and revise: Once you've added more detail and context, take some time to review and revise your document. Make sure that it flows logically, that key points are clearly articulated, and that there are no typos or errors.
 -->


