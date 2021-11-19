let mapFirst = new Map();
mapFirst.set("1", "string 1");
mapFirst.set(1, "number 1");
mapFirst.set(true, "doğrudur");
mapFirst.set(1, "numnumnum");

// console.log(mapFirst);
// console.log(mapFirst.size);
// console.log(mapFirst.get(1));

// let wrongMap = new Map();

// wrongMap["bla"] = "blaaaa";
// wrongMap["blazzz"] = "blaaaazzzzz";
// console.log(wrongMap);

// console.log(wrongMap.has("bla"));

// let mapFunction = new Map();

// mapFunction.set("add", function (x, y) {
//   return x + y;
// });

// console.log(mapFunction.get("add")(4, 5));

// let John = { firstName: "John" };
// let Mike = { firstName: "Mike" };
// mapFirst.set(John, 78);
// console.log(mapFirst.get(John));

// console.log(mapFirst.entries());

// for (const [key, value] of mapFirst.entries()) {
//   console.log("key is: ", key);
//   console.log("value is: ", value);
// }

// let recipeMap = new Map([
//   ["cucumber", 500],
//   ["tomatoes", 350],
//   ["onion", 50],
// ]);

// for (let vegatables of recipeMap.keys()) {
//   console.log(vegatables);
// }

// recipeMap.forEach((value, key) => {
//   console.log(key);
// });

const myset = new Set();
myset.add("1");
myset.add("4");
myset.add("5");
myset.add(4);
myset.add({ a: 1, b: 2 });
myset.add({ a: 1, b: 2 });
console.log(myset.size);
console.log(myset);
console.log(myset.has(4));

let arr1 = [1, 2, 3, 2, 5, 8, 8, 5, 7, 6, 2];
const set1 = new Set(arr1);
console.log([...set1].sort());

console.log(set1.entries());
