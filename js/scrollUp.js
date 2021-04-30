/* //Movimiento de animacion a suceder
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//animacion items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const sneaker2 = document.querySelector(".sneaker2 img");
const sizes = document.querySelector(".sizes");
//Movimiento del evento de animacion
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animacion dentro
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
});
//animacion fuera
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
});
 */
/* ----------------------------------------------------------------------------------------------- */
$(document).ready(function () {
  var ocultar = $("#ocultar");
  var mostrar = $("#mostrar");
  var toggle = $("#toggle");
  var elemento = $("#elemento");

  ocultar.click(function () {
    elemento.hide(1000);
  });

  mostrar.click(function () {
    elemento.show(1000);
  });

  toggle.click(function () {
    elemento.toggle(1000);
  });
});

/* ----------------------------------------------------------------------------------------------- */
// Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 10);
  }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;

  if (scroll > 300) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 500) {
    buttonUp.style.transform = "scale(0)";
  }
};
