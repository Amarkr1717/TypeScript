//A tuple is a fixed length array with predefined types for each position

let person : [string, number, boolean];
person = ["TypeScript", 20 , true];
console.log(person);


//person = [20, "Ts", true] --error(wrong order)
//person = ["Ts",20]  --error(missing element)

//Rest element in tuples
let rgb : [number, ...number[]];
//rgb = [255];
rgb = [255 ,128, 64];
console.log(rgb);


//Destructuring Tuples
let point : [number, number] = [10,10];
const [x,y] = point;
console.log(x,y);

//Tuple mutability : Tuples are technically array in js, sp you can still use array
//methods but it break type safety sometimes. To prevent this , use readonly tuples.

let coordinates: readonly [number, number] = [10,20];
//coordinates[0] = 50; Error(cannot modify readonly tuples)