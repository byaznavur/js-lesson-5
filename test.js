// Bu yerda barcha funksiyalarni to'g'ri formatda va chiroyli tarzda yozib chiqaman:

//! Func1: Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning yuzasi va perimetrini hisoblovchi funksiya
// function rectangle(a, b) {
//   let area = a * b;
//   let perimeter = 2 * (a + b);
//   console.log(area, perimeter);
// }

//! Func2: Tomoni a ga teng bo’lgan teng tomonli uchburchakning yuzasi va perimetrini hisoblovchi funksiya
// function triangle(a) {
//   let area = (Math.sqrt(3) / 4) * a ** 2; // Uchburchakning yuzasi
//   let perimeter = 3 * a;
//   console.log(area.toFixed(2), perimeter);
// }

//! Func3: 1 dan n ga sonlar yig’indisini qaytaruvchi funksiya
// const sum = (n) => {
//   let res = 0;
//   for (let i = 1; i <= n; i++) {
//     res += i;
//   }
//   return res;
// };

//! Func4: K sonining kvadrat ildizi butun son ekanligini tekshiruvchi funksiya
// const isSquare = (k) => {
//   return Number.isInteger(Math.sqrt(k));
// };

//! Func5: K ning raqamlari sonini qaytaruvchi funksiya
// const digitCount = (k) => {
//   let count = 0;
//   while (k != 0) {
//     k = Math.floor(k / 10);
//     count++;
//   }
//   return count;
// };

//! Func6: N sonining raqamlari yig'indisini hisoblovchi funksiya
// const getDigitSum = (n) => {
//   let sum = 0;
//   while (n != 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// };

//! Func7: Berilgan T sekundni soat, minut va sekundlarga ajratuvchi funksiya
// const timeToHMS = (T) => {
//   let H = Math.floor(T / 3600).toString().padStart(2, '0');
//   let M = Math.floor((T % 3600) / 60).toString().padStart(2, '0');
//   let S = (T % 60).toString().padStart(2, '0');
//   console.log(`${H}:${M}:${S}`);
// };

//! Func8: Berilgan vaqtdan 1 sekund keyingi vaqtni ko’rsatuvchi funksiya
// const incTime = (H, M, S) => {
//   S++;
//   if (S === 60) {
//     S = 0;
//     M++;
//     if (M === 60) {
//       M = 0;
//       H++;
//       if (H === 24) H = 0;
//     }
//   }
//   console.log(`${H.toString().padStart(2, '0')}:${M.toString().padStart(2, '0')}:${S.toString().padStart(2, '0')}`);
// };

// ? UYGA VAZIFA

//! Func1: a sonning ixtiyoriy n-darajasini hisoblovchi funksiya
// const power = (a, n) => a ** n;

//! Func2: 2 ta a va b sonning o'rta arifmetigi va geometrigi
// const mean = (a, b) => {
//   let arithmeticMean = (a + b) / 2;
//   let geometricMean = Math.sqrt(a * b);
//   console.log(arithmeticMean, geometricMean);
// };

//! Func3: Haqiqiy sonning ishorasini aniqlovchi funksiya
// const sign = (n) => (n > 0 ? 1 : n < 0 ? -1 : 0);

//! Func4: Kvadrat tenglamaning ildizlar sonini aniqlovchi funksiya
// const numberOfRoots = (A, B, C) => {
//   let D = B ** 2 - 4 * A * C;
//   if (D > 0) return 2;
//   else if (D === 0) return 1;
//   else return 0;
// };

//! Func5: Doiraning yuzini hisoblovchi funksiya
// const areaCircle = (R) => {
//   return Math.PI * R ** 2;
// };

//! Func6: A va B sonlari orasidagi sonlar yig'indisini hisoblovchi funksiya
// const sumRange = (A, B) => {
//   if (A > B) return 0;
//   let sum = 0;
//   for (let i = A; i <= B; i++) {
//     sum += i;
//   }
//   return sum;
// };

//! Func7: Arifmetik amallarni bajaruvchi funksiya
// const calc = (A, B, S) => {
//   switch (S) {
//     case '+':
//       return A + B;
//     case '-':
//       return A - B;
//     case '*':
//       return A * B;
//     case '/':
//       return B !== 0 ? A / B : 'Zero Division Error';
//     default:
//       return 0;
//   }
// };

//! Func8: Butun sonning juft - toqligini aniqlovchi funksiya
// const isEven = (K) => K % 2 === 0;

//! Func9: 3 ta sonning eng kichigi, o’rtachasi va eng kattasini chiqaruvchi funksiya
// const sortABC = (a, b, c) => {
//   let arr = [a, b, c];
//   arr.sort((x, y) => x - y);
//   console.log(arr.join(', '));
// };

//! Func10: K soni N sonining darajasi bo'lsa aniqlovchi funksiya
// const isPowerN = (K, N) => {
//   while (K % N === 0) K /= N;
//   return K === 1;
// };

//! Func11: N soni tub bo'lsa aniqlovchi funksiya
// const isPrime = (N) => {
//   if (N < 2) return false;
//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i === 0) return false;
//   }
//   return true;
// };

//! Func12: N gacha bo’lgan sonlar ichidan nechtasi tub ekanini aniqlovchi funksiya
// const numberOfPrime = (N) => {
//   let count = 0;
//   for (let i = 2; i <= N; i++) {
//     if (isPrime(i)) count++;
//   }
//   return count;
// };

//! Func13: K sonining N-raqamini qaytaruvchi funksiya
// const digitNth = (K, N) => {
//   const digits = K.toString().split("").reverse();
//   if (digits.length < N) return -1;
//   return parseInt(digits[N - 1]);
// };

//! Func14: N sonining raqamlaridan teskari tartibda hosil bo’ladigan sonni qaytaruvchi funksiya
// const inverseNumber = (N) => {
//   return parseInt(N.toString().split("").reverse().join(""));
// };

//! Func15: N soni palindrom bo'lsa aniqlovchi funksiya
// const isPalindrom = (N) => {
//   return N === inverseNumber(N);
// };

//! Func16: 1 dan N ga sonlar ko’paytmasini qaytaruvchi funksiya
// const factorial = (N) => {
//   if (N < 0) return 1;
//   let product = 1;
//   for (let i = 1; i <= N; i++) {
//     product *= i;
//   }
//   return product;
// };

//! Func17: 1 dan N gacha bo'lgan sonlar ichida 3 ga bo'linadigan sonlar yig’indisini hisoblovchi funksiya
// const getSum3 = (N) => {
//   let sum = 0;
//   for (let i = 3; i <= N; i += 3) {
//     sum += i;
//   }
//   return sum;
// };

//! Func18: 1 dan N gacha bo'lgan juft va toq sonlar yig’indisini qaytaruvchi funksiya
// const sumOddEven = (N) => {
//   let oddSum = 0, evenSum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 2 === 0) evenSum += i;
//     else oddSum += i;
//   }
//   console.log(`Juft sonlar yig'indisi: ${evenSum}, Toq sonlar yig'indisi: ${oddSum}`);
// };

//! Func19: Berilgan soat, minut va sekundni T sekundga almashtiruvchi funksiya
// const invertTime = (H, M, S) => {
//   return H * 3600 + M * 60 + S;
// };

//! Func20: T sekundni soat, minut va sekundlarga ajratuvchi funksiya
// const timeFromSeconds = (T) => {
//   let H = Math.floor(T / 3600).toString().padStart(2, '0');
//   let M = Math.floor((T % 3600) / 60).toString().padStart(2, '0');
//   let S = (T % 60).toString().padStart(

// 2, '0');
//   console.log(`${H}:${M}:${S}`);
// };

//! Func21. Mantiqiy qiymat qaytaruvchi isLeapYear(Y) funksiyasini hosil qiling. Funksiya berilgan Y - yil kabisa yili bo'lsa true, aks holda false qiymat qaytarsin.

// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// console.log(isLeapYear(2020)); // true
// console.log(isLeapYear(2021)); // false

//! Func22. isLeapYear(Y) funksiyasidan foydalangan xolda, butun qiymat qaytaruvchi monthDays(M, Y) funksiyasini hosil qiling. Funksiya berilgan Y - yilning M - oyi kunlar sonini qaytarsin.
// monthDays(2, 2020) => 28
// monthDays(3, 2021) => 31

// function monthDays(M, Y) {
//     switch (M) {
//         case 2:
//             return isLeapYear(Y) ? 29 : 28;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             return 30;
//         default:
//             return 31;
//     }
// }

// console.log(monthDays(2, 2020)); // 29
// console.log(monthDays(3, 2021)); // 31

//! Func23. monthDays funksiyasidan foydalangan xolda, prevDate (D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan oldingi sanani aniqlasin, D - kun, Y - yil, M - oyini qaytarsin. QY
// prevDate (10, 3, 2022) => 09.03.2022

// function prevDate(D, M, Y) {
//     if (D > 1) {
//         D--;
//     } else {
//         if (M > 1) {
//             M--;
//         } else {
//             M = 12;
//             Y--;
//         }
//         D = monthDays(M, Y);
//     }
//     return `${D.toString().padStart(2, '0')}.${M.toString().padStart(2, '0')}.${Y}`;
// }

// console.log(prevDate(10, 3, 2022)); // 09.03.2022
// console.log(prevDate(1, 3, 2022));  // 28.02.2022

//! Func24. monthDays funksiyasidan foydalangan xolda, nextDate(D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan keying sanani aniqlasin, D-kun, Y yil, M - oyini qaytarsin. QY
// nextDate (10, 3, 2022) => 11.03.2022

// function nextDate(D, M, Y) {
//     if (D < monthDays(M, Y)) {
//         D++;
//     } else {
//         D = 1;
//         if (M < 12) {
//             M++;
//         } else {
//             M = 1;
//             Y++;
//         }
//     }
//     return `${D.toString().padStart(2, '0')}.${M.toString().padStart(2, '0')}.${Y}`;
// }

// console.log(nextDate(10, 3, 2022)); // 11.03.2022
// console.log(nextDate(28, 2, 2022)); // 01.03.2022

//! Func25. N sonining bo’luvchilari soni va bo’luvchilari yi’gindisini chiqaruvchi getDividersNumberAndSum(N) nomli funksiya yozing. QYM
// getDividersNumberAndSum(12) => 6, 24

// function getDividersNumberAndSum(N) {
//     let count = 0;
//     let sum = 0;
//     for (let i = 1; i <= N; i++) {
//         if (N % i === 0) {
//             count++;
//             sum += i;
//         }
//     }
//     return `${count}, ${sum}`;
// }

// console.log(getDividersNumberAndSum(12)); // 6, 28
