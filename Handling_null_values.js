function welcome(name) {
  const result = name ? name : "no name";
  console.log("welcome" + result);
}

welcome();
welcome(null);
welcome("joes");
