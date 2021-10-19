// const obj = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 27,
//   isMarried: false,
//   phoneNumber: ['090-177-4444','094-222-4444'],
//   address :{
//     street : 'a',
//     district: 'b',
//     province: 'c'
//   },
//   sayHi: function(){
//     console.log('Hi');
//   },
//   sex:undefined
// };

// const json = JSON.stringify(obj);
// console.log(json);

// const response = '{"status":"success","time":"20201-08-17T08:13:27"}'
// const parseResponse = JSON.parse(response)
// console.log(parseResponse)
// console.log(typeof parseResponse)

// lab2.1

// const users = [
//     {
//       "email":"a",
//       "password":"b",
//       "point":"c"
//     },
//     {
//       "email":"a",
//       "password":"b",
//       "point":"c"
//     },
//     {
//       "email":"a",
//       "password":"b",
//       "point":"c"
//     },
//     {
//       "email":"a",
//       "password":"b",
//       "point":"c"
//     },
//     {
//       "email":"a",
//       "password":"b",
//       "point":"c"
//     },
// ]

// const json = JSON.stringify(users)
// console.log(json)

// lab2.2 

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   wife: undefined,
//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// };

// const json = JSON.stringify(person)
// console.log(json)
// const parseResponse = JSON.parse(json)
// console.log(parseResponse)


// import in json 
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


// read file
// fs.readFile('users.json', 'utf8', (err, data) => {

// console.log(data)
// })

//write file
// const data = {
//   transaction: [
//     {
//       id:2345,
//       product: 'p',
//     }
//   ]
// }
// fs.writeFile('transaction.json',JSON.stringify(data),'utf8',(err)=>{
//   if(err !== null) console.log('Something Wrong');
//   else console.log('Save file Success')
// })

fs.readFile('user.json', 'utf8', (err, data) => {
  if (err) return console.log(err);
  const users = JSON.parse(data).users;
  const targetUser = users.find(item => item.id === 5679)
  console.log(targetUser)

  fs.readFile('product.json', 'utf8', (err, data) => {
    if (err) return console.log(err);
    const products = JSON.parse(data).products;
    const targetProduct = products.find(item => item.id === 1346)
    console.log(targetProduct)

    const newData = { transactions: [{ id: uuidv4(), email: targetUser.email, product: targetProduct.name, price: targetProduct.price }] };
    fs.writeFile('transaction.json', JSON.stringify(newData), 'utf8', (err) => {
      if (err) console.log(err)
      console.log(newData)
    })

    
  })
})



