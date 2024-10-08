# js-lesson-5

### JavaScript Funktsiyalari

### Funktsiya nima?

**JavaScript funksiyasi** - bu ma'lum bir vazifani bajarish uchun mo‘ljallangan kod blokidir. Funktsiyalarni chaqirib ularning kodlarini bajarish va kerak bo‘lsa qiymat qaytarish mumkin.

### O‘z ichiga olgan misollar

- **`Math.trunc()`**: Sonning kasr qismini olib tashlaydi.
  ```jsx
  console.log(Math.trunc(4.9)); // 4
  ```
- **`Number.isInteger()`**: Qiymatning butun son ekanligini tekshiradi.
  ```jsx
  console.log(Number.isInteger(4)); // true
  console.log(Number.isInteger(4.5)); // false
  ```
- **`isNaN()`**: Qiymatning NaN (Not-a-Number) ekanligini aniqlaydi.
  ```jsx
  console.log(isNaN("string")); // true
  console.log(isNaN(123)); // false
  ```

### Deklaratsiya va chaqirish

Funksiyalar `function` kalit so‘zi yordamida deklaratsiya qilinadi va ularni chaqirish orqali bajariladi.

```jsx
// Funksiya deklaratsiyasi
function greet(name) {
  console.log("Salom, " + name + "!");
}

// Funksiyani chaqirish
greet("Alice"); // Chiqarish: Salom, Alice!
```

### Parametrlar va argumentlar

- **Parametrlar**: Funksiya deklaratsiyasida ko‘rsatilgan o‘zgaruvchilar.
- **Argumentlar**: Funksiya chaqirilganda berilgan qiymatlar.

```jsx
function multiply(x, y) {
  // x, y parametrlar
  return x * y;
}

console.log(multiply(5, 3)); // Chiqarish: 15 (5, 3 argumentlar)
```

### Qiymat qaytarish

Funksiyalar `return` kalit so‘zi yordamida qiymat qaytarishi mumkin.

```jsx
function square(number) {
  return number * number;
}

let result = square(4);
console.log(result); // Chiqarish: 16
```

### Standart qiymatlar

Parametrlar uchun standart qiymatlar berish mumkin.

```jsx
function greet(name = "Mehmon") {
  console.log("Salom, " + name + "!");
}

greet(); // Chiqarish: Salom, Mehmon!
greet("Bob"); // Chiqarish: Salom, Bob!
```

### Nominatsiya konventsiyalari

- **`get…`** – Qiymat qaytaradi
- **`show…`** – Narsani ko‘rsatadi
- **`is…`** – Boolean qaytaradi
- **`check…`** – Narsani tekshiradi va boolean qaytaradi
- **`calc…`** – Narsani hisoblaydi
- **`create…`** – Narsani yaratadi

### Birinchi darajali fuqarolar

JavaScriptda funksiyalar birinchi darajali fuqarolar bo‘lib, ularni o‘zgaruvchilarga tayinlash, argument sifatida uzatish va boshqa funksiyalardan qaytarish mumkin.

```jsx
function add(a, b) {
  return a + b;
}

let sum = add; // Funksiya tayinlash

console.log(sum(2, 3)); // Chiqarish: 5
```

### Mahalliy doiralar

Funksiya ichida deklaratsiya qilingan o‘zgaruvchilar faqat shu funksiyada mavjud bo‘ladi.

```jsx
function showMessage() {
  let message = "Salom, Dunyoga!";
  console.log(message); // Chiqarish: Salom, Dunyoga!
}

showMessage();
console.log(message); // Xato: message aniqlanmagan
```

### Nomlanmagan funksiyalar

- **Darhol chaqiriladigan funktsiya ifodasi (IIFE)**

```jsx
(function () {
  console.log("Men IIFE!");
})();
```

Immediately Invoked Function Expressions (IIFE) in JavaScript are functions that are executed immediately after they are defined. They are used to create a local scope, preventing variables and functions inside them from polluting the global scope.

### Sintaksis:

IIFE odatda quyidagicha yoziladi:

```jsx
(function () {
  // Kod bu yerda bajariladi
})();
```

Bu yerda `(function () { ... })` funksiyani e'lon qiladi, va `()` u funksiyani darhol chaqiradi.

### IIFE qanday ishlaydi:

- IIFE yaratilgan zahoti bajariladi.
- U boshqa kodlar bilan nomi to‘qnashib ketishi mumkin bo‘lgan o‘zgaruvchilar va funksiyalarni global scope'dan izolyatsiya qiladi.
- IIFE'lar odatda anonim funksiyalar bo'ladi, lekin ular nomli bo'lishi ham mumkin.

### Misollar:

1. **Oddiy IIFE**:

```jsx
(function () {
  console.log("Bu funksiya darhol bajarildi!");
})();
```

Bu kod darhol "Bu funksiya darhol bajarildi!" xabarini konsolga chiqaradi.

1. **Parametrlar bilan IIFE**:

```jsx
(function (a, b) {
  console.log("Yig'indi:", a + b);
})(5, 10);
```

Bu IIFE 5 va 10 sonlarini qabul qilib, yig'indisini chiqaradi: `Yig'indi: 15`.

1. **Global o'zgaruvchilarni izolyatsiya qilish**:

```jsx
var x = 10;

(function () {
  var x = 20;
  console.log("IIFE ichidagi x:", x); // 20
})();

console.log("Global scope'dagi x:", x); // 10
```

Bu misolda, IIFE ichida e'lon qilingan `x` global `x` o'zgaruvchiga ta'sir qilmaydi.

### Xulosa:

IIFE'lar kodni modularizatsiya qilishda va global scope'da ortiqcha to'qnashuvlarni oldini olishda foydali. Ular ayniqsa, jQuery kabi kutubxonalar bilan ishlatiladi.

Qo'shimcha savollar yoki tushuncha kerak bo'lsa, xabar bering!

- **Funksiya ifodasi**
  ```jsx
  let greet = function (name) {
    console.log("Salom, " + name + "!");
  };

  greet("Alice"); // Chiqarish: Salom, Alice!
  ```
- **O‘qish funktsiyasi**
  ```jsx
  const add = (x, y) => x + y;

  console.log(add(5, 7)); // Chiqarish: 12
  ```

### Amaliy Mashqlar

1. **Faktorial hisoblovchi funksiya**

   ```jsx
   function factorial(n) {
     if (n === 0 || n === 1) return 1;
     return n * factorial(n - 1);
   }
   console.log(factorial(5)); // Chiqarish: 120
   ```

2. **Palindromni tekshiruvchi funksiya**

   ```jsx
   function isPalindrome(str) {
     let reversed = str.split("").reverse().join("");
     return str === reversed;
   }
   console.log(isPalindrome("racecar")); // Chiqarish: true
   ```

3. **Standart parametrli funksiya**

   ```jsx
   function multiply(a, b = 1) {
     return a * b;
   }
   console.log(multiply(5)); // Chiqarish: 5
   console.log(multiply(5, 3)); // Chiqarish: 15
   ```

4. **Funksiya qaytaradigan funksiya**

   ```jsx
   function makeMultiplier(multiplier) {
     return function (x) {
       return x * multiplier;
     };
   }

   let double = makeMultiplier(2);
   console.log(double(5)); // Chiqarish: 10
   ```

5. **Nomlanmagan funktsiyani voqea handler sifatida ishlatish**

   ```html
   <button id="myButton">Meni bosing</button>
   <script>
     document.getElementById("myButton").addEventListener("click", function () {
       alert("Tugma bosildi!");
     });
   </script>
   ```

### Intervyu Savollari

1. **Funktsiya deklaratsiyalari va funktsiya ifodalari orasidagi farqni tushuntiring.**
2. **O‘qish funksiyalari an'anaviy funksiyalardan qanday farq qiladi?**
3. **`var` va `let` o‘rtasidagi farqni qanday tushuntirasiz?**
4. **Funksiyani qaytaradigan funksiya yaratish qanday amalga oshiriladi?**
5. **IIFE (Darhol chaqiriladigan funksiya ifodasi) ning maqsadi nima va misol keltiring.**
6. **Birinci darajali fuqarolar tushunchasini misol bilan tushuntiring.**
7. **JavaScript funksiyalarida standart parametrlar qanday ishlaydi?**
8. **`return` kalit so‘zining maqsadi nima va agar funksiya qiymat qaytarmasa nima bo‘ladi?**
9. **JavaScript funksiyalarida doirani qanday boshqarasiz va `var` bilan deklaratsiya qilingan o‘zgaruvchilar nima bo‘ladi?**
10. **Nomlanmagan funksiyalar nomlangan funksiyalar ustunligini ko‘rsatadigan misol keltiring.**

Har qanday savollar bo‘lsa yoki qo‘shimcha tushuntirish kerak bo‘lsa, so‘rashingiz mumkin!
