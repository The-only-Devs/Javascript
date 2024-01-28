// Arrays are Object with their key as 0, 1, 2,....., n-1(where n is size of array)
// Js arrays are Dynamic.
// Js arrays can store multiple elements of different data types.
// JavaScript array-copy operations create shallow copies(contains reference in heap).
//Arrays are mutable and can be changed

// Using square brackets
const arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(arr[0])

// Using Array constructor
const myArr = new Array("one", "two", "three", true,
{name : "one"},
function hello(){console.log("hello");});

console.log(myArr);
myArr[3] = false;   //Arrays are mutable and can be changed
console.log(myArr);

// // Using Array literal
// const newArr = Array("Web dev", "Blockchain dev");
// console.log(newArr);

/*
.length
.push(), .pop(), unshift(), .shift() 
 */
console.log("************************");
// Array Method  .push(); .pop(), .shift(), unshift()
//.sort(), .reverse(), Array.from(), Array.from()
//.slice(), .splice()
//.includes(), indexOf()
console.log(arr.length);
console.log(typeof arr);

console.log("************************");
arr.push(5);
console.log(arr);   //Modifies the original array and returns the new array length
console.log(arr.length);

console.log("************************");
const a = arr.pop();    //Updates the original array and returns the popped value
console.log(a);
console.log(arr);

console.log("************************");
arr.shift(); 
console.log(arr);
console.log(arr.length);

console.log("************************");
arr.unshift(1); 
console.log(arr);
console.log(arr.length);

console.log("********start****************");
console.log(arr.toString());
console.log(typeof arr);
console.log(arr);

console.log("************************");
console.log(arr.join("--"));
console.log(typeof(arr.join("--")));    // .join(" ") converts array into string
console.log(typeof arr);
console.log(arr);

console.log("************************");
console.log(arr[2])
const b = delete arr[2];    // delete is an operator
console.log(b);
console.log(arr);
console.log(arr[2]);
console.log(typeof arr[2]);
console.log(arr.length);

console.log("************************");
const c = [1, 2, 3];
const d = [1, 2, 3];
const e = [1, 2, 3];

console.log("************************");
const f = c.concat(c, d, e, [10, 20, 30]);    //Returns a new array doesn't change the existing array
console.log(c);
console.log(c.length);
console.log(f);
console.log(f.length);

console.log("************************");
//.sort(); method is used to sort arrays alphabetically not numerically
const g = [33, 534, 76, 32, 10 ,11 , 111];
const h = g.sort();    //modifies the original array
console.log(g);
console.log(h);

console.log("SORTING");
// You can pass function name as a parameter in .sort() method to numbers numerically
let compare_ascending = (a, b)=>{
    return a - b;
}
let compare_descending = (a, b)=>{
    return b - a;
}
g.sort(compare_ascending);  //modifies the original array
console.log(g);
g.sort(compare_descending); //modifies the original array
console.log(g);

console.log("************************");
const i = g.reverse();  //modifies the original array
console.log(g);
console.log(i);

console.log("***********end*************");
let num_array = [1, 2, 3, 4, 5];
console.log(num_array.includes(3));
console.log(num_array.includes(10));
console.log(num_array.indexOf(3));
console.log(num_array.indexOf(10));

console.log("************************");
//slice and splice
let new_array = [1, 2, 3, 4, 5];
const my_new_array1 = new_array.slice(1, 3); //=>[)
console.log(my_new_array1);
console.log(new_array);

const my_new_array2 = new_array.slice(3);
console.log(my_new_array2);
console.log(new_array);
//slice
// Doesn't modifies the array


//splice
// const ar = new_array.splice(2, 1, 23, 24);
// splice returns the deleted items and modifies the original array, above 2-->position to add
                                                                        //    1--> Node. of eleents to remove
                                                                        //    23, 24--> Elements to be added
const my_new_array3 = new_array.splice(1, 3);
console.log(my_new_array3);
console.log(new_array);



console.log("************************");
// Predict the output of the code below
const arr1 = [1, 2, 3];
const arr2 = ["one", "two"];

arr1.push(arr2);
console.log(arr1);  //o/p --> [1, 2, 3, ['one', 'two']]

const arr3 = arr1.concat(arr2); //o/p --> [1, 2, 3, ['one', 'two'], 'one', 'two']
console.log(arr3);

console.log("************************");
//... --> spread operator
const all_arr = [...arr1, ...arr2, ...arr3];
console.log(all_arr);

console.log("************************");
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array1 = another_array.flat(1);  //.flat(depth at which you want to flat)
const real_another_array2 = another_array.flat(Infinity);
console.log(real_another_array1);
console.log(real_another_array2);

console.log("************************");
//Used while data scraping
console.log(Array.isArray("Saikumar"));
console.log(Array.from("Saikumar"));  //Used while datascraping if we want to convert incomingdata(in the form of objects,string)into array
console.log(Array.from({name: "Saikuar"})) //Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
