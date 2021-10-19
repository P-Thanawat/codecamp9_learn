const fs = require('fs');
const { resolve } = require('path');
const {v4 : uuidv4} = require('uuid')


const newUser={
  id:uuidv4(),
  email:'f6@gmail.com',
  password:'123456',
  point:0
}

// 1.promise then

// const saveUser = new Promise((resolve,reject)=>{
//   fs.writeFile('user.json',JSON.stringify(newUser),'utf8',err=>{
//     if(err) reject(err);
//     resolve('success');
//   })
// })

// saveUser.then(result=>{
//   console.log(result);
// })

// solution

function writeFile(fileName,data){
  return new Promise((resolve,reject)=>{
    fs.writeFile(fileName,JSON.stringify(data),'utf8',err=>{
      if(err) reject(err);
      else{
        resolve('success');
      }
    })
  })
}

// writeFile.then(result=>{
//   console.log(result)
// })

// .catch(err=>{
//   console.log(err)
// })

// 2.asyn await

// async function main(){
//   try{
//     await writeFile('user.json',users)
//   }
//   catch(err){
//     console.log(error)
//   }
  
// }

function readFile(fileName){
  return new Promise((resolve,reject)=>{
    fs.readFile(fileName,'utf8',(err,data)=>{
      if(err) reject(err);
      else{
        resolve(data);
      }
    })
  })
}

readFile('user.json')
  .then(result=>{
    console.log(result)
    result.push('11')
    console.log(result)
    return writeFile('user.json',result);
  })
  .then(result=>{
    console.log('success')
  })
  .catch(err=>{
    console.log(err)
  })

// async function main(){
//   try{
//     const result= await readFile('users.json');
//     result.push(newUser);
//     await writeFile('users.json',result);
//     console.log('success')    
//   }
//   catch(err){
//     console.log(err)
//   }
// }

// main()
