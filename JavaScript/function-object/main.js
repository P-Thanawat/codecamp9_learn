// //LAB 1
// //Declare function
// function sayHelloWorld() {
//     alert('Hello World');
// }

// // Call function
// sayHelloWorld();

//LAB 2
// //Input userName
// let userName = prompt('Please enter your name');

// //sayHelloUser function
// function sayHelloUser() {
//     alert(`Hello, ${userName}`);
// }

// //Call function
// sayHelloUser();

//LAB 3
// let message = 'Welcome to Thailand';
// function logMessage(message) {
// message = 'Hello everybody';
// console.log(message); //Hello everybody
// }
// logMessage(message);
// console.log(message); //Welcome to Thailand

//parameters and let >> Local
//normally it will use different name

// let name = 'John';
// function sayHi(input) {
// console.log(name); // John
// name = input;
// }
// sayHi();
// console.log(name); //Undefined

//input = undefined
//name is global
//function change name to undefined

// LAB 4
// function sayHi(name) {
//     let name = 'Guest';
//     console.log(name); // Error because 'name' has been declared.
//     }
//     sayHi('Jim');

//LAB 5
// const sender = 'Matt';
// function sendTo(from, to) {
// console.log(`From ${from} to ${to}`);
// }
// sendTo(sender, 'Sarah'); // From Matt to Sarah
// sendTo(null); // From null to undefined
// //send null to 'from' and automatic set undefined for 'to'

// const sender = 'Matt';
// function sendTo(to, from = 'CC') {
// console.log(`From ${from} to ${to}`);
// }
// sendTo('Max'); // From CC to Max because from used default value
// sendTo('Ben', 'Jay'); // From Jay to Ben because there were all parameters


// LAB 6
// function Multiply(numOne,numTwo) {
//     return numOne*numTwo;
// }
// let numOne = prompt('Please enter your first number');
// let numTwo = prompt('Please enter your second number');
// alert(Multiply(numOne,numTwo));

// LAB 7
// function min(numOne,numTwo) {
//     if(numOne<=numTwo) return numOne;
//     else return numTwo;
// }

// let numOne = prompt('Please enter your first number');
// let numTwo = prompt('Please enter your second number');
// alert(min(numOne,numTwo));

// // LAB 8
// function login(userName,passWord) {
//     if(userName==='admin' && passWord ==='P@ssw0rd') alert('Login Success');
//     else alert('Login fail');
// }

// let numOne = prompt('Please enter your first number');
// let numTwo = prompt('Please enter your second number');
// login(numOne,numTwo);

//LAB 9 

// LAB 3.1
// let calcMultiply = (a,b) => a*b;

// console.log(calcMultiply(23,9));

// LAB 3.2
// let checkNumber = (a) => {
    
// }

// LAB 3.3
const square = n => {
    n ** 2;
    };
    console.log(square(7)); // *











