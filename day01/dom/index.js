const btn = document.createElement("button"); // Element 타입
btn.innerText = "고기싸롱";
document.body.appendChild(btn);

const h1 = document.createElement("h1");
h1.innerText = "고기싸롱 어서오고";
h1.style.color = "red";
document.body.appendChild(h1);

const menu = [
  "삼겹살",
  "목살",
  "돼지갈비",
  "양념갈비",
  "항정살",
  "갈매기살",
  "꼬들살",
  "냉삼",
  "뽈살",
  "돼지껍데기",
];

menu.forEach((x, i) => {
  const btns = document.createElement("button");

  i % 2 == 0
    ? (btns.style.backgroundColor = "yellow")
    : (btns.style.backgroundColor = "blue");

  btns.innerText = `${i + 1}. ` + x;

  btns.addEventListener("click", () => {
    alert(x);
  });

  document.body.appendChild(btns);
});
