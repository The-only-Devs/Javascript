// A JavaScript function is a block of code designed to perform a particular task.
// When JavaScript reaches a return statement, the function will stop executing.

// Normal function(this is Dynamic)
function multiply(a, b){
    return a * b;
}
let x = multiply(3,4);
console.log(x);

// Functional Expression(this is Dynamic)
let hi = function(){
    console.log("hi");
}
hi();

// Arrow function
//Arrow functions(ES6) allow us to write shorter function syntax (this is lexical)
const addTwo = (num1, num2) => {
    console.log(num1 + num2)
}
addTwo(3, 4)

// Implicit return => Used in React
//WE NEED TO USE return KEYWORD, ONLY IF WE USE {}

// const add = (num1, num2) => num1+num2

// const add = (num1, num2) => (num1+num2)

// If we want to return obj ect, 
// wrap {} inside () like ({})
const add = (num1, num2) => ({username : "Saikumar"})
console.log(add(3,4))

//Other common uses
const myArr = [1,2,3]
// myArr.forEach(() => ())

// *********************Output Based Questions ************
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

function loginMessage(username){
    //Here undefined is considered as false and is same as (username === undefined)
    if(!username){ 
        console.log("Please enter a username")
        return
    } //This condition is added if no value is passed in function

    console.log(`${username} just logged in`)
}

loginMessage()
loginMessage("Saikumar")

function anotherLoginMessage(username = "Bydefault"){
    // if(!username){ //(username === undefined)
    //     console.log("Please enter a username")
    //     return
    // } //This condition is added if no value is passed in function

    console.log(`${username} just logged in`)
}

anotherLoginMessage()
anotherLoginMessage("Saikumar")




