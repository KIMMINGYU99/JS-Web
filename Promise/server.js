// server.js
// 서버에 요청을 하면 Response 타입
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const div = document.querySelector("#div");

btn.addEventListener("click", () => {
  div.innerHTML = `<span class="loader"></span>`;

  setTimeout(() => {
    fetch(`https://fakerapi.it/api/v2/books?_quantity=${input.value}`)
      .then((v) => v.json())
      .then((v) => {
        div.innerHTML = "";
        v.data.forEach((book, i) => {
          div.insertAdjacentHTML(
            "beforeend",
            `<div>${i + 1}. ${book.title}</div>`
          );
        });
      });
  }, 1000);
});
