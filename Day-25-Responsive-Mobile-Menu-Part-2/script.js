const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
  hideMenu();
}

// Mobile responsive menu
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const menuWrapper = document.querySelector(".nav-wrapper");

const showMenu = () => {
  hamburger.style.display = "none";
  closeIcon.style.transform = "translateY(0)";
  menu.style.transform = "translateX(0)";
  menuWrapper.style.transform = "translateX(0)";
};

const hideMenu = () => {
  hamburger.style.display = "block";
  closeIcon.style.transform = "translateY(-20rem)";
  menu.style.transform = "translateX(200%)";
  menuWrapper.style.transform = "translateX(-200%)";
}

hamburger.addEventListener("click", showMenu);
closeIcon.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);

