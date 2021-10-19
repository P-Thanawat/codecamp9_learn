// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223

function reverseNumber(num) {
    let string = String(num);
    let result = '';

    for (let i = 1; i <= string.length; i++) {
        result += string[string.length - i];
    }
    return result;
}

// console.log(reverseNumber(32243));

function a(x, y) {
    let max = x > y ? x : y;
    let a = 0;
    let b = 0;
    let beforeA = [];
    let beforeB = [];
    for (let i = 1; i <= max; i++) {
        if (x % i === 0 && y % i === 0) {
            beforeA.push(i);
        }
    }
    a = beforeA[beforeA.length - 1];
    console.log(a);

    for (let i = max; i <= x * y; i += max) {
        if (i % x === 0 && i % y === 0) {
            beforeB.push(i);
        }
    }
    b = beforeB[0];
    console.log(b);
}

// a(65, 91);

const str = 'change my every first letter of this string to uppercase string';

function changeUpper(str) {
    let pos = 0;
    let newStr = '';
    newStr += str[0].toUpperCase();
    for (let cha of str) {
        if (pos === str.length - 1) break;
        if (cha === ' ') {
            newStr += str[pos + 1].toUpperCase();
        }
        else newStr += str[pos + 1];
        pos++;
    }
    return newStr;
}

console.log(changeUpper(str));
