// setTimeout(()=>{콜백함수},시간)
setTimeout(() => {
  console.log("ㅎㅇ");
}, 1000);

// setInterval 초마다 함수실행
const input = document.querySelector("#input");
const count = document.querySelector("#count");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  count.innerText = +input.value;
  const timeout = setInterval(() => {
    +count.innerText <= 0
      ? clearInterval(timeout)
      : (count.innerText = +count.innerText - 1);
  }, 1000);
});
