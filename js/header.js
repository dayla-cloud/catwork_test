const header = document.getElementById("header");
const headerList = document.querySelectorAll(".header_nav ul");
const headerListUpper = document.querySelectorAll(
  ".header_nav ul li a p:first-child"
);
const headerListDown = document.querySelectorAll(
  ".header_nav ul li a p:last-child"
);
const logoImage = document.querySelector(".header_logo img");
const WHITE = "white";

function whiteBackground() {
  header.style.backgroundColor = WHITE;
  for (let i = 0; i < headerListUpper.length; i++) {
    headerListUpper[i].style.color = "#242424";
    headerListDown[i].style.color = "#949494";
  }
  logoImage.src = `./asset/SVG/logo-orange.svg`;
}
function transparentBackground() {
  header.style.backgroundColor = "transparent";
  for (let i = 0; i < headerListUpper.length; i++) {
    headerListUpper[i].style.color = WHITE;
    headerListDown[i].style.color = WHITE;
  }
  logoImage.src = `./asset/SVG/logo-white.svg`;
}
function changeHeaderStyle() {
  const currentScrollLocation = window.scrollY;
  if (currentScrollLocation !== 0) {
    whiteBackground();
  } else if (currentScrollLocation === 0) {
    transparentBackground();
  }
}

window.addEventListener("scroll", changeHeaderStyle);
