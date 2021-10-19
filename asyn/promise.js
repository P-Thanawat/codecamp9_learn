const fs = require('fs');
const { resolve } = require('path');

// const promisify = new Promise((resolve,reject)=>{
//   fs.readFile('user.json','utf8',(err,data)=>{
//     if(err) reject(err);
//     resolve('Read file success')
//   });
// });

// promisify.then(
//   function(res){
//     console.log(res)
//   },
//   function(error){
//     console.log(error.message)
//   }

// )

// function delayLog(text, ms) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log(text);
//       resolve();
//     }, ms)
//   })

// }

// delayLog('A',1000)
// .then(()=>delayLog('B',1000))
// .then(()=>delayLog('C',1000))
// .then(()=>delayLog('D',1000))
// .then(()=>delayLog('E',1000))
// .then(()=>delayLog('F',1000))
// .then(()=>delayLog('G',1000))

// delayLog('A', 1000).then(() => {
//   delayLog('B', 1000).then(() => {
//     delayLog('C', 1000).then(() => {
//       delayLog('D', 1000)
//     })
//   })
// })

// const promise = new Promise((resolve, reject) => {
//   resolve('A');
// })

// promise
//   .then(result => {
//     setTimeout(() => { console.log(result); }, 1000);
//     return 'B'
//   })

//   .then(result => {
//     setTimeout(() => { console.log(result); }, 1000);
//     return 'C'
//   })
//   .then(result => {
//     setTimeout(() => { console.log(result); }, 1000);
//     // return 'D'
//   })

// function rollDice(y){
//   return new Promise((resolve,reject)=>{
//     const x = Math.floor(Math.random()*6)+1;
//     console.log(x)
//     if(x<3) reject('stop');
//     resolve(x)
//   })
// }

// rollDice()
// .then(result=>rollDice())
// .then(result=>rollDice())
// .catch(error=>console.log(error));

const rollDice = () => Math.floor(Math.random() * 6) + 1;

// const pObj = new Promise((resolve, reject) => {
//   const score = rollDice();
//   resolve(score);
// })

// pObj
//   .then(result1 => {
//     console.log('current: ' + result1 + ',accumulator: ' + result1);
//     return result1;
//   })
//   .then(result2 => {
//     const score2 = rollDice();
//     console.log('current: ' + score2 + ',accumulator: ' + (result2 + score2));
//     return result2 + score2;
//   })
//   .then(result3 => {
//     const score3 = rollDice();
//     console.log('current: ' + score3 + ',accumulator: ' + (result3 + score3));
//   })

//   const pObj2 = pObj.then(result=>{

//   })

// const play = () => {
//   return new Promise((resolve, reject) => {
//     const score = rollDice();
//     if (score > 3) resolve(score);
//     else { reject(score) }
//   })
// }

// play().then(result => {
//   console.log(result)
//   return play();
// })
//   .then(result2 => {
//     console.log(result2)
//     return play();
//   })
//   .then(result3 => {
//     console.log(result3)
//   })
//   .catch(error => {
//     console.log(error + ' stop')
//   })

// const dice = new Promise((resolve, reject) => {
//   const score = rollDice();
//   resolve(score);

// })

// dice
//   .then(result => {
//     if (result > 1) {
//       console.log(result)
//       return rollDice();
//     }
//     else {
//       throw (result)
//     }
//   })
//   .then(result => {
//     if (result > 1) {
//       console.log(result)
//       return rollDice();
//     }
//     else {
//       throw (result)
//     }
//   })
//   .then(result => {
//     if (result > 1) {
//       console.log(result)
//     }
//     else {
//       throw (result)
//     }
//   })
//   .catch(error => {
//     console.log('stop '+error)
//   })

// read number in file 'number.json

// fs.readFile('number.json','utf8',(err,data1)=>{
//   fs.readFile('product.json','utf8',(err,data2)=>{
//     data1+data2
//     data1*data2
//   })
// })

// const readFile = file => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) reject(err);
//       else {
//         resolve(JSON.parse(data));
//       }
//     })
//   })
// }

// let number = 0;

// readFile('number.json')
//   .then(result1 => {
//     number = result1;
//     return readFile('product.json');
//   })

//   .then(result2 => {
//     const price = result2.products[1].price;
//     console.log(number + price)
//     console.log(number * price)
//   })



