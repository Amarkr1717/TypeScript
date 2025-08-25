//An array is a user defined data type and a homogeneous collection of 
//similar data types of element that have contigous memory location.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Syntax
//let array_name[:datatype] = [val1 ,val2, val3, ...]
var fruits = ["Apple", "Orange", "Banana"];
console.log(fruits);
//Multi type array
var values = ["a", 1, "b", 2];
console.log(values);
//Multi -Dimensional array
var myArray = [[1, 2, 3], [4, 5, 6]];
console.log(myArray);
//Array object
var arr = new Array('Akash', 'Rahul', 'shiv');
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//spread operator in typescript
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var copyArray = __spreadArray([], arr1, true);
console.log(copyArray);
var newArray = __spreadArray(__spreadArray([], arr1, true), [7, 8], false);
console.log(newArray);
var mergedArray = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log(mergedArray);
