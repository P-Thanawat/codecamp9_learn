// function User() {
//     this.name= 'name',
//     this.weight= 65.5,
//     this.height= 1.70,
//     this.bmi= function () {
//         return bmi= this.weight /(this.height ** 2); 
//     }
// }
// const user = new User();

// console.log(user.bmi());
// user.weight = 60.5;
// console.log(user.bmi());

// function Person(nickname, height, weight) {
//     this.nickname = nickname;
//     this.height = height;
//     this.weight = weight;
//     this.calBMI = function () {
//         return weight / ((height/100) ** 2);
//     }
// }
// const loki = new Person("Loki", 190, 80);
// console.log(loki.calBMI());
// console.log(loki);
// loki.weight =  50;
// console.log(loki);
// console.log(loki.calBMI());
// console.log(loki.calBMI);


// const x = "Hello There!";
// console.log(x);

// let arr = ["a", "b"];

// arr.push(function () {
//   alert(this);
// });

// arr[2](); // *

// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// function first(array, n) {
//   // array ==> required answer
// }
// first(arr1, 5); // [1,2,3,4,5]

// arr1.forEach(function (item, index, array) {
//   console.log("array=>", array);
//   console.log("item =>", item);
//   console.log("index =>", index);
// });

// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const obj = {
//   sum: function (x, n) {
//     return x + n;
//   },
//   age: 40,
// };
// arr1.forEach((item, index) => {
//   console.log(item);
//   console.log(obj.sum(item, index));
// }, obj);
// function sayHi() {
//   if (1 == 2) {
//     return "Hi";
//   } else {
//     return "Hello";
//   }
// }
// const x = sayHi();
// console.log(x);
// console.log(Object.entries({}));

// const x = 56;
// const y = 7;
// let z;

// console.log(z); // 56

// let a = 1;
// let b = 2;
// if (a > b) console.log(a);
// else console.log(b);

// function showLarger(a,b) {
//   if(a>b) {
//       console.log(a);
//   } else {
//       console.log(b);
//   }

// const acceptTwoInteger = (int1,int2) => {
//   if (int1 > int2) {
//     return int1
//   }
// return int2
// }
// console.log(acceptTwoInteger(10,6))

// let a = 1;
// let b = 2;
// const  largeNum = (a>b) ? a:b;
// console.log(largeNum)

// let a = 1;
// let b = -2;
// let c = -5;
// if (a * b * c > 0) console.log("+");
// else if (a * b * c < 0) console.log("-");

// const acceptTwoInteger = (int1,int2,int3) => {
//   let product = int1*int2*int3
//     if (product > 0) {
//       return "+"
//     }
//   return "-"
// }
// console.log(acceptTwoInteger(3,-7,2))

// const name = "David";
// const score = 87;

// if (score < 90 && score >= 80) {
//   console.log(`${name} with Grade B`);
// } else if (score <= 100 && score >= 90) {
//   console.log(`${name} with Grade A`);
// } else if (score < 80 && score >= 70) {
//   console.log(`${name} with Grade C`);
// } else if (score < 80 && score >= 70) {
//   console.log(`${name} with Grade C`);
// } else if (score < 70 && score >= 60) {
//   console.log(`${name} with Grade D`);
// } else {
//   console.log(`${name} with Grade F`);
// }

// function calGrade(name, score) {
//   if (score >= 80) {
//     return `${name} Grade A`;
//   } else if (score >= 90) {
//     return `${name} Grade B`;
//   } else if (score >= 70) {
//     return `${name} Grade C`;
//   } else if (score >= 60) {
//     return `${name} Grade D`;
//   } else {
//     return `${name} Grade F`;
//   }
// }

// console.log(calGrade("Adam", 82));

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`fizz buzz`);
//   } else if (i % 3 === 0) {
//     console.log(`fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`buzz`);
//   } else {
//     console.log(`${i}`);
//   }
// }

// let draw = (height) => {
//   let current = 0
//   let pyramid = ''

//   for (let i = 0; i < height; i++) {
//       for (let j = 0; j <= i; j++) {
//           pyramid += current
//           current++
//           // console.log(pyramid)
//       }
//       pyramid += '\n'
//   }
//   return pyramid
// }

// console.log(draw(4))
// let draw = (height) => {
//   let current = 1
//   let pyramid = ''

//   for (let i = 0; i < height; i++) {
//       for (let j = 0; j <= i; j++) {
//           pyramid += ${current} 
//           current++
//           // console.log(pyramid)
//       }
//       pyramid += '\n'
//   }
//   return pyramid
// }

// console.log(draw(4))

// let row = 7
// let picture= ""
// let count = 1
// for (let i = 1; i<=row; i++) {
// for(let j = 1; j<=i; j++) {
//  picture += ${count++} 
// }
// picture += "\n"
// }
// console.log(picture)

// const x = alert("Hello");
// const y = prompt("insert number");
// console.log("x : ", x);
// console.log("y : ", y);

// function sayHi() {
//   console.log("Hi");
//   return "Hi";
// }

// const a = sayHi;
// const b = sayHi();
// const c = a();

// console.log("a : ", a);
// console.log("b : ", b);
// console.log("c : ", c);

// function declaration
// function somSom(x, y) {
//   return x + y;
// }

//function expression
// const prae = function (z) {
//   return z + 1;
// };

//arrow function
// const ice = (a) => console.log(a);
// const ice2 = (a) => a ** 2;
// const ohm = (a) => {
//   console.log(a);
//   return a ** 2;
// };

// const x = 456;
// const y = console.log(x);
// const z = 7 + y;
// console.log("x : ", x);
// console.log("y : ", y);
// console.log("z : ", z);

// const name = prompt("enter your name");
// if (!name || !name.trim()) {
//   alert("You didnt inset your name");
// } else {
//   alert("Hello " + name);
// }

// const name2 = prompt("enter your name");
// if (name2 || name2.trim()) {
//   alert("Hello " + name2);
// } else {
//   alert("You didnt inset your name");
// }

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// const jame = new Person("Thanawat", "Piboonnirote", 26, "black");
// console.log(jame);

// console.log(jame.firstName)
// console.log(jame.lastName)
// console.log(jame.age)
// console.log(jame.eyeColor)

// let x = 7;
// const j = multiply()
// const z = sum(456);
// function sum(y) {
//   return x = x + 1;
// }
// function multiply() {
//     return x =x*10
// }
// console.log("x : ", x);
// console.log("y : ", y);
// console.log("z : ", z);
// console.log("j : ", j);

// const a = z + 5
// console.log(a)

// a ราคาเต็ม
// b เงินจ่าย
// cbfn วิธีการของส่วนลด รีเทิน เงินที่เป็นส่วนลด

// function change(a, b, cbfn) {
//   const change = b - a + cbfn(a);
//   return change;
// }

// function discount50percent(price) {
//   return price * 0.5;
// }
// function discount15percent(price) {
//   return price * 0.15;
// }
// function discount10bath() {
//   return 10;
// }

// const changeForX = change(800, 1000, discount50percent);
// console.log(changeForX);
// const changeForY = change(2500, 3000, discount10bath);
// console.log(changeForY);

// function reverseStr(str){
//     let  a = Array.from(""+str);
//     return a.reverse().join('');
// }
// console.log(reverseStr(7890));

// function หรม(a,b) {
//     const max = a<b ? a : b
//     let i
//     for (i=max; i>=1 ; i--) {
//         if(a%i===0 && b%i === 0) {
//             break
//         }
//     }
//     return i
// }

// console.log(หรม(75,15))
// function ครน(a,b) {
//     const max = a*b
//     let i = a>b ? a :b
//     for (; i<=max; i++) {
//         if (i%a ===0 && i%b===0) {
//             break
//         }
//     }
//     return i
// }
// console.log(ครน(65,91))

// const str = "change my every first letter of this string to uppercase string"

// change
// 789
// 500:1
// 100:2
// 50:1
// 20:1
// 10:1
// 5:1
// 1:4

// 789 ,500, 100,20 ,1
// 500:1
// 100:2
// 20:4
// 1:9

// const str1 = 'change my every first letter of this string to uppercase string'
// function changeFirstOfStr(str) {
//     const arrFromStr = str.split(' ')
//     console.log(arrFromStr)
//     const result = [];
//     for (let value of arrFromStr){
//         console.log("value :",value)

//         console.log(value.slice(0,1).toUpperCase() + value.slice(1))
//         result.push(value.slice(0,1).toUpperCase() + value.slice(1))
//     }
//     console.log(result)
//     return result.join(' ');
// }

// console.log(changeFirstOfStr(str1))

// function changeFirstLetter(str) {
//     const arr = str.split(" ");
//     console.log(arr)
//     return arr.map( e => e[0].toUpperCase()+e.slice(1)).join(" ");

// }
// console.log(changeFirstLetter(str1));

// function changeUpper(str) {
//     let pos = 0;
//     let newStr = '';
//     newStr += str[0].toUpperCase();
//     console.log(newStr)
//     for (let cha of str) {
//         console.log(cha)
//         if(pos === str.length-1) break;
//         if (cha === ' ') {
//             newStr += str[pos + 1].toUpperCase();
//         }
//         else newStr += str[pos + 1];
//         pos++;
//     }
//     return newStr;
// }

// console.log(changeUpper(str1));

// const myObject = { name: "Win", age: 24, gender: "Male" };
// for (let k in myObject) {
//   console.log("key: ",k);
//   console.log("value: ", myObject[k]);
// }
// for (let k of myObject) {
//     console.log(k);
//   }

// const myArray = ["Win", "Bomb", "Ice"]
// for (let k in myArray) {
//     console.log(k);
//   }
//   for (let k of myArray) {
//     console.log(k);
//   }

// const ping = { phone: "062987xxxx", address: "Yala" };
// const mint = { phone: "0805555555", address: "Bangkok", food: "Pizza" };
// const jame = {
//   phone: "062987xxxx",
//   address: "Bangkok",
//   food: "Pizza",
//   phone: "0805555555",
//   address: "Yala",
// };
// Object.assign(jame, mint, ping)
// console.log("jame :", jame);
// console.log("ping :", ping)
// jame.phone = "0949443468"
// console.log("jame :", jame)
// console.log("ping :", ping)

// let user = {
//   name: "John",
//   age: 30,
//   sayHi() {
//     alert(this.name);
//   },
// };
// user.sayHi();
// let admin = { ...user };
// admin.name = "P'Ying";
// console.log(admin);
// admin.sayHi()

// function User(a, b, c) {
// this = {}
//   this.firstName = a;
//   this.lastName = b;
//   this.age = c;
//   this.dayOlds = function () {
//     return this.age * 365.25;
//   };
// return this
// }
// ถ้าเราต้องการสร้่าง object จากฟังก์ชัน constructor User, Object ที่ถูกสร้างขึ้น จะมี properties ตาม
// ที่กำหนดไว้ในฟังก์ชัน constructor User นั่นเอง

// const ize = new User("Sorakrit", "Klinmali", 26);
// ize = fn(){return {firstName: "Sorakrit", lastName: "Klinmali", age: 26 }}
// console.log(ize);
// for (let k in ize) {
//   console.log("key: ", k);
//   console.log("value: ", ize[k]);
// }
//  console.log(ize.dayOlds())

//  const boon = new User("Suwit", "Wattanasawangsri", 33)

//  console.log(boon.dayOlds())

// let p


