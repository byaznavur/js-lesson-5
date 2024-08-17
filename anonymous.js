// (function (a, b) {
//   console.log(a + b);
// })(3, 4);
// (function (a, b) {
//   console.log(a + b);
// })(2, 3);
// function sum(a = 0, b = 0, c = 0) {
//   return a + b + c;
// }

// const sum = function (a = 0, b = 0, c = 0) {
//   return a + b + c;
// };

// const sum = (a = 0, b = 0, c = 0) => {
//   return a + b + c;
// };

const sum = (a = 0, b = 0, c = 0) => a + b + c;

let s1 = sum(1, 3, 5);

console.log(s1);
