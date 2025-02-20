let groups = [
  ["sri", "rosh", "sampath"],
  ["sru", "kausi", "sajai"],
  ["raaghul", "ram", "swe"],
];
for (let group of groups) {
  for (let member of group) {
    if (member.startsWith("s")) {
      console.log("name starts with s:", member);
      break;
    }
  }
}
