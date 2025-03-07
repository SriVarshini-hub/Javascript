// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sqrt = numbers.map((value) => {
//   return Math.sqrt(value).toFixed(2);
// });
// console.table(sqrt);

// const users = [
//   { fullname: "Sri Varshini", age: 21, city: "tanjore", salary: "5.5lpa" },
//   { fullname: "Kaushik", age: 21, city: "Trichy", salary: "5.5lpa" },
//   { fullname: "Roshini", age: 14, city: "chennai", salary: "5.5lpa" },
//   { fullname: "Jishnu", age: 21, city: "chennai", salary: "5.5lpa" },
//   { fullname: "Moni", age: 21, city: "tanjore", salary: "5.5lpa" },
// ];

// console.table(users);

// let eligible_status = users.map((user) => ({
//   name: user.name,
//   age: user.age,
//   city: user.city,
//   salary: user.salary,
//   status: user.age >= 18 ? "Eligilbe" : "Not Eligible",
// }));
// console.table(eligible_status);

// //1. simple transformation:
// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map((number) => number * 2);
// console.log(doubleNumbers);

// // 2.Modifying the array element:
// const words = ["hello", "javascript"];
// const capitalizedWords = words.map((word) => word.toUpperCase());
// console.log(capitalizedWords);

// //2. combining array:
// const fruits = ["apple", "banana"];
// const colors = ["red", "yellow"];

// const fruitColours = fruits.map((fruit, index) => fruit + "-" + colors[index]);
// console.log(fruitColours);

// //4. filtering an array:
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.map((num) => num % 2 === 0);
// console.log(evenNumbers);

// // 5. Extracting properties from an array of objects:
// const users = [
//   { name: "sri", age: 21 },
//   { name: "moni", age: 21 },
//   { name: "kausi", age: 21 },
// ];
// const names = users.map((user) => {
//   return user.name;
// });
// console.log(names);

// // 6. modifying an array of objects:
// const users = [
//   { name: "sri", age: 21 },
//   { name: "moni", age: 21 },
//   { name: "kausi", age: 21 },
// ];

// const updatedUsers = users.map((user) => {
//   return {
//     name: user.name,
//     age: user.age + 1,
//   };
// });
// console.log(updatedUsers);

const words = ["apple", "orange", "cherry", "plum"];
const wordStats = words.map(function (currentValue, index, array) {
  return {
    word: currentValue,
    length: currentValue.length,
    position: index,
    totalWords: array.length,
  };
});
console.log(wordStats);
