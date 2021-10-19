// const car = {
//     brand: 'Mercedez Benz', 
//     color: 'Blue', 
//     Model: 'C220'
// };

// car.price = 1000;
// console.log(car);

// car.color = 'Red';
// console.log(car);

// delete car.color;
// console.log(car);

// car.distrubutor = {
//     name : 'Benz',
//     address : {road: 'Shkhumvit', district: 'Wattana', province: 'Bangkok',},
    
// };

// car.distrubutor.address.province = 'Trat';
// console.log(car);

// let i=0;

// for (let key in car){
//     console.log(`${i} ${key} ${car[key]}`);
//     i++;
// }

// LAB 4.1
// const person = {
//     name: 'jame',
//     age: 15,
//     gender: 'male',
//     address: 'Kumnanmaen',
//     phoneNumber: '0949352428',
// }


// LAB 4.2
// const user = {
//     name: 'John',
//     surename: 'Doe',

// }

// const empty = {};

// user.name = 'Matt';
// delete user.name;

// // console.log(user);

//LAB 4.3
// const isEmpty = object => {
//     let i=0;
//     for(key in object){
//         i++;
//     }
//     if(i === 0) return true;
//     return false; 
// }

// console.log(isEmpty(empty));

//LAB 4.4

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }

// let sum =0;
// for (let key in salaries){
//     sum += salaries[key];
// }
// if(isEmpty(salaries)) sum =0;

// console.log(salaries);
// console.log(sum);

//LAB 4.5 
// const multiplyNumeric = (obj,num) =>{
//     for(let key in obj){
//         if(!obj[key]  || !+obj[key]) continue;
//         obj[key] = obj[key]*num;
//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu',
// }

// multiplyNumeric(menu,5)
// console.log(menu);

//LAB 4.6
// let username = prompt('Enter username');
// let email = prompt('Enter email');
// let password = prompt('Enter password');

// const user = {
//     username,
//     email,
//     password,
// }

// console.log(user);

//LAB 4.7
// const obj = {

// };
// while(1){
//     let key = prompt('Enter Key');
//     if(key === 'stop') break;
//     let value = prompt('Enter Value');    
//     if(value === 'stop') break;
//     obj[key] = value;
// }

// console.log(obj);

//LAB 4.8

// let key = prompt('Enter fruit');
// let value = prompt(`Enter number of ${key}`);
// if(value>1) key+= 's';

// const obj = {
    
// };
// obj[key] = value;

// console.log(obj);

//LAB 4.9
// let name = prompt('Enter goods name');
// let number = prompt('Enter number of goods');
// let price = prompt('Enter price per piece');
// let discount = prompt('Enter discount in percent');

// const data = {
//     name,
//     number,
//     price,
    
// }

// if(discount > 0) data.discount = discount;

// console.log(data);

// const realPrice = (n,p,d) =>p*n-d*p/100*n;

// console.log(realPrice(number,price,discount));

//LAB 4.10
// const employees = {
//     john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
//     peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
//     mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
//     sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
//     };

// let staffName = prompt('Enter Staff Name');
// for(let key in employees){

// }

//Merge Object
// const user = {};
// const permission1 = {canView: true};
// const permission2 = {canEdit: false};

// Object.assign(user,permission1,permission2);

// console.log(permission1);
// console.log(permission2);
// console.log(user);

//4.13 this in method
// const user = {
//     name: 'Earth',
//     introduct: function(){
//         alert(`Hello, My name is ${this.name}`);
//     }
// }

// user.introduct();

//LAB 4.12
// const product1 = { name: 'Coke', price: 18, size: '500mL' };
// const product2 = product1;
// product2.name = 'Pepsi';
// product2.price = 19;
// console.log(product1); // {name: "Pepsi", price: 19, size: "500mL"}
// console.log(product2); // *{name: "Pepsi", price: 19, size: "500mL"}
// console.log(product1 === product2); // true because copying by reference

//LAB 4.13

//Solution from P'Earth
//LAB 4.2
// const user = {};
// user.name = 'John';
// user['surename'] = 'Doe';

// user.name = 'Matt';
// delete user.name;

//LAB 4.3
// function testObjectEmpty(obj) {
//     for (let key in obj){
//         return false;
//     }
//     return true;
// }

//LAB 4.4
// const calcSumSalaries = function(obj) {
//     let sum=0;
//     for (let key in obj){
//         sum += obj[key] ;
//     }
//     return sum;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//     };

// console.log(calcSumSalaries(salaries)));
// console.log(calcSumSalaries({}));

//LAB 4.5
// const multiplyNumeric = (obj, num) => {
//     const result={};
//     for (let key in obj) {
//         if(isNaN(obj[key])) {
//             result[key] = obj[key];
//         }
//         else {
//             result[key] = obj[key] * num;
//         }
//     }
//     return result;
// };

//LAB 4.6 
// const username = prompt ('Enter Username');
// const email = prompt ('Enter email');
// const password = prompt ('Enter password');

// const user = {
//     username,
//     email,
//     password,
// }

//LAB 4.7
// let obj ={};
// while(1) {
//     const key = prompt('Enter Key');
//     if(key === 'stop') break;
//     const value = prompt('Enter value');
//     if(value === 'stop') break;
//     if(!!key&&key.trim()) obj[key] = value;
// }

//LAB4.8
// let fruits = {};

// while(1){
//     const key = prompt('Enter fruits');
//     if (key === 'stop') break;
//     const value = prompt('Enter amount');
//     if(value === 'stop') break;
    
//     if(key&&key.trim()){
//         if(value > 1) {
//             // fruits[key+'s']
//             fruits[`${key}s`] = value;
//         }
//         else fruits[key] = value;
//     }
//     else alert('Invalid Number');
// }

//LAB 4.9
// const name = prompt('Enter product name');
// const amount = prompt('Enter amount');
// const price = prompt('Enter price');
// const discount = prompt('Enter discount');

// const product= {
//     name,
//     amount,
//     price,
// }

// if (discount !== 0) {
//     product.discount = discount;
// }

// function calcNetPrice = function(obj){
//     if(obj.discount) { //there is value in discount
//         return obj.price * amount * (100 - obj.discount) / 100;
//     }
//     return obj.price * obj.amount;


//     // return obj.price * amount * (100 - obj.discount || 0) / 100; //undefined >> 0 This called truthy value

// }

//LAB 4.10
// const employees = {
//     john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
//     peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
//     mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
//     sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
//     };

// const name = prompt('Enter employee name');

// if(employees[name]) {
//     console.log(`Name: ${name}, salary: ${employees[name].salary}, address: ${employees[name].address.district, ${employees[name].address.province}`);
// }
// else {
//     console.log('Not found');
// }

//LAB 4.11
// const user = {
//     email: 'cc@gmail.com',
//     isActive: true
//     };
//     user.isActive = false;
//     console.log(user); // 
//     user = {};
//     console.log(user); // error because user is the constant. it cannot be changed value.

//LAB 4.12
// const product1 = { name: 'Coke', price: 18, size: '500mL' };

// const product2 = product1;
// product2.name = 'Pepsi';
// product2.price = 19;

// console.log(product1); // copy by reference
// console.log(product2); // same product2
// console.log(product1 === product2); // true because same reference

// LAB 4.13
// const user = { name: 'Jack', role: 'ADMIN' };
// const admin = { name: 'Jack', role: 'ADMIN' };
// console.log(user === admin); // false because different reference

// LAB 4.14
// const notebook = {
//     brand: 'ASUS',
//     model: 'Vivobook D413IA-EB303TS',
//     processor: 'AMD Ryzen 7 4700U 3.6GHz',
//     graphics: 'Integrated Graphics : AMD Radeon Graphics',
//     ram: '8GB DDR4 Onboard',
//     storage: '512GB PCIe NVMe M.2 SSD'
//   };
// // const cloneNotebook={};
// for(let key in notebook){
//     cloneNotebook[key] = notebook[key];
// }

// console.log(cloneNotebook);

//2
// const cloneNotebook={};
// const cloneNotebook= Object.assign({}, notebook);
// console.log(cloneNotebook);


// LAB 4.15
// const state1 = { username: 'john', point: 100, loading: true };

// const cloneState1 = Object.assign({}, state1, {
//     loading: false,
//     point: 75,
//     success: true,
// });

// LAB 4.16
// const permission1 = { canView: false, canDelete: false };
// const permission2 = { canUpdate: true, canCreate: true };
// const permission3 = { canCreate: false, canDelete: true };
// const permission4 = { canView: true };

// const permission = Object.assign({},permission1, permission2, permission3, permission4);

// LAB 4.17
// let user = {
//     name: 'John',
//     sayHi: function () {
//       console.log(this.name);
//     }
//   };
  
//   (user.sayHi)(); // call function >> log this.name = 'John'

// LAB 4.18
// var name = 'Joe';
// function makeUser() {
//   return {
//     name: 'John',
//     ref: this
//   };
// }
// let user = makeUser(); //same window.makeUser() Global Object 
// // {name: 'John', ref: window}
// console.log(user.ref.name); // window.name = name = 'Joe'


// // LAB 4.19
// let calculator = {
//     read() {
//         this.input1 = +prompt('Enter first Number');
//         this.input2 = +prompt('Enter Second Number');
//     },
//     sum() {
//         return this.input1 + this.input2;
//     },
//     mul() {
//         return this.input1 * this.input2;
//     },
    
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// LAB 4.20

// function Calculator(){
//     this.read = function(){
//         this.input1 = prompt('Enter first Name');
//         this.input2 = prompt('Enter Second Number');
//     }
//     this.sum = function() {
//         return this.input1 + this.input2;
//     }
//     this.mul = function() {
//         return this.input1 * this.input2;
//     }
// }

// const calculator = new Calculator();
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// LAB 4.21

// function Accumulator(startingValue){
//     //this = {}; behind the scene
//     this.currentValue = startingValue; //{currentValue:0}
//     this.read = function(){
//         this.currentValue += +prompt('Enter Number');
//     }
//     this.show = function(){
//         alert(this.currentValue);
//     }
//     // return this behind the scene
// }

// const accumulator = new Accumulator(0); //{ currentValue:0 }
// // {   currentValue:0,
// //     read:   function(){
// //         this.currentValue += +prompt('Enter Number');
// //     }
// //     show:   function(){
// //         alert(this.currentValue);
// //     }
// // }
// accumulator.read();
// accumulator.read();
// accumulator.read();
// accumulator.show();

// LAB 4.22
// const product1 = {
//     name: 'Water',
//     distributor: {
//       name: 'Giraffe Water Company',
//       address: {
//         street: 'Phetchaburi',
//         subdistrict: 'Thanonphetchaburi',
//         district: 'Ratchathewi',
//         province: 'Bangkok'
//       }
//     }
//   };

// const product2 = {};
// console.log(product1.distributor.address.province);
// // console.log(product2.distributor.address.province);
// console.log(product2?.distributor?.address?.province);




