const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const div = document.querySelector("#div");
btn.addEventListener("click", () => {
  div.innerHTML = `<span class="loader"></span>`;
  fetch("https://dummyjson.com/products")
    .then((v) => v.json())
    .then((v) => {
      console.log(v);
      div.innerHTML = "";
      v.products.forEach((v) => {
        div.insertAdjacentHTML(
          "beforeend",
          `
      
      <div class="cl">
        <img class="img" src="${v.images[0]}" alt="" />
        <span class="span">${v.title}</span>
      </div>
    `
        );
      });
    });
});
