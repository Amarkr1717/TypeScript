//1. We can explicitly declare parameter types and return types.
function add(a, b) {
    return a + b;
}
var result = add(5, 6);
//console.log(result);
//2. function type as variable
var multiply;
multiply = function (a, b) { return a * b; };
//3.optional parameter
function greet(name, age) {
    return age ? "Hello ! ".concat(name, " , age: ").concat(age) : "Hello ! ".concat(name);
}
console.log(greet("Amar", 20));
