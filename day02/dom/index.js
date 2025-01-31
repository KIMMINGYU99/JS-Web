// // 바디 태그에 buttom[버튼] 태그 추가
// // 이벤트 추가(클릭하면 점메추 alert 나오도록)

// const btn = document.createElement("button");
// document.body.appendChild(btn);

// btn.innerText = "버튼";
// btn.addEventListener("click", () => alert("점메추"));

// Html에서 불러오기
// document.getElementsByClassName
// document.querySelector
const box = document.querySelector(".box");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const square = document.querySelector(".square");
const soft = document.querySelector(".soft");
const hard = document.querySelector(".hard");
const small = document.querySelector(".small");
const medium = document.querySelector(".medium");
const large = document.querySelector(".large");

red.addEventListener("click", () => (box.style.backgroundColor = "red"));
blue.addEventListener("click", () => (box.style.backgroundColor = "blue"));
green.addEventListener("click", () => (box.style.backgroundColor = "green"));
square.addEventListener("click", () => (box.style.borderRadius = "0px"));
soft.addEventListener("click", () => (box.style.borderRadius = "50px"));
hard.addEventListener("click", () => (box.style.borderRadius = "9999px"));
small.addEventListener("click", () => {
  box.style.width = "100px";
  box.style.height = "100px";
});
medium.addEventListener("click", () => {
  box.style.width = "200px";
  box.style.height = "200px";
});
large.addEventListener("click", () => {
  box.style.width = "300px";
  box.style.height = "300px";
});
