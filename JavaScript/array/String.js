// LAB 3.1
// const string = 'c:\\Users\\Admin\\Desktop';
// console.log(string);

// // LAB 3.2
// let str1 = 'Welcome to Thailand';
// let str2 = 'Don\'n be afraid\n';
// let str3 = 'สวัสดีประเทศไทย';

// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

// LAB 3.3
// function ucFirst(str) {
//     let first = str[0].toUpperCase();
//     let second = str.slice(1);
//     return first+second;

// }

// let message = prompt('Enter your message');
// console.log(ucFirst(message));

// LAB 3.4

// const checkMessage = (str) =>{
//     str = str.toLowerCase();
//     if(str.includes('xxx')) return true;
//     if(str.includes('porn')) return true;
//     if(str.includes('sex')) return true;
//     return false;
// }

// let string = prompt('Enter message');
// console.log(checkMessage(string));

// LAB 3.5
// function truncate(str, length) {
//     let oldlength = str.length;
//     let newstr ='';
//     if(oldlength>length) {
//         newstr = str.substr(0,length);
//         newstr += '...';
//         return newstr;
//     }
//     return str;
// }

// let string = prompt('Enter your message');
// console.log(truncate(string,5));

// // LAB 3.6
// function extractCurrencyValue(string, rate) {
//     let baht= +string.slice(1);
//     return 'THB'+baht*rate;
// }

// let dollar = prompt('Enter dollar');
// let rate = prompt('Enter rate');
// console.log(extractCurrencyValue(dollar,rate));

// P'Earth

// LAB 3.1
// const path = 'c:\\Users\\Admin\\Desktop';
// console.log(path);

// //LAB 3.2
// console.log('Welcome to Thailand'.length);
// console.log('Don\'n be afraid\n'.length); //no count \
// console.log('สวัสดีประเทศไทย'.length); //count consonant and vowel

// LAB 3.3
// fucntion ucFirst(str) {
// //Check Empty String 
// // ! >> check empty string, null, Nan
// if(!str||!str.trim()) return str;

// return str[0].toUpperCase() + str.slice(1);


// }

// // LAB 3.4
// function checkSpam(str){
//     if (!str) return str;
//     return str.toLowerCase().includes('xxx') || str.toLowerCase().includes('sex') || str.toLowerCase().includes('porn');
    
// }

// console.log(checkSpam('XXXssssss'));

// LAB 3.5

function truncate (str, length){
    if(!str) return str;
    if(str.length<length){
        return str;
    }
    else{
        return str.slice(0,length-1) +'...';      
    }
}

console.log(truncate("What I'd like to tell on this topic is:", 20)); // What I'd like to te…
console.log(truncate("Hi everyone!", 20)); // Hi everyone!
