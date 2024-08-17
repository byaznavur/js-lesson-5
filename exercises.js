// func1

// function rectangle(a, b) {
//   let s = a * b;
//   let p = 2 * (a + b);
//   console.log(s, p);
// }

// rectangle(7, 8);

// func3

// function sum(n) {
//   let s = 0;
//   for (let i = 1; i <= n; i++) {
//     s += i;
//   }
//   return s;
// }

// const sum = function (n) {
//   let s = 0;
//   for (let i = 1; i <= n; i++) {
//     s += i;
//   }
//   return s;
// };

// const sum = (n) => {
//   let s = 0;
//   for (let i = 1; i <= n; i++) {
//     s += i;
//   }
//   return s;
// };

// let s = sum(10);

// console.log(s);

// func4

// const isSquare = (k) => {
//   let sqrt = Math.sqrt(k);
//   let check = Number.isInteger(sqrt);
//   return check;
// };

// const isSquare = (k) => Number.isInteger(Math.sqrt(k));

// let c1 = isSquare(10);

// console.log(c1);

// let c2 = isSquare(25);

// console.log(c2);

// func5

// const digitCount = (n) => {
//   let count = 0;
//   while (n != 0) {
//     n = Math.trunc(n / 10);
//     count++;
//   }
//   return count;
// };

// let d = digitCount(1235790);

// console.log(d);

// 123579 / 10 = 12357 // 1
// 12357 / 10 = 1235 // 2
// 1235 / 10 = 123 // 3
// 123 / 10 = 12 // 4
// 12 / 10 = 1 // 5
// 1 / 10 = 0 // 6

const getDigitSum = (n) => {
  let sum = 0;
  while (n != 0) {
    let r = n % 10;
    sum += r;
    n = Math.trunc(n / 10);
    console.log(r);
  }
  return sum;
};

let d = getDigitSum(123579);

console.log(d);

// 123579 / 10 = 12357 // 9
// 12357 / 10 = 1235 // 7
// 1235 / 10 = 123 // 5
// 123 / 10 = 12 // 3
// 12 / 10 = 1 // 2
// 1 / 10 = 0 // 1

// func5

// const swapTime = (n) => {
//   // if (n < 10) {
//   //   return "0" + n;
//   // }
//   // return n;
//   return n < 10 ? "0" + n : n;
// };

// cnst swapTime = (n) => (n < 10 ? "0" + n : n);

// const timeToHMS = (T) => {
//   let H = Math.trunc(T / 3600);
//   let r = T % 3600;
//   let M = Math.trunc(r / 60);
//   let S = r % 60;

//   H = swapTime(H);
//   S = swapTime(S);
//   M = swapTime(M);

//   return H + ":" + M + ":" + S;
// };

// let res = timeToHMS(100);

// console.log(res);

const swapTime = (n) => (n < 10 ? "0" + n : n);

function incTime(h, m, s) {
  s++;

  if (s == 60) {
    s = 0;
    m++;
    if (m == 60) {
      m = 0;
      h++;
      if (h == 24) {
        h = 0;
      }
    }
  }

  h = swapTime(h);
  m = swapTime(m);
  s = swapTime(s);

  return h + ":" + m + ":" + s;
}

// let res = incTime(0, 6, 40);
// let res = incTime(0, 6, 59);
// let res = incTime(1, 59, 59);
let res = incTime(23, 59, 59);

console.log(res);
