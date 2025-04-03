//1. Reduce() in javascript:
// Array.reduce(function (accumulator, currentValue, currentIndex, array) {},
// initialValue);

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(sum);
// 2. Flattening an array:
let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let flattenedArray = nestedArray.reduce((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);
console.log(flattenedArray);
