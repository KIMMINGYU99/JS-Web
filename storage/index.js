// storage (저장소)
// 저장형태 : json
const stringifyData = JSON.stringify([
  { name: "아메리카노", price: 2500 },
  { name: "라떼", price: 3500 },
]);
localStorage.setItem("coffee", stringifyData);

const data = localStorage.getItem("coffee");
const parsedData = JSON.parse(data);
console.log(parsedData);
