// Arrays are Object with their key as 0, 1, 2,....., n-1(where n is size of array)
// Js arrays are Dynamic.
// Js arrays can store multiple elements of different data types.
// JavaScript array-copy operations create shallow copies(contains reference in heap).
//Arrays are mutable and can be changed
{
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
}

// .length
// .push(), .pop(), .shift(), .unshift() , .sort(function()), .reverse()
// .slice( , ), .splice( , , , )
// rest and spread operator, .flat(Infinity)
// Array.isArray(), Array.from(), Array.of()
// .includes(), .indexOf(), .toString(), .join("--")

{
console.log("************************");
/*
.length
.push(), .pop(), .shift(), .unshift() 
*/
const arr = [1, 2, 3, 4, 5]
const b = delete arr[2];    // delete is an operator
console.log(b); //true
console.log(arr); //[1, 2, empty, 4, 5]
console.log(arr[2]); //undefined 
console.log(typeof arr[2]); //undefined 
console.log(arr.length); //5
}

{
console.log("************************");
let num_arr = [1, 2, 3, 4, 5];
console.log(num_arr.includes(3)); //true
console.log(num_arr.includes(10)); //false
console.log(num_arr.indexOf(3)); //2
console.log(num_arr.indexOf(10)); //-1

console.log("********start****************");
console.log(num_arr.toString()); //1,2,3,4,5
console.log(typeof num_arr);     //object
console.log(num_arr);            //[1, 2, 3, 4, 5]        

console.log("************************");
console.log(num_arr.join("--"));
console.log(typeof(num_arr.join("--")));    // .join(" ") converts array into string
console.log(typeof num_arr);
console.log(num_arr);

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

console.log("REVERSE");
const i = g.reverse();  //modifies the original array
console.log(g);
console.log(i);

}

{
console.log("************************");
//slice and splice
let a = [1, 2, 3, 4, 5]

let new_a1 = a.slice(1, 3) //=>[)
console.log(new_a1) //[2, 3]
console.log(a)      //[1, 2, 3, 4, 5]

let new_a2 = a.slice(2) //=>[
console.log(new_a2) //[3, 4, 5]
console.log(a)      //[1, 2, 3, 4, 5]
//slice
// Doesn't modifies the original array

//splice 
//Modifies the original array.
//By deleting elements and inserting elements
let new_a3 = a.splice(1,3) 
console.log(new_a3) //[2, 3, 4]
console.log(a)      //[1, 5]

let b = [1, 2, 3, 4, 5]
const new_a4 = b.splice(1, 3, 99, 365);
console.log(new_a4) //[2, 3, 4]
console.log(b)      //[1, 99, 365, 5]
//'1' index se '3' elements nikal do, aur '1' index se 99, 365 add karo
// splice returns the deleted items and modifies the original array, above 1-->index to add
                                                                        //    3--> No. of eleents to remove
                                                                        //    99, 365--> Elements to be added
}

{
console.log("************************");
// Predict the output of the code below
const a1 = [1, 2, 3];
const a2 = ["one", "two"];

a1.push(a2);
console.log(a1);  //o/p => [1, 2, 3, ['one', 'two']]

const a3 = a1.concat(a2, [10, 20, 30]); //o/p => [1, 2, 3, ['one', 'two'], 'one', 'two', 10, 20, 30]
console.log(a3);

console.log("************************");
//... --> spread operator
const all_arr = [...a1, ...a2, ...a3]; //Creates a single array from a1, a2, a3
console.log(all_arr);

console.log("************************");
const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const arr1 = arr.flat(1);  //.flat(depth at which you want to flat)
const arr2 = arr.flat(Infinity);
console.log(arr1);
console.log(arr2);

console.log("************************");
//Used while data scraping
console.log(Array.isArray("Saikumar"));
console.log(Array.from("Saikumar"));  //Used while datascraping if we want to convert incomingdata(in the form of objects,string)into array
console.log(Array.from({name: "Saikumar"})) //Interesting: Can't decide whether to make array from what key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //[100, 200, 300]
}

