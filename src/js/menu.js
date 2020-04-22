// set menu button class toggle

const btnMenu = document.querySelector(".menu_btn");
const menu = document.querySelector("nav");
const menu_list = document.querySelector(".menu_list");
const menuItems = document.querySelectorAll(".nav_item");

let showMenu = false;

function toggleMenu() {
  //display menu if not shown
  if (!showMenu) {
    btnMenu.classList.add("close_menu");
    menu.classList.add("show_menu");
    menu_list.classList.add("show_menu");
    menuItems.forEach(item => item.classList.add("show_menu"));

    showMenu = true;
  } else {
    btnMenu.classList.remove("close_menu");
    menu.classList.remove("show_menu");
    menu_list.classList.remove("show_menu");
    menuItems.forEach(item => item.classList.remove("show_menu"));

    showMenu = false;
  }
}
