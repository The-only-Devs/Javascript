// Loops are handy, if you want to run same block of code again and again, each time with a different value.

// for loop: Used when condition and number of iterations are known.
// for in loop: loops through the key/properties or key of an object
// for of loop: loops through the values of an iterable object
// while loop: Used when number of iterations is unknown , but break condition is known.
// do while loop: Used when number of iteration is unknown , but break condition is known & we want to run loop atleast once.

//for loops
let arr = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
let num="";

for(let i=0; i<arr.length; i++){
    num += arr[i] + " ";
}
console.log(num);
//console.log(i);  //Error i is not defined

let num2 = "";
for(var i=0; i<arr.length; i++){
    num2 += arr[i] + "<br>";
}
document.getElementById("demo").innerHTML = num2;
console.log(num2);
console.log(i); 

// for(expresion1, expresion2, expresion3){
//     //code
// }
// We can omit the expresion1,expresion2,expresion3(expresion1,expresion2,expresion3 are optional)
// Also we can extend expresion1,expresion2,expresion3 by CompressionStream(,)

//-----------------------------------------------------

//for in loops
// Do not use for in over an Array if the index order is important.

// The index order is implementation-dependent, and array values may not be accessed in the order you expect.

// To iterate over an array while maintaining the order, 
// you should use a traditional "for" loop, for of loop or other array iteration methods like ".forEach()," "map," "filter," or "reduce," 
// depending on the specific task you need to accomplish.

let obj = {
    "one" : 1,
    "two" : 2,
    "three" : 3,
}
for(let key in obj) {
    console.log(key + " in nuumber is " + obj[key]);
}

let myarr = [1, 2, 3];
for(let key in myarr){
    console.log(myarr[key] + " is present at index " + key);
}

//for of loop 

// Iterating over an Array
const array = [1, 2, 3, 4];

for (const num of array) {
  console.log(num); // Outputs each element of the array in order
}

// Iterating over a string:
for (const num of "Saikumar") {
    console.log(num); // Outputs each element of the array in order
}

// Iterating over a Map:
const myMap = new Map([
    ["name", "John"],
    ["age", 30],
    ["occupation", "Developer"],
]);
  
for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

//Iterating over a Set:
const mySet = new Set([10, 20, 30, 40]);

for (const num of mySet) {
  console.log(num); // Outputs each unique element of the Set in order
}

// One important thing to note is that "for...of" loops iterate over values, not indices. 
// If you need the index while using a "for...of" loop, you can use the entries() method for arrays 
// or other iterable objects to get both the index and the value:

const a = [10, 20, 30];

for (const [index, value] of a.entries()) {
  console.log(`Index: ${index}, Value: ${value}`);
}

//while loop
const n = 10;
let it = 0;
let sum = 0
while(it < n){
    sum += it+1;
    it++;
}
console.log(`Sum: ${sum}`);

do{
    console.log(i);
    it++;
}while(it < n)
