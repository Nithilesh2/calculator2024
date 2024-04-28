let calci = document.querySelector(".calci");
let toggle1 = document.querySelector(".tog1");
let toggle2 = document.querySelector(".tog2");
let display = document.querySelector(".display");
let form = document.querySelector(".form");

window.addEventListener("load", () => {
  calci.style.background = "rgb(201 201 201)";
  display.style.background = "rgb(53, 53, 53)";
  display.style.color = "white";
  calci.style.transition = ".8s";
});

toggle1.addEventListener("click", () => {
  toggle1.style.display = "none";
  toggle2.style.display = "block";
  calci.style.background = "rgb(201 201 201)";
  display.style.background = "rgb(53, 53, 53)";
  display.style.color = "white";
  display.style.transition = ".5s";
  calci.style.transition = ".5s";
});

toggle2.addEventListener("click", () => {
  toggle1.style.display = "block";
  toggle2.style.display = "none";
  calci.style.background = "rgb(53, 53, 53)";
  display.style.background = "rgb(201 201 201)";
  display.style.color = "black";
  form.style.filter = "drop-shadow(5px 5px 2px rgb(201, 201, 201))";
});
