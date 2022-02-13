const btnPageUp = document.getElementById("btn-page-top");

function scrollUp() {
  window.scroll(0, 0);
}

btnPageUp.addEventListener("click", scrollUp);
