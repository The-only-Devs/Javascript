// for...of loop --> iterate over value
for(var item of d){ 
    console.log(item);
    item*=10;  
}
console.log(d);
// Inside the loop, item *= 10; is used to multiply 
// the value of item by 10. However, this operation only affects 
// the local item variable within the loop's scope and does not modify 
// the original array d.

//What will be the o/p of below loop
for(var item of d){ 
    console.log(item);
    item*=10;  
    console.log(item);
}
console.log(d);

for(var item of d){ 
    item*=10;  
    console.log(item);
}
console.log(d);

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

// can we loop through map and how to loop through map?
for(const key of map){
    console.log(key);
}

for(const [key, value] of map){
    console.log(key, ':-', value);
}

// can we loop through map and how to loop through objects?
const myObj = {
    game1 : "bubbleShoot",
    game2 : "Mario"
}

// Cannot use for..of loop to itterate through objects
// for(const key of myObj){ //Error will occur objects are not iterable
//     console.log(key);
// }

for(const key in myObj){
    console.log(`${key} is ${myObj[key]}`);
}

console.log("**********************");
// for...in loop --> iterate over keys
e = [1, 2, 3, 4, 5];

for(let index in e){
    console.log(`${e[index]} is present at ${index}`);
    e[index]*=10;
    
}
console.log(e);

for(let index in e){
    console.log(`${e[index]} is present at ${index}`);
    e[index]*=10;
    console.log(`${e[index]} is present at ${index}`);
}
console.log(e);

const grting = "Hello World";
for(const greet in grting){
    console.log(`Each character is ${greet}`);
}

// maps cannot be iterated using for..in loop

//             for..of         for..in
// String         1               1
// Array          1               1
// Object         0(can use       1
//         Object.values(arr) and 
//         store it in array)                 
// Map            1               0

console.log("**********************");
// forEach loop 
// Calls a function once for each array element.
// .forEach() ONLY USED WITH ARRAY.
// like HOF(.map(), filter(), reduce()) forEach() loop do not return anything.
// If we want to return something we use HOF(.map(), filter(), reduce())
//Syntax 
// arr.forEach((value, index, array) => {
//     //function logic
// })
const d = [1, 2, 3, 4, 5];
d.forEach( (element) => {
    console.log(element*element);
})
console.log(d);

function printMe(item){
    console.log(item);
}
d.forEach(printMe); //You van also pass a function as parameter inside .forEach() loop
//d.forEach(printMe()); //Don't call a function inside .forEach() loop.It is a wrong syntax

d.forEach( (value, index, array) => {
    console.log(value, index, array);
})

const myCoding = [
    {
        languages : "Javascript",
        filename : "js"
    },
    {
        languages : "Javascript",
        filename : "js"
    },
    {
        languages : "Javascript",
        filename : "js"
    }
]
myCoding.forEach((item) => console.log(item.languages));

