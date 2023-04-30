---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
pin: true
---


<!-- > Add Markdown syntax content to file `_tabs/about.md`{: .filepath } and it will show up on this page. 
{: .prompt-tip } -->



I am an experienced system administrator transitioning into the world of cloud infrastructure deployment. With a solid foundation in systems administration, I'm honing my skills to redesign and automate the deployment of hybrid infrastructures, manage virtual environments, and ensure the smooth running of critical systems.

As a DevOps practitioner, I am passionate about bridging the gap between development and operations, ensuring fast and reliable delivery of software applications. I am currently implementing Docker and Docker Swarm successfully, creating a hybrid cluster for small businesses.

In this portfolio, you will find examples of my work in infrastructure automation, containerization, etc. In developing my training, I hope to showcase my skills and experience and demonstrate my ability to contribute to any DevOps team.

<!-- As a DevOps practitioner, I am passionate about bridging the gap between development and operations, ensuring fast and reliable delivery of software applications. I have experience with cloud platforms such as AWS, Azure, and GCP, and have successfully implemented solutions for clients across various industries. -->


# **Content:**

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>