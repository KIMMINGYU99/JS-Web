const makeDough = () => {
  return new Promise((resolve, reject) => {
    console.log("도우 만들기");
    setTimeout(() => {
      resolve("도우 준비됨");
    }, 800);
  });
};
const makeTomato = () => {
  return new Promise((resolve, reject) => {
    console.log("토마토 바르기");
    setTimeout(() => {
      resolve("다 바름");
    }, 800);
  });
};
const makeCheese = () => {
  return new Promise((resolve, reject) => {
    console.log("치즈 뿌리기");
    setTimeout(() => {
      resolve("다 뿌림");
    }, 800);
  });
};
const bakePizza = () => {
  return new Promise((resolve, reject) => {
    console.log("피자 굽기");
    setTimeout(() => {
      resolve("다 구움");
    }, 800);
  });
};
const packPizza = () => {
  return new Promise((resolve, reject) => {
    console.log("피자 포장");
    setTimeout(() => {
      resolve("다 만듬");
    }, 800);
  });
};
makeDough()
  .then((v) => {
    console.log(v);
    return makeTomato();
  })
  .then((v) => {
    console.log(v);
    return makeCheese();
  })
  .then((v) => {
    console.log(v);
    return bakePizza();
  })
  .then((v) => {
    console.log(v);
    return packPizza();
  });
