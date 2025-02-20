// let i = 1; //while loop
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let table = 2;
// limit = 5;
// i = 1; //do while loop
// do {
//   console.log(table + "x" + i + "=" + table * i); //print statement
//   i++;
// } while (i <= limit); //condition

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let arr = []; //for loop using array
// for (let i = 0; i <= 100; i++) {
//   arr.push(i);
// }
// console.log(arr);
// console.log(arr[49]);

// let nums = []; //nested for loop or 2D array
// for (let i = 0; i < 3; i++) {
//   nums.push([]); //intial ah num=0 nu store agum then further ah loop run agum
//   for (let j = 0; j < 3; j++) {
//     nums[i].push(j);
//   }
// }
// console.log(nums);
// console.table(nums);
// let names = ["sri", "rosh", "kausi", "renu", "sampath"]; //for of loop

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// console.log("For of loop:");
// for (let name of names) {
//   console.log(name);
// }

// let user = {           //for in loop
//   name: "Sri",
//   age: 21,
//   city: "Tanjore",
//   contact: "9876543210",
// };
// for (let prop in user) {
//   console.log(prop + ":" + user[prop]);
// }

// looping over objects by converting to an array:
let user = {
  //for in loop
  name: "Sri",
  age: 21,
  city: "Tanjore",
  contact: "9876543210",
};

let arr_keys = Object.keys(user);
console.table(arr_keys);

let arr_values = Object.values(user);
console.table(arr_values);

for (let i = 0; i < arr_keys.length; i++) {
  console.log(arr_keys[i] + ":" + arr_values[i]);
}
