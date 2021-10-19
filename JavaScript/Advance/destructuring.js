// // we have an array with the name and surname
// let arr = ['John', 'Doe'];
// // destructuring assignment
// // sets firstName = arr[0]
// // and surname = arr[1]
// // const firstName='';
// // const surname='';
// [firstName, surname] = arr;
// console.log(firstName); // John
// console.log(surname); // Doe

// LAB 2.1
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // 'Maya'
// console.log(second); // 'Marisa'
// console.log(third); // 'Chi'

// LAB 2.2
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     'Raindrops on roses',
//     'whiskers on kittens',
//     'Bright copper kettles',
//     'warm woolen mittens',
//   ];
//   console.log(raindrops); // 'Raindrops on roses'
//   console.log(whiskers); // 'whiskers on kittens'
//   console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles','warm woolen mittens'] because rest will be array including rested values

// LAB 2.3
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // [10, 30, 20] because it will do entire right side code first

// let x = 20;

// console.log(x);

// LAB 2.4
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); //8
// console.log(yearNeptuneDiscovered); // 1846

// LAB 2.5
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
//   let { numPlanets, ...discoveryYears } = planetFacts;
//   console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659} because rest will be object including rested properties


// LAB 2.6
// function getUserData({ firstName, favoriteColor = 'green' }) {
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
//   const a= getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // Your name is Alejandro and you like purple
//   const b= getUserData({ firstName: 'Melissa' }); // Your name is Alejandro and you like green
//   const c= getUserData({}); // Your name is undefined and you like green
//   console.log(a);
//   console.log(b);
//   console.log(c);

// LAB 2.7
// let guest = 'Jane';
// let admin = 'Pete';

// // [guest,admin] = [admin,guest];
// {guest,admin} = {guest:admin,admin:guest};

// console.log(guest);
// console.log(admin);

// LAB 2.8


  