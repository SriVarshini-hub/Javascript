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
// // to print each element of an array:
// const fruits = ["apple", "bannana", "cherry", "orange"];
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

//to sum all elements of an array:
const numebrs = [1, 2, 3, 4, 5];
let total = 0;
numebrs.forEach((number) => {
  total += number;
});
console.log(total);
