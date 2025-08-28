//1. We can explicitly declare parameter types and return types.

function add(a:number, b:number): number {
    return a+b;
}

let result :number = add(5,6);
//console.log(result);

//2. function type as variable
let multiply: (x:number, y:number) => number;

multiply = (a,b) => a*b;

//3.optional parameter

function greet(name : string, age?: number) : string {
    return age ? `Hello ! ${name} , age: ${age}` : `Hello ! ${name}`;

}
console.log(greet("Amar" , 20));

//4.Dafault parameter
function power(base : number , exponent : number = 2) : number{
    return base**exponent;
}

console.log(power(5));//25
console.log(power(5,3)); // 125

//Rest Parameter
function sum(...numbers:number[]): number {
    return numbers.reduce((acc,val) => acc+val, 0);
}

console.log(sum(1,2,3));//6
console.log(sum(1,2,3,4,5));//15

//Functions return type:
//1.Explicit return type
//2.Void return type

//3.Never return type-used when a function never return(throws an error or infinite loop)
function throwError(message:string):never {
    throw new Error(message);
}

//Function overloading
//same function name, different parameter/return type signatures
//Allows different ways of calling a function

function getLength(x: string) : number;
function getLength(x: any[]):number;
function getLength(x: any) :number{
    return x.length;
}

console.log(getLength("Hello")); //5
console.log(getLength([1,2,3,4])); //4

//Typed Function

type MathOperation = (a: number, b:number) => number;

const addd : MathOperation = (x ,y) =>x+y;
const sub : MathOperation = (x,y) => x-y;

console.log(addd(2,3));
console.log(sub(4,3));

//Higher order function
//-function that take other function as argument or return function

//Asynchronous function
//-function with promise return type

async function fetchData(url: string): promise<string> {
    const response = await fetch(url);
    return response.text();
}











