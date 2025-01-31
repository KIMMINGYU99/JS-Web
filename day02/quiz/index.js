const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const color = Array(6).fill(0);

const box = document.querySelector("#box");

// const colorBtn = Array(10).fill(0);
// colorBtn.forEach(() => {
//   const random = color.map(() => arr[getRandom(0, 15)]);
//   const colorCode = "#" + random.join("");

//   const btn = document.createElement("button");
//   btn.innerText = colorCode;

//   document.body.appendChild(btn);

//   btn.addEventListener("click", () => {
//     box.style.backgroundColor = colorCode;

//   });
// });

//-----------------------------------------------------------------

// 분리하기

// const test = Array(10).fill(0);
// const test1 = test.map(() => {
//   const random = color.map(() => arr[getRandom(0, 15)]);
//   const colorCode = "#" + random.join("");
//   return colorCode;
// });
// console.log(test1);

// test1.forEach((x) => {
//   const btn = document.createElement("button");
//   btn.innerText = x;
//   document.body.appendChild(btn);

//   btn.addEventListener("click", () => {
//     box.style.backgroundColor = x;

//   });
// });

//-----------------------------------------------------------------------

// 강사님 ver
const colorList = [..."1234567890abcdef"];
const getOneOfHex = () => colorList[getRandom(0, colorList.length)];
const getColor = () =>
  "#" +
  Array(6)
    .fill(0)
    .map((v) => getOneOfHex())
    .join("");

Array(10)
  .fill(0)
  .forEach((v) => {
    const btn2 = document.createElement("button");
    const color2 = getColor();

    btn2.innerText = color2;
    btn2.addEventListener("click", () => {
      box.style.backgroundColor = color2;
    });
    document.body.appendChild(btn2);
  });
