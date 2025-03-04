// 기본
// 참조 : arr, obj, function

// pending : 대기중, fulfilled
const a = new Promise((success, fail) => {
  success(() => {
    setTimeout(() => {
      alert("현서 화이팅");
    }, 3000);
  });
});
a.then((v) => {
  v();
});
