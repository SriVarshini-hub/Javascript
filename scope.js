// //block scope:
// if (true) {
//   let blockScopeVariable = "I am a variable with block scope";
//   console.log(blockScopeVariable);
// }
// console.log(blockScopeVariable); // this console will throw error because it will act under only the block -let isused

// if (true) {
//   var blockScopeVariable = "I am a variable with block scope";
//   console.log(blockScopeVariable);
// }
// console.log(blockScopeVariable);   //var should not be used in the blockscope level

//function level scope:
function myFunction() {
  functionScopeVariable = "I am a variable with function scope";
  console.log(functionScopeVariable);
  function add() {
    console.log(functionScopeVariable);
  }
  add();
}
myFunction();
