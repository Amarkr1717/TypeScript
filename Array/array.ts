//An array is a user defined data type and a homogeneous collection of 
//similar data types of element that have contigous memory location.

//Syntax
//let array_name[:datatype] = [val1 ,val2, val3, ...]

let fruits : string[] = ["Apple", "Orange", "Banana"];
console.log(fruits);

//Multi type array
let values:(string|number) [] = ["a", 1 ,"b" ,2];
console.log(values);

//Multi -Dimensional array
let myArray : number[][] = [[1,2,3], [4,5,6]];
console.log(myArray);

//Array object
let arr:string[] = new Array('Akash','Rahul','shiv');
for(let i=0;i<arr.length;i++){
 console.log(arr[i]);
}

//spread operator in typescript
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let copyArray = [...arr1];
console.log(copyArray);

let newArray = [...arr1 ,7,8];
console.log(newArray);

let mergedArray = [...arr1 , ...arr2];
console.log(mergedArray);


