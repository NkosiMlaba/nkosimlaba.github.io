function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function expand(previous_section, current_section){
  var section1 = document.getElementById(previous_section)
  
  var section1Height = section1.offsetHeight;

  current_section.style.marginTop = section1Height + "px";
}
