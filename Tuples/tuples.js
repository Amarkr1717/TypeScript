//A tuple is a fixed length array with predefined types for each position
var person;
person = ["TypeScript", 20, true];
console.log(person);
//person = [20, "Ts", true] --error(wrong order)
//person = ["Ts",20]  --error(missing element)
//Rest element in tuples
var rgb;
//rgb = [255];
rgb = [255, 128, 64];
console.log(rgb);
//Destructuring Tuples
var point = [10, 10];
var x = point[0], y = point[1];
console.log(x, y);
