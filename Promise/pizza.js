const btn = document.querySelector("#btn");
const state = document.querySelector("#state");

const orderPizza = () => {
  return new Promise((success, fail) => {
    const order = confirm("피자 주문하실?");
    if (order) success("주문");
    else fail("주문 취소");
  });
};
btn.addEventListener("click", () =>
  orderPizza()
    .then((success) => {
      state.innerText = success;
    })
    .catch((fail) => {
      state.innerText = fail;
    })
);
