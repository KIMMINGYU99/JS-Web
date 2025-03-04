// const hour = document.querySelector("#hour");
// const minute = document.querySelector("#minute");
// const second = document.querySelector("#second");
// setInterval(() => {
//   if (+second.innerText == 59) {
//     second.innerText = 0;
//     minute.innerText = +minute.innerText + 1;
//     if (+minute.innerText == 60) {
//       minute.innerText = 0;
//       hour.innerText = +hour.innerText + 1;
//     }
//   } else {
//     second.innerText = +second.innerText + 1;
//   }
// }, 1000);

const time = document.querySelector("#time");

setInterval(() => {
  const date = new Date().toLocaleString();
  time.innerHTML = date;
}, 1000);
