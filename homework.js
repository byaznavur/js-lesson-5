// QY - qiymat qaytaruvchi
// QYM - qiymat qaytarmaydigan

// ﻿DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR

//! Func1. Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning yuzasi va perimetrini hisoblovchi rectangle(a, b) nomli funksiya hosil qiling. QYM
// Input: rectangle (6, 9)
// Output: 54, 30
// function rectangle(a, b) {
//   let A = a * b;
//   let S = 2 * (a + b);
//   console.log(A, S);
// }

// rectangle(2, 3);
//! Func2. Tomoni a ga teng bo’lgan teng tomonli uchburchakning yuzasi va perimetrini hisoblovchi triangle(a) nomli funksiya hosil qiling. QYM
// triangle (6)
// function triangle(a) {
//   let A = a * a;
//   let S = 2 * a;

//   console.log(A, S);
// }

// triangle(6);
//! Func3.  1 dan n ga sonlar yig’indisini qaytaruvchi sum(n) nomli funksiya hosil qiling. QY
// const sum = (n) => {
//   let res = 0;
//   for (let i = 0; i <= n; i++) {
//     res += i;
//   }

//   return res;
// };

// let ress = sum(10);
// console.log(ress);
//! Func4. isSquare (k) mantiqiy funksiyasini hosil qiling. (k > 0). Agar k biror butun sonning kvadrati bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isSquare(10) => false
// isSquare(25) => true
// const isSquare = (k) => {
//   return Number.isInteger(Math.sqrt(k));
// };
// const res = isSquare(25);

// console.log(res);
//! Func5. Butun qiymat qaytaruvchi digitCount(k) funksiyasini hosil qiling. (k > 0). Funksiya k ning raqamlari sonini qaytarsin. QY
// digitCount(8791) => 4
// const digitCount = (k) => {
//   let count = 0;

//   while (k != 0) {
//     k = Math.trunc(k / 10);
//     count++;
//   }

//   return count;
// };

// let res = digitCount(2132);
// console.log(res);
//! Func6. n natural sonning raqamlari yig'indisini hisoblovchi getDigitSum(n) nomli funksiya hosil qiling. QY
// getDigitSum (456) => 15
// const getDigitSum = (n) => {
//   let sum = 0;

//   while (n != 0) {
//     let digit = n % 10;
//     sum += digit;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// };

// const res = getDigitSum(1233);
// console.log(res);
//! Func7. timeToHMS(T) funksiyasini hosil qiling. Funksiya berilgan T sekundni, H - soat, M - minut, S - sekundlarga ajratsin. QY
// timeToHMS(400) => 00:06:40

// Func8. incTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund keyingi vaqtni ko’rsatsin. QY
// incTime(0, 6, 40) => 00:06:41
// incTime(0, 6, 59) => 00:07:00
// incTime(1, 59, 59) => 02:00:00
// incTime(23, 59, 59) => 00:00:00

// ?UYGA VAZIFA

//! Func1. a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
// power(3, 5) => 243
// const power = (a, n) => a ** n;
// const res = power(3, 4);
// console.log(res);

//! Func2. 2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a + b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
// mean(12, 48) => 30, 24

// const mean = (a, b) => {
//   let med = (a + b) / 2;
//   let geo = (a + b) ** (1 / 2);

//   console.log(med, geo);
// };

// mean(3, 4);
// Func3. Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
// sign(10) => 1
// const sign = (n) => {
//   let res;

//   if (n > 0) {
//     res = 1;
//   } else if (n < 0) {
//     res = -1;
//   } else {
//     res = 0;
//   }
//   return res;
// };
// const sum = sign(10);
// console.log(sum);
//!  Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
// numberOfRoots (1, -6, 9) => 1
// const numberOfRoots = (A, B, C) => {
//   let D = B ** 2 - 4 * A * C;
//   let res;
//   if (D > 0) {
//     res = 2 + " ta ildiz";
//   } else if (D == 0) {
//     res = 0 + " 1 ta ildiz";
//   } else {
//     res = "Ildizi yo'q";
//   }

//   return res;
// };

// let sum = numberOfRoots(1, 2, 3);

// console.log(sum);

//!Func5. Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling. Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY

// const areaCircle = (R) => {
//   let PI = 3.14;
//   let area = PI * R ** 2;
//   return area;
// };

// let res = areaCircle(3);
// console.log(res);
//! Func6. A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
// sumRange(8, 10) => 27
// const sumRange = (A, B) => (res = A > B ? 0 : A + B);

// const ress = sumRange(2, 4);

// console.log(ress);
//! Func7. Arifmetik amallarni bajaruvchi calc(A, B, S) funksiyasini hosil qiling. A va B haqiqiy sonlar. S o'zgaruchisi orqali bajariladigan arifmetik amal aniqlanadi. “-” – ayirish, “*” – ko'paytirish, “/” - bo'lish, “+” - qo'shish va boshqa belgilar uchun 0 qaytarsin. QY
// calc(10, 15, “*”) => 150
// calc(7, 8, “+”) => 15
// const calc = (a, b, s) => {
//   let res;

//   switch (s) {
//     case "+":
//       res = a + b;
//       break;
//     case "-":
//       res = a + b;
//       break;
//     case "*":
//       res = a + b;
//       break;
//     case "-":
//       res = a + b;
//       break;

//     default:
//       res = 0;
//       break;
//   }

//   return res;
// };

// const sum = calc(12, 23, "+");

// console.log(sum);
//! Func8. Butun sonning juft - toqligini aniqlovchi isEven(K) funksiyasini hosil qiling. Funksiya K juft son bo'lsa - true, aks xolda false qiymat qaytarsin. QY
// isEven(10) => true
// const isEven = (K) => (K % 2 === 0 ? true : false);
// const res = isEven(10);
// console.log(res);
//! Func9. Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
// sortABC(10, 5, 8) => 5, 8, 10
// const sortABC = (a, b, c) => {
//     let res;

//     if (a >= b && b >= c) {
//       res = `${a} - ${b} - ${c}`;
//     } else if (a >= c && c >= b) {
//       res = `${a} - ${c} - ${b}`;
//     } else if (b >= a && a >= c) {
//       res = `${b} - ${a} - ${c}`;
//     } else if (b >= c && c >= a) {
//       res = `${b} - ${c} - ${a}`;
//     } else if (c >= a && a >= b) {
//       res = `${c} - ${a} - ${b}`;
//     } else {
//       res = `${c} - ${b} - ${a}`;
//     }

//     return res;
//   };

//   const sum = sortABC(1, 4, 3);
//   console.log(sum);

//! Func10. isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin. QY
// const isPowerN = (K, N) => (N == Math.sqrt(K) ? true : false);

// const res = isPowerN(25, 5);

// console.log(res);
// Func11. isPrime(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni tub bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isPrime(7)  => true

// Func12. isPrime funksiyasi orqali N gacha bo’lgan sonlar ichidan nechtasi tub ekanini aniqlovchi numberOfPrime(N) nomli dastur tuzilsin. QY
// numberOfPrime(10) => 4

// Func13. Butun qiymat qaytaruvchi digitNth(K, N) funksiyasini hosil qiling. (K > 0). Funksiya K sonining N-raqamini qaytarsin. Agar K soni raqamlari N dan kichik bo'lsa, -1 qaytarilsin. digitCount funksiyasidan foydalaning.QY
// digitNth(105782, 5) => 8
// digitNth(1057, 5) => -1

// Func14. N sonining raqamlaridan teskari tartibda hosil bo’ladigan sonni qaytaruvchi inverseNumber(N) nomli funksiya hosil qiling. QY
// inverseNumber(56814) => 41865

// Func15. isPalindrom(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni palindrom bo'lsa - true, aks holda false qiymat qaytarilsin. inverseNumber funksiyasidan foydalaning. Palindromik son - chapda ham, o’ngdan ham o’qilganda bir xil bo’ladigan son. Masalan, 123321, 78987. QY
// isPalindrom(1678761) => true

// Func16. 1 dan N ga sonlar ko’paytmasini qaytaruvchi factorial(N) nomli funksiya hosil qiling. Agar N manfiy bo’lib qolsa, 1 qaytarilsin. QY

// Func17. 1 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing.
// getSum3(15) => 45

// Func18. 1 dan N ga sonlar bo’lgan juft va toqlar sonlar yig’indisini qaytaruvchi sumOddEven(N) nomli funksiya hosil qiling. QYM
// sumOddEven(10) => 30, 25

// Func19. invertTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya orqali berilgan soat, minut va sekundni T sekundga almashtiruvchi programma tuzilsin.
// invertTime(0, 6, 40) => 400

// Func20. decTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund oldingi vaqtni ko’rsatsin.
// decTime(0, 6, 40) => 00:06:39

// Func21. Mantiqiy qiymat qaytaruvchi isLeapYear(Y) funksiyasini hosil qiling. Funksiya berilgan Y - yil kabisa yili bo'lsa true, aks holda false qiymat qaytarsin.

// Func22. isLeapYear(Y) funksiyasidan foydalangan xolda, butun qiymat qaytaruvchi monthDays(M, Y) funksiyasini hosil qiling. Funksiya berilgan Y - yilning M - oyi kunlar sonini qaytarsin.
// monthDays(2, 2020) => 28
// monthDays(3, 2021) => 31

// Func23. monthDays funksiyasidan foydalangan xolda, prevDate (D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan oldingi sanani aniqlasin, D - kun, Y - yil, M - oyini qaytarsin. QY
// prevDate (10, 3, 2022) => 09.03.2022

// Func24. monthDays funksiyasidan foydalangan xolda, nextDate(D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan keying sanani aniqlasin, D-kun, Y yil, M - oyini qaytarsin. QY
// nextDate (10, 3, 2022) => 11.03.2022

// Func25. N sonining bo’luvchilari soni va bo’luvchilari yi’gindisini chiqaruvchi getDividersNumberAndSum(N) nomli funksiya yozing. QYM
// getDividersNumberAndSum(12) => 6, 24
