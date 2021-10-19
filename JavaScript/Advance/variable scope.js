// LAB 3.1

// let name = 'John';
// function sayHi() {
//   alert('Hi, ' + name);
// }
// name = 'Pete';
// sayHi(); // 'Pete' call lastest value

// LAB 3.2
// function makeWorker() {
//     let name = 'Pete';
//     return function () {
//       alert(name);
//     };
//   }
//   let name = 'John';
//   let work = makeWorker();
//   work(); // priority local

// LAB 3.3
// let phrase = 'Hello';
// if (true) {
//   let user = 'John';
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }
// sayHi(); // error because function is in local (use stict)

// LAB 3.4
// let x = 1;
// function func() {
//   console.log(x); // error because order of initailize
//   let x = 2;
// }
// func();

// LAB 3.5
