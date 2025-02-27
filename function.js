// // function with return statement:
// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, 10));

// // function with arbitrary arguments:
// function sum() {
//   let total = 0;
//   for (i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// console.log(sum(20, 20));

// // function with spread operator:
// function total(...args) {
//   let total = 0;
//   for (i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }
// console.log(total(20, 20));

// //function as expression:
// const add = function (a, b) {
//   return a + b;
// };
// console.log(add); //gives the output as defination of the function.
// console.log(add(10, 10));

// //*******ARROW Function***************
// // const functioName =(parameters) =>{function body};
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(50, 50));

// //ARROW Function with map() function:
// let numbers = [2, 3, 4, 5, 6];
// let doubletheNumber = numbers.map((number) => number * 2);
// console.log(doubletheNumber);

// //ARROW Function with filter() function:
// let words = ["apple", "bannana", "orange", "grapes"];
// let filteredWords = words.filter((word) => word.length > 5);
// console.log(filteredWords);

// //ARROW Function with reduce() function:
// let numbers = [2, 3, 4, 5, 6];
// let total = numbers.reduce((sum, number) => sum + number, 0);
// console.log(total);

// //using arrow function to create a closure:
// let createCounter = () => {
//   let count = 0;
//   return () => {
//     count++;
//     return count;
//   };
// };

// let counter = createCounter();
// console.log(counter);
// console.log(counter());
// console.log(counter());
// console.log(counter());

//Callback Function:
function myCallback() {
  console.log("i am a callback function");
}
function test(fun) {
  fun();
}
test(myCallback);

// //setTimeout(function, 1000):
// setTimeout(function () {
//   console.log("Hello world Joes");
// }, 3000);

// setInterval(function () {
//   console.log("Hello world Joes");
// }, 3000);

const numbers = [1, 2, 3];
numbers.forEach(function (number) {
  console.log(number);
});
