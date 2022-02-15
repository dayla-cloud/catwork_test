const btnPageUp = document.getElementById("btn-page-top");
const landingPage = document.getElementById("landing-page");
const landingPageHalfHeight = landingPage.offsetHeight / 2;
function scrollUp() {
  window.scroll(0, 0);
}

function showBtnPageUp() {
  const currentScrollLocation = window.scrollY;
  if (currentScrollLocation >= landingPageHalfHeight) {
    btnPageUp.style.bottom = "10%";
    btnPageUp.style.opacity = "1";
  } else {
    btnPageUp.style.bottom = "-100%";
    btnPageUp.style.opacity = "0";
  }
}

window.addEventListener("scroll", showBtnPageUp);
btnPageUp.addEventListener("click", scrollUp);
