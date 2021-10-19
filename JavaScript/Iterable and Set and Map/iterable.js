// let arrayLike = {
//     // has indexes and length => array-like
//     0: 'Hello',
//     1: 'World',
//     length: 2
//   };
//   let arr = Array.from(arrayLike); // (*)
//   console.log(arr);
//   arr.pop(); // World (method works)
//   console.log(arr);

// Solution from P'Earth

// LAB 7.1
// const map = new Map(); //create iterable
// map.set('name', 'Thomas'); //add key and value to map
// map.set('age',31); //add key and value to map
// console.log(map);

// map.set('name', 'Dan'); //add key and value to map
// map.delete('age'); //remove the value by the key
// console.log(map);

// console.log(map.has('birthDate')); //check birthDate that exist or not then return true of false
// console.log(map.size); //return size of map
// console.log(map);

// map.clear(); //remove all element in map
// console.log(map);

// LAB 7.2
// const arr = [
//     ['email', 'codeisfun@example.com'],
//     ['isActive', true]
//   ];

// const map = new Map(arr);
// console.log(map);

// LAB 7.3
// const set = new Set(); //create set
// set.add('Thailand');
// set.add('Japan');
// set.add('Thailand'); //same velue
// set.add('China'); 
// set.add('India');
// set.add('Thailand'); //same value
// set.add('China'); //same value
// set.add('Singapore');
// set.add('Japan'); //same value
  
// console.log(set); // 5 values in set

// set.delete('India'); // remove value 
// console.log(set);

// console.log(set.size); // size is the property that doesn't need bracket

// const arr = Array.from(set);
// // const arr1 = new Array(set);
// console.log(arr);
// // console.log(arr1);


// LAB 7.4
// const arr = ['Dog', 'Giraffe', 'Bear'];
// const set = new Set(arr); //create iterable(set) with array
// console.log(set)

// const str = 'Thailand';
// console.log(new Set(str)); //remove same character

// LAB 7.5
// const values = [1, 4, 8, 2, 1, 3, 3, 8];
// console.log(unique(values)); // [1, 4, 8, 2, 3]

// function unique (arr){
//     return Array.from(new Set(arr));
// }

// LAB 8.1
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

//1
// let sum=0;
// for(let value of Object.values(salaries)) {
//     sum += value;
// }

// console.log(sum);

//2
// const values = Object.values(salaries);
// console.log(values);


// LAB 8.2
// function checkEmpty(obj) {
//     for(let key of Object.keys(obj)){
//         if(key) return true; //
//         // console.log(key);
//     }
//     return false;
// }

// console.log(checkEmpty({}));

// P'Earth //

//LAB 8.1
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

// let sum = 0;
// for (let key of Object.keys(salaries)){
//     sum += salaries[key];
// }
// console.log(sum);

// let sum = 0;
// for (let value of Object.values(salaries)){
//     sum += value;
// }
// console.log(sum);

// let sum = 0;
// for (let entry of Object.entries(salaries)){
//     sum += entry[1];
// }
// console.log(sum);

//LAB 8.2
// function checkEmptyObj(obj) {
//     return Object.keys(obj).length===0;
// }

// console.log(checkEmptyObj({1:2}));



