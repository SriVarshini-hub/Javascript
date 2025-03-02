const number = [1, 2, 3, 4, 5];
// number.forEach((value) => {
//   console.log(value);
// });

// number.forEach((value, index) => {
//   console.log("index:" + index + " " + "value=" + value);
// });

// const users = [
//   { fullname: "Sri Varshini", age: 21, city: "tanjore", salary: "5.5lpa" },
//   { fullname: "Kaushik", age: 21, city: "Trichy", salary: "5.5lpa" },
//   { fullname: "Roshini", age: 22, city: "chennai", salary: "5.5lpa" },
//   { fullname: "Jishnu", age: 21, city: "chennai", salary: "5.5lpa" },
// ];

// users.forEach((value) => {
//   console.log(value.fullname);
// });

// //Examples:
// //1. to print each element of an array:
// const fruits = ["apple", "bannana", "cherry", "orange"];
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// //2. to sum all elements of an array:
// const numbers = [1, 2, 3, 4, 5];
// let total = 0;
// numbers.forEach((number) => {
//   total += number;
// });
// console.log(total);

// //3. to create a new array from existing one:
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = [];
// numebrs.forEach((number) => {
//   doubledNumbers.push(number * 2);
// });
// console.log(doubledNumbers);

// // 4. to find the max element of an array:
// const numbers = [1, 2, 3, 4, 5];
// let max = numbers[0];
// numbers.forEach((number) => {
//   if (number > max) {
//     max = number;
//   }
// });
// console.log(max);

// //5. to calculate the average of an array:
// const numbers = [1, 2, 3, 4, 5];
// total = 0;
// numbers.forEach((number) => {
//   total += number;
// });
// console.log(total / number.length);

//6. to filter an array using for each:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});
console.log(evenNumbers);

//7. update elementv of an array:
