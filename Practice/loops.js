// loops: Used to run same code again and again

// for_in loop: loops through the key/properties of an object
// for_of loop: loops through the values of an iterable object
// for loop: Used when condition and number of iterations are known.
// while loop: Used when number of iterations is unknown , but break condition is known.
// do while loop: Used when number of iteration is unknown , but break condition is known & we want to run loop atleast once.

// (Doesn't modify original)   (Use index to modify original)
//             for..of         for..in
// Array          1               1
// String         1               1
// Object         0               1  
// Map            1               0

// for...of loop --> iterate over value
let arr = [1, 2, 3]
for(let item of arr){ 
  item*=10;  
}
console.log(arr); //[1, 2, 3] => Doesn't modify the original array

console.log("**********************");
const greeting = "Hello World";
for(const greet of greeting){
  console.log(`Each character is ${greet}`);
}

console.log("**********************");
//Map
const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FR',"France");
console.log(map);
//{'IN' => 'India', 'USA' => 'United States of America', 'FR' => 'France'}

// can we loop through map and how to loop through map?
for(const key of map){
  console.log(key);
}
// ['IN', 'India']
// ['USA', 'United States of America']
// ['FR', 'France']

for(const [key, value] of map){
  console.log(key, ':-', value);
}
// IN :- India
// USA :- United States of America
// FR :- France

console.log("**********************");
// const obj = {
//   name : "Saikumar",
//   age : 20
// }
// We can't use for_of loop to iterate over objects 
// for(let ele of obj){
//   console.log(obj)
// }

console.log("**********************");
// for...in loop --> iterate over keys
e = [1, 2, 3, 4, 5];
for(let index in e){
  console.log(`${e[index]} is present at ${index}`);
  e[index]*=10;
  
}
console.log(e); //[10, 20, 30, 40, 50]

console.log("**********************");
const name = "Saikumar Gatla";
for(const i in name){
  console.log(`Each character is ${i}`);
}

console.log("**********************");
const obj = {
  name : "Saikumar",
  age : 20
}
for(let key in obj){
  console.log(`${key} : ${obj[key]}`)
}

// maps cannot be iterated using for..in loop

//for loops
let word = ["one", "two", "three", "four", "five", "six", "seven", "eight"]
let num=""
for(let i=0; i<word.length; i++){
    num += word[i] + " "
}
console.log(num)
//console.log(i);  //Error i is not defined

// for(expresion1, expresion2, expresion3){
//     //code
// }
// We can omit the expresion1,expresion2,expresion3(expresion1,expresion2,expresion3 are optional)
// Also we can extend expresion1,expresion2,expresion3 by CompressionStream(,)

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
    console.log(it);
    it++;
}while(it < n)

