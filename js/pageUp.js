const btnPageUp = document.getElementById("btn-page-top");
const landingPage = document.getElementById("landing-page");
const landingPageHalfHeight = landingPage.offsetHeight / 2;
function scrollUp() {
  window.scroll(0, 0);
}

function showBtnPageUp() {
  const currentScrollLocation = window.scrollY;
  console.log(currentScrollLocation);
  if (currentScrollLocation >= landingPageHalfHeight) {
    btnPageUp.style.bottom = "194px";
    btnPageUp.style.opacity = "1";
  } else {
    btnPageUp.style.bottom = "-71px";
    btnPageUp.style.opacity = "0";
  }
}

window.addEventListener("scroll", showBtnPageUp);
btnPageUp.addEventListener("click", scrollUp);
