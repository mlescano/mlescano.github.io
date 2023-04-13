---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4

---


<!-- > Add Markdown syntax content to file `_tabs/about.md`{: .filepath } and it will show up on this page. 
{: .prompt-tip } -->



I am a skilled Sysadmin transitioning into the world of cloud infrastructure implementation. With a strong foundation in systems administration, I have honed my skills in automating infrastructure deployment, managing virtual environments, and ensuring smooth operations of critical systems.

As a DevOps practitioner, I am passionate about bridging the gap between development and operations, ensuring fast and reliable delivery of software applications. I have experience with cloud platforms such as AWS, Azure, and GCP, and have successfully implemented solutions for clients across various industries.

In this portfolio, you will find examples of my work in infrastructure automation, containerization, etc. I hope to showcase my skills and experience and demonstrate my ability to contribute to any DevOps team.

# **Content:**

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>