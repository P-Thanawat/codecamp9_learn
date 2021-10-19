// // LAB 1
// let i = 3;
// while (i) {
// alert(i--);
// }

//answer = 3 , 2 , 1 because while i = 0 it will convert to false
//solution 

// LAB 2

// let i = 0;
// while (++i < 5) alert(i);

//iteration 1 : i= 1<5 >> alert(1)
//iteration 2 : i= 2<5 >> alert(2)
//iteration 3 : i= 3<5 >> alert(3)
//iteration 4 : i= 4<5 >> alert(4)

// let i = 0;
// while (i++ < 5) alert(i);

//iteration 1 : i = 0<5 >> alert (1)
//iteration 2 : i = 1<5 >> alert (2)
//iteration 3 : i = 2<5 >> alert (3)
//iteration 4 : i = 3<5 >> alert (4)
//iteration 5 : i = 4<5 >> alert (5)

//answer : it is not similar.

// LAB 3
// for (let i=0; i<=100; i++){
//     if(i%2===1) continue;
//     console.log(i);
// }

// for (let i=0; i<=100; i++){
//     if(i%2===0) console.log(i);
// }

// let i=0;
// while(i<=100){
//     console.log(i);
//     i+=2;
// }

// let i=0;
// while(i<=100){
//     if(i%2===0) console.log(i);
//     i++;
// }

// let i=-1;
// while(i<=100){
//     i++;
//     if(i%2===1) continue;
//     console.log(i);
// }

//solution
// let i =2;
// while(i<=100){
//     console.log(i);
//     i++;
// }

// LAB 4
// let sum=0;
// for(let i=1; i<=100; i++){
//     sum += i;
// }

// console.log(sum);

// answer : 5050
// iteration 1: i=1<=100 >> sum = 0+1;
// iteration 2: i=2<=100 >> sum = 1+2;
// iteration 3: i=3<=100 >> sum = 3+3;
// iteration 4: i=4<=100 >> sum = 6+4;
// iteration 5: i=5<=100 >> sum = 10+5;
//...
// iteration 100: i=100<=100 >> sum = 4950+100;

// let sum=0;
// for(let i=0; i<=100; i+=2){
//     sum += i;
// }
// console.log(sum);

// answer : 2550
//iteration 1: i=0<=100 >> sum = 0+0;
//iteration 2: i=2<=100 >> sum = 0+2;
//iteration 3: i=4<=100 >> sum = 2+4;
//iteration 4: i=6<=100 >> sum = 6+6;
//...
//iteration 50: i=100<=100 >> sum = xxxx+100;

// let sum=0;
// for (let i=1; i<=99; i+=2){
//     sum += i;
// }

// console.log(sum);

//answer : 2500 
//iteration 1: i=1<=99 >> sum = 0+1;
//iteration 2: i=3<=99 >> sum = 1+3;
//iteration 3: i=5<=99 >> sum = 4+5;
//iteration 4; i=7<=99 >> sum = 9+7;
//...
//iteration 50: i=99<=99 >> sum = xxx+99;

// let sum=0;
// let divide2=0;
// let divide3=0;

// for(let i=1; i<=100; i++){
//     if(i%2===0) divide2 += i**2;
//     if(i%3===0) divide3 += i**2;
// }

// sum = divide2 - divide3;
// console.log(sum);

//answer : 58939 

//solution p'earth

// let sum = 0;
// let sumEven = 0;
// let sumOdd = 0;
// let sumFinal =0;
// let sumSquareTwo =0;
// let sumSquareThree =0;

// for (let i=1; i<=100; i++){
//     sum += i; //LAB9.4.1

//     if(i%2===0) {
//         sumEven += i; //LAB9.4.2
//         // sumSquareTwo += i**2; //LAB9.4.3
//         if(i%3!==0) sumFinal += i**2;
//     }
//     else sumOdd += i;

//     if(i%3 === 0 && i%6 !== 0) {
//         // sumSquareThree += i**2;
//         sumFinal -= i**2;
//     }
// }
// console.log(sum);
// console.log(sumEven);
// console.log(sumOdd);
// console.log(sumSquareTwo-sumSquareThree);
// console.log(sumFinal);

// 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30
// 3 6 9 12 15 18 21 24 27 30
// 6 12 18 24 30

// LAB 9.5
//Solution P'earth
// let  sum=100000;
// for (let i=0; i<10; i++){
//     // sum = sum + sum*2.5/100;
//     sum = 1.025*sum;
//     console.log(sum);
// }

// console.log(sum.toFixed(2));


//answer : 128008.45











