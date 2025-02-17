// Nullish coalescing operator (??)
const a = null ?? "no value";
console.log(a);

const b = null ?? 45;
console.log(b);

// ??=
const user = { name: "joes" };
console.log(user);
console.log(user.name);

user.city ??= "salem";
console.log(user.city);
console.log(user);
