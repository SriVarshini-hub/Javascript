// let numbers = [2, 3, 45, 16, 36, 88, 16];
// let evenNumbers = numbers.filter((number) => {
//   return number % 2 == 0;
// });
// console.log(evenNumbers);

// const users = [
//   { name: "sri", age: 21 },
//   { name: "moni", age: 19 },
//   { name: "kausi", age: 24 },
// ];
// const eligible = users.filter((user) => {
//   return user.age > 20;
// });
// console.log(eligible);

// let words = ["dogsandcats", "peacock", "corcodile", "elephant", "owl"];
// let wordswith3letters = words.filter((word) => word.length >= 3);
// console.log(wordswith3letters);

// let words = ["dogsandcats", "peacock", "corcodile", "elephant", "owl"];
// let wordStartwithE = words.filter((word) => word.startsWith("e"));
// console.log(wordStartwithE);

// //multiple conditions:
// const products = [
//   { name: "apple", category: "fruit", price: 120 },
//   { name: "carrot", category: "vegetable", price: 50 },
//   { name: "kiwi", category: "fruit", price: 80 },
//   { name: "lady'sfinger", category: "vegetable", price: 25 },
// ];
// const expensiveFruits = products.filter(
//   (product) => product.category === "fruit" && product.price > 100
// );
// console.log(expensiveFruits);

let books = [
  { title: "Daughter of the Forest", author: " Juliet Marillier", year: 2012 },
  {
    title: "The Romance of the Forest",
    author: " Ann Radcliffe",
    year: 2002,
  },
  {
    title: " The Boss of Terror",
    author: " Theodora Goss",
    year: 2018,
  },
  { title: "Into That Forest", author: " JLouis Nowra", year: 2019 },
];

const searchTerm = "Forest".toLowerCase();
const year = 2002;
const filteredBooks = books.filter((book) => {
  return book.title.toLowerCase().includes(searchTerm) || book.year === year;
});
console.log(filteredBooks);
