// console.log('This is from external JavaScrip file');

// write () for excuse
// function alert >> put up message when first in website
// alert('Hello CodeCamp');

// function prompt >> puttext up messsage and text input when first in website 
// prompt('Please enter your name');

// function confirm >> put up massage and choices that including OK and cancel
// confirm('Are you sure you want to delete ?');

//LAB1
// function alert will be shown in massage box of browser
// alert('My name is Jame');

//var(variable) used in old JavaScript. it can declare again.
//let it can change its value same var.
//const(constant) cannot change its value. Must declare value.

// ERROR: due to missing initializer in declaration
// const name;
// const name='Jame';

// let nametwo;
// nametwo = 'Jame';
// console.log(nametwo);

//camelCase JavaScript
//snake_case Database
//PascalCase React
// *Cautious SensitiveCase in JavaScript


// LAB1
// var person;
// var name;
// name = 'Jame';
// person= name;
// alert(person);

// LAB2
// var myWallet, myFather, myMother, myAddress, Universe;

// LAB3
// const user='iamhero';
// const role='customer';
// alert(username);

// LAB4
// const firstName='Thanawat';
// let lastName='Pibunnirote';
// var nickname='Jame';

// // const firstName='Onsinee';
// // let lastName='P';
// var nickname='Ploy';

// declaration GLOBAL
// birthDate = 'Tuesday';  

// LAB5
// var BRAND_NAME= 'I am a hero'; //able to declare. Should use in constant.

//Type of Data

//Number 
//String >> letter
//Boolean >> store only ture or false
//null >> empty or unknown value
//undefined >> not assigned value
//Object
//BigInt
//Symbol >> store indentifier data (able to declare again)

//Dynamic-type (Don't declare type of data)

// let  age=27;
// age = 'Twenty seven';

//Strict-type (such as Java not JavaScript)

//Number (Integer and Float)
    //NaN (Not Number)
    //Infinity
    //-Infinity

//String
    //Single Quote
     //Double Quote
    //Backticks

//backtict example (Template literals)
// let firstName = 'John';
// let lastName = "Doe";
// let nickname = `John`;
// let fullName = firstName +' '+ lastName; //Ancient form
// let message = `My name is ${firstName} ${lastName}`;
// let message2 = `Ohh Glad to see you deeply`;
// console.log(message);

// //Boolean
// let isAllow= true;
// let isActive= false;
// console.log(true);
// console.log(false);
// w=5;
// let x = w>0;
// let y = w<0;
// console.log(x);
// console.log(y);

// //null
// let age= null;
// console.log(age);

// //undefined
// let z;
// console.log(z);

// //typeof return type
// let a=10;
// console.log(typeof a); //number
// var b;
// console.log(typeof(b)); //undefined
// console.log(typeof null); //error in JavaScript >> Objecct
// console.log(alert);

// //example difficult=3star :/
// let func = alert('Hello');
// console.log(typeof func); //output = undifined because alert doesn't return value.
// console.log(typeof alert); //output = function. It should return Object actually.

// LAB1
// const country = 'Thailand';
// const continent = 'Asia';
// console.log(`number is ${2}`);
// console.log(`result is ${1 + 3}`);
// console.log(`I live in ${country}`);
// console.log(`I live in ${country}, ${continent}`);
// console.log(`I live in ${country + ', ' + continent}`);
// console.log(`I live in ${'country, continent'}`);

// // LAB2
// var firstName='Thanawat';
// var lastName= 'Pibunnirote';
// var age= '15';
// var address= 'Kumnanmaen';
// console.log(`Fullname: ${firstName} ${lastName}, Age: ${age}, Address: ${address}`);
// console.log('Fullname: '+' '+firstName+' '+lastName+', Age: '+age+', Address: '+address);

// // LAB3
// console.log(typeof 'x'); //string
// console.log(typeof x); //undifined
// console.log(typeof ``); //string
// console.log(typeof Infinity);  //number
// console.log(typeof(100/0)); //number
// console.log(typeof(1+'3')); //string *
// console.log(typeof(1*'a')); //number *
// console.log(typeof null); //object


//Transfer type of data

// let a=10;
// a = null; 
// a = undefined;

//Expesit
//Impesit

//Transfer to String
//String(value)
//'' + value
//`${value}`

//Transfer to Number
//Number(value)
//+value
//value *1

// let x='10';
// console.log(Number(x));

// console.log(Math.max(NaN,1,0));

//Boolean
//Boolean(value)
//!!value

// a&&b;
// c||d;

//math operation
// console.log(2 ** 5); // 32
// console.log(7 ** 2); // 49
// console.log(0.2 ** 3); // 0.008000000000000002

// LAB1
// let a = undefined;
// let b = 2;
// let c = a++;
// let d = String(a);
// let e = '' + b;
// let f = `${c}`;

// console.log(d);
// console.log(e);
// console.log(f);

// LAB2
// let a = undefined; //NaN
// let b = null; //0
// let c = b + '4 2'; //NaN //'Null4 2'

// let d = Number(a);
// let e = +b;
// let f = c * 1;

// console.log(d);
// console.log(e);
// console.log(f);

// LAB3
// let a = undefined; //false
// let b = ' '; //true
// let c = !b; //false 

// let d = Boolean(a);
// let e = !!b;
// let f = !!c;

// console.log(d);
// console.log(e);
// console.log(f);

// LAB4
// console.log('' + 1 + 0); //10
// console.log('' - 1 + 0); //-1
// console.log(true + false); //1
// console.log(6 / '3'); //2
// console.log('2' * '3'); //6
// console.log(' -9 ' - 5); //-14
// console.log(' -9 ' + 5); //-9 5
// console.log('4px' - 2); //NaN
// console.log(2 + 4 + 'px'); //6px
// console.log(null + 1); //1
// console.log(undefined + 1); //NaN

// LAB5
// let a=0;
// a++;
// a+=3;
// a*=17;
// a%=7;
// console.log(a); //5

// LAB6
// let a = 1;
// let b = 2;
// let c = a++;
// let d = ++c;
// let e = ++d + d++ + d;

// console.log(a); //2
// console.log(b); //2
// console.log(c); //2
// console.log(d); //4
// console.log(e); //10

// LAB7
// let a=prompt('Enter Something: ');
// let b=prompt('Enter Something: ');
// let c=Number(a)+Number(b);
// alert(c);

// LAB8
// let a=0.1;
// let b=0.2;
// let c=a+b;
// c=c-c%0.01;
// alert(c);
//alert(c.toFixed(2)); //toFixed(resolution of number)

// LAB9
// let a = 1 * '4' + +null + +' ' - '5' * 2 + +(7 + 2 + '' + +!!undefined);
// //  a = 4 + 0 + 0 - 10 + 90;
// // let b = 1 * '4'; //4
// let b = 1 * '4' + ;
// console.log(b); //84

// 1*4+0+0-5*2+(90)
//unity is higher piority than binary >> do unity first

//1 * '4' = 4
//4 = =null =  4
//4 + +' ' = 4
//4 - '5' * 2 = -6
//1 * '4' + +null + +' ' - '5' * 2 = -6
//7 + 2 = 9
//9 + '' + !!underfined = '90'
//-6 + +'90' = 84

// ==== must same both value and type
// == cautious null and undefined don't convert to number
// null == undefined >> should use === for equal comparison
//include >= <= 

// // LAB 6.1
// console.log('1' > 4); //false // 1 > 4 
// console.log('' <= 1); //true //0 <= 1
// console.log('apple' > 'pineapple'); //false //a > p
// console.log(undefined == null); //true //special
// console.log(undefined === null); //false //type
// console.log(NaN !== 2); //true //value not same and type not same
// console.log(NaN == NaN); //false //value not same
// console.log(NaN === NaN); //false //value not same

// if(condition) {state;} 
// if(condition) {state;} else {state;}

// let year = prompt('Enter');

// if(year ==== '2015') {
//     alert('you are right');
// }
// else {
//     alert('you are wrong');
// }

//firstly check codition of if 
//if condition of if is true it will execute statement of if's  box
//if condition of if it false it will execute statemennt of else's box

// block of code to be executed if condition is true
// block of code to be executed if the condition1 is false and codition2 is true

// let year = prompt('enter');

// if (year < 2015) {
//     alert('too early');

// }
// else if {}


// //Conditional Operator or Ternary
// let year = prompt('enter');
// let message = year === '2015' ? 'You are right' : 'you are wrong';
// //let message = (year === '2015') ? 'You are right' : 'you are wrong';
// alert(message);

// //LAB 7.1
// if (0) {
//     alert('Zero');
//     } else {
//     alert('Nooo');
//     }

//Nooo

// // LAB 7.2
// if (' ') alert('Yes');
// else alert('Nooo');

//Yes because ' ' convert to boolean. It will be true

// LAB 7.3
// let  Name = prompt('Guess my name!');
// if(Name==='Jame') {
//     alert('Correctly, You are right!');
// }
// else {
//     // alert('Incorrect, Im not' + ' ' + Name);
//     alert(`Incorrect, I'm not ${Name}`);
// }

// LAB 7.4
// let Number = +prompt('Enter Number');
// if(Number>0){
//     message = 'Positive Number'; 
// }
// else if(Number==0) {
//     message = 'Zero';
// }
// else if(Number<0) {
//     message = 'Negative Number';
// }
// else {
//     message = 'Invalid Number';
// }

// alert(message);

// LAB 7.5
// let Number = +prompt('Enter Number');
// if(Number%2==0) {
//     message = 'Even Number';
// }
// else if(Number%2 != 0) {
//     message = 'Odd Number';
// }

// alert(message);

// // LAB 7.6
// let num1 = +prompt('Enter first Number');
// let num2 = +prompt('Enter second Number');
// let sum = num1 + num2;

// if((num1>0||num1<0||num1==0)&&(num2>0||num2<0||num2==0)){
//     message = sum;
// }
// else {
//     message = 'Invalid Number';
// }

// alert(message);

// /////////
// let num1 = prompt('Enter first Number');
// let num2 = prompt('Enter second Number');

// if(num1 === null || num2 === null){
//     alert('invalid');
// }
// else if(num1.trim()===''||num2.trim()===''){
//     alert('invalid2');
// }
// else if(isNaN(num1)||isNaN(num2)){
//     alert('invalid3');
// }

// LAB 7.7
// let userName = prompt('Enter your username');
// let passWord = prompt('Enter your password');
// if(userName==''&&passWord==''){
//     alert('Both Username and Password are Required');
// }
// else if(userName ==='' || userName === null){
//     alert('Username is Required');
// }
// else if(passWord === ''|| userName === null){
//     alert('Password is Required');
// }

// if(userName=='admin'&&passWord=='1234'){
//     alert('Hello, '+userName);
// }

// else if(userName=='john'&&passWord=='qwerty'){
//     alert('Hello, '+userName);
// }

// else {
//     alert('Invalid username or password');
// }



// LAB 7.8
// let point = +prompt('Input point');
// if(point >= 80) {
//     message = 'A';
// }
// else if(point>=70){
//     message = 'B';  
// }
// else if(point>=60){
//     message = 'C';
// }
// else if(point>=50){
//     message = 'D';
// }
// else {
//     message = 'F';
// }

// alert(`Your Grade is ${message}`);

// LAB 7.9
// let age = prompt('How old are you');

// let message = (age>=18) ? 'Allowed' : 'Not Allowed' ;
// alert(message);

//LAB 7.10
// let login = prompt('Enter Username');
// let message = (login == 'Employee') ? 'Hello' : (login=='Director')?'Greeting':(login==''?'No login':'');

// alert(message);

// LAB 7.11



//LAB 7.13
// let num = +prompt('Enter your number');

// switch (num){
//     case 1:
//         alert('One');
//         break;

//     case 0:
//         alert('Zero');
//         break;

//     case -1:
//         alert('Minus zero');
//         break;

//     default:
//         alert('Invalid number');
        
// }

//LAB 7.14
// let a = +prompt('a?');

// switch(a){
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;

// }

// LAB 7.15
// let brower = prompt('Enter your brower');

// if (brower === 'Edge') {
//     alert(`You've got the Edge!`);

// }
// else if(brower === 'Chrome'|| brower === 'Firefox'|| brower === 'Safari' || brower === 'Opera'){
//     alert('Okay we support these browers too');
// }
// else {
//     alert('We hope that this page looks ok!');
// }


// LAB 8.3
// let user = prompt('Enter username');


// let pass;
// if(user===null||user.trim()===''){
//     user = 'guest';
// }
// if(user==='codecamp'){
//     pass = prompt('Enter password');
//     if(pass=='123456'){
//         user = 'codecamp';
//     }
//     else {
//         alert('Wrong password');
//         user = 'guest';
//     }
// }
// else {
//     user = 'guest';
// }

// alert(`Welcome ${user}`);


//refactor
let user = prompt('Enter username') || 'guest';

let isCorrectPassword = false;

if(user==='codecamp'){
    const password = prompt('Enter password');
    if(password === '123456'){
        user = 'codecamp';
        isCorrectPassword = true;
    } else {
        alert('wrong password');
    }
} else {
    user = 'guest';
}
(isCoreectPassword || user === 'guest') && alert (`welcome ${user}`);







































