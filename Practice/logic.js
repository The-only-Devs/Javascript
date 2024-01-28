// Chapter1: Datatypes
"use strict"; //Use all Js code as newer version // Official site => ts39.es
// alert(); Runs in browser, not in node

// Primitive => (Number, BigInt, String, Boolean, Undefined, Null, Symbol)

// Number => 10, 10.562, 0xfff, 2e5, 2e-5, Infinity, -Infinity(integer range around 2^53)

// String 
let a = "abc";
let b = 'def';
let c = `xyz ${a} ${b}`;//String interpolation

// Undefined
//Means that variable is declared, but not assigned any value

// Null => Server has not sent response
//Indicates that variable has no value(its currently empty), we may add some value in future
// typeof null is object

// Symbol => React Component Uniqueness
let symbol1 = Symbol("key");
let symbol2 = Symbol("key");
console.log(symbol1 === symbol2); // false

// BigInt => Stock Market, Cryptography
// Number.MAX_SAFE_INTEGER (2^53 - 1) or smaller than Number.MIN_SAFE_INTEGER (-2^53 + 1)
let y = BigInt("9999999999999999");
let z = 123456789012345678901234567890n;

// Non-Primitive => Objects, Arrays, Functions
const person = {
    age : 20,
    eyeColor : "blue",
    'Rohan Das' : "friend"
};
console.log(person); 
console.log(typeof(person)) //object

let arr = [1, 2, "a", true, null]
console.log(arr); 
console.log(typeof(arr)) //object

let print = function(){
    console.log("Print it")
}
function go(){
    console.log("Let's go")
}
console.log(typeof print, typeof go) // function function

// *****************************
// Classified on 
// How data is stored and accessed from memory

// Primitive(Stack)    Non-Primitive(Heap)
let name = "Sai"
let newname = name
newname = "Saikumar Gatla"

console.log(name, newname) //Sai     Saikumar Gatla


let user1 = {
    name : "user1",
    email : "user1@gmail.com"
}

let user2 = user1
user2.email = "user2@gmail.com"

console.log(user1.email, user2.email) //user2@gmail.com     user2@gmail.com

// ***********Conversion of Datatype*****************
// (Eg. In case of forms, API)
let age = "33"
console.log(age, typeof age) // 33 string
// Conversion of datatype can be a nightmare
// always use typeof to verify the type of variable
// Then convert variable in datatype you want

// (Bcz when you write code, you know the datatype)
// (But when frontend and backend are other entities then while their interation you don't know surely what exactly is the datatype)
let ageInNum = Number(age)
console.log(ageInNum, typeof ageInNum) // 33 number

// ******
let score = "250abc"
console.log(score, typeof score) // 250abc string
// Some times you also have to do verification of the input
let scoreInNum = Number(score)
console.log(scoreInNum, typeof scoreInNum) // NaN number

// *********
let temp = null
console.log(temp, typeof temp) // null object
let tempInNum = Number(temp)
console.log(tempInNum, typeof tempInNum) // 0 number

let box = undefined
console.log(box, typeof box) // undefined undefined
let boxInNum = Number(box)
console.log(boxInNum, typeof boxInNum) // Nan number

// Number()
// true => 1
// false => 0
// String => NaN
// null => 0
// sundefined => undefined

// let y = BigInt("9999999999999999");
// let z = 123456789012345678901234567890n;

// String()

// Boolean()
// 1 => true
// 0 => false
// String => true
// "  " => false

// Symbol("")

// ***********Operation of Datatype*****************
console.log(2**3) //2^3

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log(1 + "2" + "2") //122
console.log(1 + 2 + "2") //32

// What is output based questions good to test the knowledge of operator presedence?
// But in production level, such types of coding stye is not accepted. 
// And your pr will not be merged.

// *******Conparison of Datatype***********
console.log("2" > 1)

// >, <a, <=, >= convert null to 0, while equaltiy == treats null as empty
console.log(null > 0)
console.log(null < 0)
console.log(null >= 0)

// undefined gives false with all conparisons