// const arr = ['Boon', 'Earth', 'Team', 'May', 'Toon', 'Pang'];

// for(let item of arr){
//     console.log(`Hello, ${item}`);
// }

// for(let i=0; i< arr.length; i++){
//     console.log(`Hello, ${arr[i]}`);
// }

//LAB 4.1
// let array = ['jom', 'jame', 'ploy', 'bee', 'ying'];

// console.log(array);

// LAB 4.2
// const arr = [1, 2, 4];
// const newArr = arr;
// arr[0] = 3;
// console.log(newArr[0]); // 3 because copying by reference

// LAB 4.3
// let styles = [
//     'Jazz',
//     'Blues'
// ]

// styles[2] = 'Rock-n-Roll';
// styles[1] = 'Classic';
// delete styles[0];

// console.log(styles.length);
// console.log(styles);

// LAB 4.4
// let array = [];
// let i=0;
// let sum=0;
// while(1){
//     let number = prompt('Enter your number');
//     if(!number||number.trim()===''||!+number) break;
//     array[i]= +number;
//     i++; 
// }

// for (let item of array){
//     sum += item;
// }

// console.log(sum);

// LAB 4.5

// const squareArr = (arr) =>{
//     let i=0;
//     for(let item of arr){
//         arr[i] = item**2;
//         i++;
//     }
//     return arr;
// }

// let array = [2, 3, 5, 7, 11];

// console.log(squareArr(array));

// const squareArr = (arr) =>{
//     let i=0;
//     let newArr=[];
//     for(let item of arr){
//         newArr[i] = item**2;
//         i++;
//     }
//     return newArr;
// }

// let array = [2, 3, 5, 7, 11];

// console.log(squareArr(array));
// console.log(array);

// LAB 4.6
// const sales = [
//     { price: 1000, discount: 0.1 },
//     { price: 500, discount: 0.05 },
//     { price: 100 }
//     ];

// const summary = [];

// for(let i=0; i<3; i++){
//     if(sales[i]['discount']){
//         summary[i] = {netPrice: sales[i].price * (1-sales[i]['discount'])};
//     }
//     else{
//         summary[i] = {netPrice: sales[i].price};
//     }

// }

// console.log(summary);

// P'Earth //

// LAB 4.1
// const friends = ['Jom','Jame','Ploy','Som','Bom'];
// const friends = new Array('Jom','Jame','Ploy','Som','Bom');

    



