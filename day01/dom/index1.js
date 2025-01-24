const article = document.createElement("article");
article.style.border = "1px solid black";
article.style.padding = "10px";

const h1 = document.createElement("h1");
h1.innerText = "피자스쿨";

const btn = document.createElement("button");
btn.innerText = "페퍼로니피자";

const pizza = () => {
  alert("피자");
};
btn.addEventListener("click", () => {
  pizza();
});

article.appendChild(h1);
article.appendChild(btn);

document.body.appendChild(article);
