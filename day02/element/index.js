const box = document.querySelector(".box");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const square = document.querySelector("#square");
const soft = document.querySelector("#soft");
const hard = document.querySelector("#hard");
const small = document.querySelector("#small");
const medium = document.querySelector("#medium");
const large = document.querySelector("#large");

[small, medium, large].forEach((v) => {
  v.addEventListener("click", (e) => {
    box.classList.remove("small", "medium", "large");
    box.classList.add(e.target.id);
  });
});
[red, blue, green].forEach((v) => {
  v.addEventListener("click", (e) => {
    box.classList.remove("red", "blue", "green");
    box.classList.add(e.target.id);
  });
});
[square, soft, hard].forEach((v) => {
  v.addEventListener("click", (e) => {
    box.classList.remove("square", "soft", "hard");
    box.classList.add(e.target.id);
  });
});
