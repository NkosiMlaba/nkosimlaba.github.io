var contactSection = document.getElementById('contact');
contactSection.innerHTML = `<p class="section__text__p1">Get in Touch</p>
<h1 class="title">Contact Me</h1>
<div class="contact-info-upper-container">
    <div class="contact-info-container">
        <img src="../../assets/email_image.png" alt="Email icon" class="icon contact-icon email-icon" />
        <p><a href="mailto:nkosimlaba397@gmail.com">nkosimlaba397@gmail.com</a></p>
    </div>
    <div class="contact-info-container">
        <img src="../../assets/linkedin_image.png" alt="LinkedIn icon" id="linkedin-icon-contact"
            class="icon contact-icon" />
        <p><a href="https://www.linkedin.com/in/nkosikhona-mlaba-1545a7273">LinkedIn</a></p>
    </div>
</div>`

var desktopNavSection = document.getElementById('desktop-nav');
desktopNavSection.innerHTML = `<div class="logo"><a href="home.html" onclick="toggleMenu()">Nkosikhona Mlaba</a></div>
<div>
    <ul class="nav-links">
        <li><a href="home.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="designs.html">Designs</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</div>`
// <li><a href="about.html">About</a></li>

var hamBurgerNavSection = document.getElementById('hamburger-nav');
hamBurgerNavSection.innerHTML = `<div class="logo"><a href="home.html" onclick="toggleMenu()">Nkosikhona Mlaba</a></div>
<div class="hamburger-menu">
    <div class="hamburger-icon" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="menu-links">
        <li><a href="home.html" onclick="toggleMenu()">Home</a></li>
        <li><a href="projects.html" onclick="toggleMenu()">Projects</a></li>
        <li><a href="designs.html" onclick="toggleMenu()">Designs</a></li>
        <li><a href="about.html" onclick="toggleMenu()">About</a></li>
        <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
    </div>
</div>`

var footerElement = document.querySelector('footer');
footerElement.innerHTML = `<nav>
<div class="nav-links-container">
    <ul class="nav-links">
        <li><a href="home.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="designs.html">Designs</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</div>
</nav>
<p style="margin-bottom: 50px">Nkosikhona Mlaba. All rights reserved</p>`