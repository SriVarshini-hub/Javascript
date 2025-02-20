// let first_name = "Sriii";
// let last_name = "Varshini";

// //concatenation:
// let c = first_name + " " + last_name;
// console.log("concatenation: " + c);

// c = first_name.concat(last_name);
// console.log("concat: " + c);

// //append:
// c = "Sri";
// c += "Varshini";
// console.log("append: " + c);

// //escaping:
// c = "she can't run";
// console.log("escaping: " + c);

// //length:
// c = first_name.length;
// console.log("length: " + c);

// //case change:
// c = first_name.toUpperCase();
// console.log("UpperCase: " + c);

// c = first_name.toLowerCase();
// console.log("LowerCase: " + c);

// //indexOf:
// c = first_name.indexOf("i");
// console.log("indexOf: " + c);

// c = last_name.lastIndexOf("i");
// console.log("lastIndexOf: " + c);

// //charAt:
// c = first_name.charAt(1);
// console.log("charAt: 1 " + c);

// c = first_name.charCodeAt(1);
// console.log("charCodeAt: 1 " + c);

// //substring:
// let text = "12346679680569";
// c = text.substring(0, 6);
// console.log("substring:"+c);

// c = text.substring(5);
// console.log("substring:"+c);

// //slice:
// let text = "12346679680569";
// c = text.slice(0, 4);
// console.log("slice:" + c);

// //to print last 3 values: //negative indexing:
// c = text.slice(-5);
// console.log("slice:" + c);

// //split:
// let a = "Freshers learning javascript";
// c = a.split(" ");
// console.log("split :" + c);
// console.table(c);

// //replace:
// a = "I am from Tanjore";
// console.log("Before replace:" + a);
// c = a.replace("I am from Tanjore", "I am currently living in Chennai");
// console.log("After replace:" + c);

// //includes: to check particular data is present or not use pannikalam:
// const pets = ["cat", "rat", "owl"];
// console.log(pets.includes("owl"));
// console.log(pets.includes("bat"));

// //trim --- used for remvove unwanted space:
// a = "Sri Varshini ";
// console.log("before trim:" + a.length);

// a = a.trim();
// console.log("After trim:" + a.length);

// //paadstart PadEnd:
// a = "5";
// a = a.padStart(4, 0);
// console.log(a);

// a = "5";
// a = a.padEnd(4, 0);
// console.log(a);

// a = "5";
// a = a.padStart(4, "$");
// console.log(a);

//long literal strings:
let longstring =
  "Ice cream is a frozen dessert typically made from milk or cream" +
  "that has been flavoured with a sweetener" +
  "Food colouring is sometimes added in addition to stabilizers.";
console.log(longstring);
//method 2
longstring =
  "Ice cream is a frozen dessert typically made from milk or cream\
  that has been flavoured with a sweetener\
  Food colouring is sometimes added in addition to stabilizers.";
console.log(longstring);
