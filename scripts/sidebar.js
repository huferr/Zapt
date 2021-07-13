const menuButton = document.getElementById("hamburguer-menu-container");
const backgroundMenu = document.getElementById("background-menu");
const sidebarMenu = document.getElementById("sidebar-menu");

menuButton.addEventListener("click", () => {
  backgroundMenu.style.visibility = "visible";
  backgroundMenu.style.opacity = 1;
  sidebarMenu.classList.add("active");
});

backgroundMenu.addEventListener("click", () => {
  backgroundMenu.style.visibility = "hidden";
  backgroundMenu.style.opacity = 0;
  sidebarMenu.classList.remove("active");
});
