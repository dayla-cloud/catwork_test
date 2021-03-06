const header = document.getElementById("header");
const headerList = document.querySelectorAll(".header_nav ul");
const headerListUpper = document.querySelectorAll(
  ".header_nav ul li a p:first-child"
);
const headerListDown = document.querySelectorAll(
  ".header_nav ul li a p:last-child"
);
const logoWrapper = document.getElementById("logo-wrapper");
const currentDeviceWidth = window.screen.width;
const WHITE_CLASSNAME = "#ffffff";
const BLACK_CLASSNAME = "#242424";
const GREY_CLASSNAME = "#949494";

let lastScrollY = 0;

function desktopWhiteBg() {
  header.style.backgroundColor = WHITE_CLASSNAME;
  logoWrapper.style.backgroundImage = `url(./asset/SVG/logo-orange.svg)`;
  for (let i = 0; i < headerListUpper.length; i++) {
    headerListUpper[i].style.color = BLACK_CLASSNAME;
    headerListDown[i].style.color = GREY_CLASSNAME;
  }
}
function desktopTransparentBg() {
  header.style.backgroundColor = "transparent";
  logoWrapper.style.backgroundImage = `url(./asset/SVG/logo-white.svg)`;
  for (let i = 0; i < headerListUpper.length; i++) {
    headerListUpper[i].style.color = WHITE_CLASSNAME;
    headerListDown[i].style.color = WHITE_CLASSNAME;
  }
}

function mobileWhiteBg() {
  header.style.backgroundColor = WHITE_CLASSNAME;
  logoWrapper.style.backgroundImage = `url(./asset/SVG/logo-orange.svg)`;
  for (let i = 0; i < headerListUpper.length; i++) {
    headerListUpper[i].style.color = BLACK_CLASSNAME;
    headerListDown[i].style.color = GREY_CLASSNAME;
  }
}
function handleDesktopHeader() {
  const currentScrollLocation =
    window.scrollY || document.documentElement.scrollTop;
  if (currentScrollLocation !== 0) {
    desktopWhiteBg();
  } else if (currentScrollLocation === 0) {
    desktopTransparentBg();
  }
}

function handleMobileHeader() {
  const currentScrollLocation =
    window.scrollY || document.documentElement.scrollTop;
  if (currentScrollLocation < lastScrollY || currentScrollLocation === 0) {
    header.style.top = "0";
    mobileWhiteBg();
  } else if (
    currentScrollLocation > lastScrollY ||
    currentScrollLocation !== 0
  ) {
    header.style.top = "-100%";
  }
}

function handleHeaderBgColor() {
  let currentInnerWidth = window.innerWidth;
  if (currentInnerWidth >= 1230) {
    handleDesktopHeader();
  } else if (currentInnerWidth < 1230) {
    handleMobileHeader();
  }
  lastScrollY = window.scrollY;
}

window.addEventListener("scroll", handleHeaderBgColor);
window.addEventListener("resize", handleHeaderBgColor);
