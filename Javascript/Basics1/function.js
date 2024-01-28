// A JavaScript function is a block of code designed to perform a particular task.
// When JavaScript reaches a return statement, the function will stop executing.
// Js function can be used as a variable and can be assigned to a variable

// NOTE:
//In case of arrow functions
// If we want to use curly brackets{}{function logic} or open a scope{},
// we have to use return keyword
// If we want to avoid curly brackets{}{function logic} or open a scope{},
// we don't have to use return keyword

function multiply(a, b){
    return a * b;
}
let x = multiply(3,4);
console.log(x);

let hi = function(){
    console.log("hi");
}
hi();

// Arrow function
//Arrow functions(ES6) allow us to write shorter function syntax

//If the function has only one statement, you can remove the brackets and the return keyword

let hello = () => console.log("Hello World!");
hello();

let divide = (a,b) => console.log("Division is " + a/b);
divide(10,5);

let text = "";
let val = 10;
text = (val) => "Hello World" + val;
console.log(text);  //This will work with .innerHTML

//In fact, if you have only one parameter, you can skip the parentheses as well:
text = val => "Hello World" + val;
console.log(text);  //This will work with .innerHTML

const add = (a, b) => {
    const result = a + b;
    return result;
};
console.log(add(2, 3));

/*
*/
console.log("*************")
function printTheValue(a, b, c){
    let result = (a + b + c);
    console.log(result);
    console.log(typeof result); 
}
printTheValue(10, 20, 30);
printTheValue(10, 20);  //o/p --> NaN

console.log("*************")
//Function with Default Parameters
function printTheValue2(a=0, b=0, c=0){
    let result = (a + b + c);
    console.log(result);
    console.log(typeof result); 
}
printTheValue2(10, 20, 30);
printTheValue2(10, 20);
printTheValue2();

console.log("*************")
//Function with Default Parameters and same golbal variables
//considers default parameters when function call values are not provided
let a = 1;
let b = 2;
let c = 3;
function printTheValue3(a=0, b=0, c=0){
    let result = (a + b + c);
    console.log(result);
    console.log(typeof result); 
}
printTheValue3(10, 20, 30);
printTheValue3(10, 20);
printTheValue3();

console.log("*************")
//Function without Default Parameters and same golbal variables
//Considers global variables when default parameters and function call values are not provided 
let p = 1;
let q = 2;
let r = 3;
function printTheValue4(){
    let result = (p + q + r);
    console.log(result);
    console.log(typeof result); 
}
printTheValue4(10, 20, 30);
printTheValue4(10, 20);
printTheValue4();

