// //break:
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i == 4) {
//     break;
//   }
// }

// //continue:
// for (let i = 1; i <= 10; i++) {
//   if (i == 4) {
//     continue;
//   }
//   console.log(i);
// }

//print only odd numbers by continue:
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
