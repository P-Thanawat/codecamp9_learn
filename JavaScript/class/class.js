// LAB 5.1

// class Calculator {
//     //class property

//     //class method
//     constructor(number) {
//         this.value = number;
//     }

//     sum(num) {
//         // let num = prompt('Enter your number');
//         this.value += num;
//     }

//     subtract(num){
//         // let num = prompt('Enter your number');
//         this.value -= num;
//     }

//     multiply(num){
//         this.value *= num;
//     }

//     divide(num){
//         this.value /= num;
//     }

//     show(){
//         alert(this.value);
//     }
// }


// let calculator = new Calculator(10);

// console.log(calculator)

// calculator.sum(5);
// console.log(calculator);
// calculator.subtract(2);
// console.log(calculator);
// calculator.multiply(2);

// calculator.show();
// Calculator.show();


class MyClass {
  // class properties
  prop1 = "value1";
  prop2 = "value2";
  // ...
  // class methods

  method1() { }
  method2() { }

}

const x = new MyClass()
console.log(x)


class MyClass1 {
  // class properties
  constructor(value1, value2) {
    this.prop1 = value1;
    this.prop2 = value2;
  }
  // ...
  // class methods

  method1() { }
  method2() { }

}

const y = new MyClass1("hit", "git")
console.log(y);