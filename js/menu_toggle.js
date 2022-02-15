const iconMenuLine = document.getElementById("menu-open");
const iconMenuClose = document.getElementById("menu-close");
const toggledMenu = document.getElementById("header-nav");
const NONE_CLASSNAME = "none";
const BLOCK_CLASSNAME = "block";

function openMenu() {
  toggledMenu.style.right = "0";
  iconMenuLine.style.display = NONE_CLASSNAME;
}
function closeMenu() {
  toggledMenu.style.right = "-100%";
  iconMenuLine.style.display = BLOCK_CLASSNAME;
}

function handleMenu() {
  const innerWidth = window.innerWidth;

  if (innerWidth > 1230) {
    iconMenuLine.style.display = NONE_CLASSNAME;
  } else {
    iconMenuLine.style.display = BLOCK_CLASSNAME;
    iconMenuLine.addEventListener("click", openMenu);
    iconMenuClose.addEventListener("click", closeMenu);
  }
}

handleMenu();
window.addEventListener("resize", handleMenu);
