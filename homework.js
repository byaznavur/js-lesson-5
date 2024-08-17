// QY - qiymat qaytaruvchi
// QYM - qiymat qaytarmaydigan

//? => DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR

//! Func1. Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning yuzasi va perimetrini hisoblovchi rectangle(a, b) nomli funksiya hosil qiling. QYM
// Input: rectangle (6, 9)
// Output: 54, 30

//! Func2. Tomoni a ga teng bo’lgan teng tomonli uchburchakning yuzasi va perimetrini hisoblovchi triangle(a) nomli funksiya hosil qiling. QYM
// triangle (6)

//! Func3.  1 dan n ga sonlar yig’indisini qaytaruvchi sum(n) nomli funksiya hosil qiling. QY

//! Func4. isSquare (k) mantiqiy funksiyasini hosil qiling. (k > 0). Agar k biror butun sonning kvadrati bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isSquare(10) => false
// isSquare(25) => true

//! Func5. Butun qiymat qaytaruvchi digitCount(k) funksiyasini hosil qiling. (k > 0). Funksiya k ning raqamlari sonini qaytarsin. QY
// digitCount(8791) => 4

//! Func6. n natural sonning raqamlari yig'indisini hisoblovchi getDigitSum(n) nomli funksiya hosil qiling. QY
// getDigitSum (456) => 15

//! Func7. timeToHMS(T) funksiyasini hosil qiling. Funksiya berilgan T sekundni, H - soat, M - minut, S - sekundlarga ajratsin. QY
// timeToHMS(400) => 00:06:40

//! Func8. incTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund keyingi vaqtni ko’rsatsin. QY
// incTime(0, 6, 40) => 00:06:41
// incTime(0, 6, 59) => 00:07:00
// incTime(1, 59, 59) => 02:00:00
// incTime(23, 59, 59) => 00:00:00

//? =>  UYGA VAZIFA

//! Func1. a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
// power(3, 5) => 243
// const power = (a, n) => {
//   return a ** n;
// };

// let res = power(2, 3);
// console.log(res);
//! Func2. 2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a + b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
// mean(12, 48) => 30, 24
// function mean(a, b) {
//   let arithmeticMean = (a + b) / 2;
//   let geometricMean = Math.sqrt(a * b);
//   return arithmeticMean, geometricMean;
// }

// let res = mean(12, 48);

// console.log(res);
//! Func3. Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
// sign(10) => 1
// function sign(n) {
//   if (n < 0) {
//     return -1;
//   } else {
//     return 1;
//   }
// }

// let res = sign(n);
// console.log(res);

//! Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
// numberOfRoots (1, -6, 9) => 1
// function numberOfRoots(A, B, C) {
//   D = B ** 2 - 4 * A * C;
//   let checkSqrt = 0;
//   if (D > 0) {
//     checkSqrt = 2;
//   } else if ((D = 0)) {
//     checkSqrt = 1;
//   } else {
//     checkSqrt = 0;
//   }
// }
//! Func5. Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling. Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY
// function areaCircle(R) {
//   let S = Math.PI * R ** 2;
//   return S;
// }
//! Func6. A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
// sumRange(8, 10) => 27
// function sumRange(A, B) {
//   let sum = 0;
//   if (B > A) {
//     for (let i = A; i <= B; i++) {
//       sum += i;
//     }

//     return sum;
//   }
// }

// let res = sumRange(8, 10);

// console.log(res);

//! Func7. Arifmetik amallarni bajaruvchi calc(A, B, S) funksiyasini hosil qiling. A va B haqiqiy sonlar. S o'zgaruchisi orqali bajariladigan arifmetik amal aniqlanadi. “-” – ayirish, “*” – ko'paytirish, “/” - bo'lish, “+” - qo'shish va boshqa belgilar uchun 0 qaytarsin. QY
// calc(10, 15, “*”) => 150
// calc(7, 8, “+”) => 15
// function calc(A, B, S) {
//   let result = 0;
//   switch (S) {
//     case "+":
//       result = A + B;
//       break;
//     case "-":
//       result = A - B;
//       break;
//     case "*":
//       result = A * B;
//       break;
//     case "/":
//       result = A / B;
//       break;
//     default:
//       result = " Hello world!";
//   }
//   return result;
// }
//! Func8. Butun sonning juft - toqligini aniqlovchi isEven(K) funksiyasini hosil qiling. Funksiya K juft son bo'lsa - true, aks xolda false qiymat qaytarsin. QY
// isEven(10) => true
// function isEven(n) {
//   return n % 2 == 0;
// }
// let res = isEven(10);
// console.log(res);
//! Func9. Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
// sortABC(10, 5, 8) => 5, 8, 10
// function sortABC(a, b, c) {
//   let min, mid, max;

//   // Eng kichik qiymatni aniqlash
//   if (a <= b && a <= c) {
//     min = a;
//   } else if (b <= a && b <= c) {
//     min = b;
//   } else {
//     min = c;
//   }

//   // Eng katta qiymatni aniqlash
//   if (a >= b && a >= c) {
//     max = a;
//   } else if (b >= a && b >= c) {
//     max = b;
//   } else {
//     max = c;
//   }

//   // O'rtacha qiymatni aniqlash
//   mid = a + b + c - min - max;

//   return `${min}, ${mid}, ${max}`;
// }

// const res = sortABC(10, 5, 8);
// console.log(res); // Natija: 5, 8, 10

//! Func10. isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin. QY
// function isPowerN(K, N) {
//   return N === Math.sqrt(K);
// }
// const res = isPowerN(15, 5);
// console.log(res);
//! Func11. isPrime(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni tub bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isPrime(7)  => true
// function isPrime(N) {
//   let count = 0;
//   for (let i = 0; i <= N; i++) {
//     if (N % i == 0) {
//       count++;
//     }
//   }
//   if (count > 2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const res = isPrime(4);

// console.log(res);
//! Func12. isPrime funksiyasi orqali N gacha bo’lgan sonlar ichidan nechtasi tub ekanini aniqlovchi numberOfPrime(N) nomli dastur tuzilsin. QY
// numberOfPrime(10) => 4
// function isPrime(N) {
//   if (N <= 1) return false; // 1 va undan kichik sonlar tub emas
//   let count = 0;
//   for (let i = 1; i <= N; i++) {
//     if (N % i === 0) {
//       count++;
//     }
//   }
//   return count === 2; // Agar bo'luvchilar soni 2 bo'lsa, tub
// }

// function numberOfPrime(N) {
//   let count = 0;
//   for (let i = 2; i <= N; i++) { // 2 dan boshlab tekshiradi, chunki 1 tub son emas
//     if (isPrime(i)) {
//       count++;
//     }
//   }
//   return count;
// }

// const res = numberOfPrime(10); // Misol uchun 10 gacha bo'lgan tub sonlar: 2, 3, 5, 7 - jami 4 ta.
// console.log(res); // Natija: 4

//! Func13. Butun qiymat qaytaruvchi digitNth(K, N) funksiyasini hosil qiling. (K > 0). Funksiya K sonining N-raqamini qaytarsin. Agar K soni raqamlari N dan kichik bo'lsa, -1 qaytarilsin. digitCount funksiyasidan foydalaning.QY
// digitNth(105782, 5) => 8
// digitNth(1057, 5) => -1
// function digitNth(K, N) {
//   for (let i = 1; i < N; i++) {
//     K = Math.floor(K / 10);
//   }
//   if (K === 0) {
//     return -1;
//   }
//   return K % 10;
// }
// console.log(digitNth(105782, 1));
// console.log(digitNth(1057, 5));

//! Func14. N sonining raqamlaridan teskari tartibda hosil bo’ladigan sonni qaytaruvchi inverseNumber(N) nomli funksiya hosil qiling. QY
// inverseNumber(56814) => 41865
// function inverseNumber(N) {
//   let num = 0;

//   while (N > 0) {
//     num = num * 10 + (N % 10);
//     N = Math.floor(N / 10);
//   }
//   console.log(num);
// }

// inverseNumber(12313);
//! Func15. isPalindrom(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni palindrom bo'lsa - true, aks holda false qiymat qaytarilsin. inverseNumber funksiyasidan foydalaning. Palindromik son - chapda ham, o’ngdan ham o’qilganda bir xil bo’ladigan son. Masalan, 123321, 78987. QY
// isPalindrom(1678761) => true

// function isPalindrom(N) {
//   let sumNum = 0;
//   let org = N;
//   while (N > 0) {
//     sumNum = sumNum * 10 + (N % 10);
//     N = Math.floor(N / 10);
//   }
//   return sumNum === org;
// }

// console.log(isPalindrom(1678761));
//! Func16. 1 dan N ga sonlar ko’paytmasini qaytaruvchi factorial(N) nomli funksiya hosil qiling. Agar N manfiy bo’lib qolsa, 1 qaytarilsin. QY
// function factorial(N) {
//   let sum = 1;

//   for (let i = 1; i <= N; i++) {
//     if (N > 0) {
//       sum *= i;
//     } else {
//       sum = -1;
//     }
//   }

//   console.log(sum);
// }

// factorial(3);
//! Func17. 1 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing.
// getSum3(15) => 45
// function getSum3(N) {
//   let oddSum = 0;

//   for (let i = 0; i <= N; i++) {
//     if (i % 3 == 0) {
//       oddSum += i;
//     }
//   }

//   console.log(oddSum);
// }
// getSum3(15);
//! Func18. 1 dan N ga sonlar bo’lgan juft va toqlar sonlar yig’indisini qaytaruvchi sumOddEven(N) nomli funksiya hosil qiling. QYM
// sumOddEven(10) => 30, 25
// function sumOddEven(N) {
//   let oddSum = 0;
//   let evenSum = 0;

//   for (let i = 0; i <= N; i++) {
//     if (i % 2 == 0) {
//       oddSum += i;
//     } else {
//       evenSum += i;
//     }
//   }

//   console.log(oddSum);
//   console.log(evenSum);
// }

// sumOddEven(10);

//! Func19. invertTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya orqali berilgan soat, minut va sekundni T sekundga almashtiruvchi programma tuzilsin.
// invertTime(0, 6, 40) => 400
// function invertTime(H, M, S) {
//   let res = H * 3600 + M * 60 + S;
//   return res;
// }
// const sum = invertTime(0, 6, 40);
// console.log(sum);
//! Func20. decTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund oldingi vaqtni ko’rsatsin.
// decTime(0, 6, 40) => 00:06:39

// const decTime = (H, M, S) => {
//   if (S !== 0) {
//     S--;
//   } else {
//     S = 59;
//     if (M !== 0) {
//       M--;
//     } else {
//       M = 59;
//       if (H !== 0) {
//         H--;
//       } else {
//         H = 23;
//       }
//     }
//   }

//   return H + ":" + (M < 10 ? "0" + M : M) + ":" + (S < 10 ? "0" + S : S);
// };

// const res = decTime(11, 0, 0);
// console.log(res);

//! Func21. Mantiqiy qiymat qaytaruvchi isLeapYear(Y) funksiyasini hosil qiling. Funksiya berilgan Y - yil kabisa yili bo'lsa true, aks holda false qiymat qaytarsin.

// const isLeapYear = (Y) =>
//   (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0 ? true : false;

// console.log(isLeapYear(2024));
//! Func22. isLeapYear(Y) funksiyasidan foydalangan xolda, butun qiymat qaytaruvchi monthDays(M, Y) funksiyasini hosil qiling. Funksiya berilgan Y - yilning M - oyi kunlar sonini qaytarsin.
// monthDays(2, 2020) => 28
// monthDays(3, 2021) => 31
// function monthDays(M, Y) {
//   return new Date(Y, M, 0).getDate();
// }
// console.log(monthDays(10, 2024));

//! Func23. monthDays funksiyasidan foydalangan xolda, prevDate (D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan oldingi sanani aniqlasin, D - kun, Y - yil, M - oyini qaytarsin. QY
// prevDate (10, 3, 2022) => 09.03.2022
// function nextDate(D, M, Y) {
//   D !== 1 ? D-- : (D = 31);
//   if (M == 1) {
//     M = 12;
//     Y--;
//   }

//   return D + " " + M + " " + Y;
// }

// const res = nextDate(1, 1, 2023);
// console.log(res);
//! Func24. monthDays funksiyasidan foydalangan xolda, nextDate(D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan keying sanani aniqlasin, D-kun, Y yil, M - oyini qaytarsin. QY
// nextDate (10, 3, 2022) => 11.03.2022
// function nextDate(D, M, Y) {
//   D !== 31 ? D++ : (D = 1);
//   if (M == 12) {
//     M = 1;
//     Y++;
//   }

//   return D + " " + M + " " + Y;
// }

// const res = nextDate(21, 11, 2023);
// console.log(res);
//! Func25. N sonining bo’luvchilari soni va bo’luvchilari yi’gindisini chiqaruvchi getDividersNumberAndSum(N) nomli funksiya yozing. QYM
// getDividersNumberAndSum(12) => 6, 24

// function getDividersNumberAndSum(N) {
//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i <= N; i++) {
//     if (N % i == 0) {
//       count++;
//       sum += i;
//     }
//   }
//   console.log(sum);
//   console.log(count);
// }

// getDividersNumberAndSum(6);
