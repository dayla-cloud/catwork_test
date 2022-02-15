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
const ORANGE_CLASSNAME = "#242424";
const GREY_CLASSNAME = "#949494";

let lastScrollY = 0;

function desktopWhite_CLASSNAMEBg() {
  header.style.backgroundColor = WHITE_CLASSNAME;
  logoWrapper.style.backgroundImage = `url(./asset/SVG/logo-orange.svg)`;
  for (let i = 0; i < headerListUpper.length; i++) {
    headerListUpper[i].style.color = ORANGE_CLASSNAME;
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

function mobileWhite_CLASSNAMEBg() {
  header.style.backgroundColor = WHITE_CLASSNAME;
  logoWrapper.style.backgroundImage = `url(./asset/SVG/logo-orange.svg)`;
  for (let i = 0; i < headerListUpper.length; i++) {
    headerListUpper[i].style.color = ORANGE_CLASSNAME;
    headerListDown[i].style.color = GREY_CLASSNAME;
  }
}
function handleDesktopHeader() {
  const currentScrollLocation =
    window.scrollY || document.documentElement.scrollTop;
  if (currentScrollLocation !== 0) {
    desktopWhite_CLASSNAMEBg();
  } else if (currentScrollLocation === 0) {
    desktopTransparentBg();
  }
}

function handleMobileHeader() {
  const currentScrollLocation =
    window.scrollY || document.documentElement.scrollTop;
  if (currentScrollLocation < lastScrollY || currentScrollLocation === 0) {
    header.style.top = "0";
    mobileWhite_CLASSNAMEBg();
  } else if (
    currentScrollLocation > lastScrollY ||
    currentScrollLocation !== 0
  ) {
    header.style.top = "-100%";
  }
}

function handleHeaderBgColor() {
  const currentDeviceWidth = window.screen.width;
  const currentInnerWidth = window.innerWidth;
  if (currentDeviceWidth >= 1230 || currentInnerWidth >= 1230) {
    handleDesktopHeader();
  } else if (currentDeviceWidth < 1230 || currentInnerWidth < 1230) {
    handleMobileHeader();
  }
  lastScrollY = window.scrollY;
}

window.addEventListener("scroll", handleHeaderBgColor);
window.addEventListener("resize", handleHeaderBgColor);

let scrolling = false;
document.addEventListener("touchstart", function (e) {
  scrolling = false;
});
document.addEventListener("touchmove", function (e) {
  scrolling = false;
});
document.addEventListener("touchend", function (e) {
  scrolling = false;
});
