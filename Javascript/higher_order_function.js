// A higher-order function is a function that can take one or more functions as arguments 
// and/or return a function as its result. In simpler terms, it treats functions as values,
// allowing you to manipulate and compose them in various ways.
//.map(), .filter(), .reduce() are examples of HOF.

// forEach loop --> Calls a function once for each array element.
                  //.forEach() used with array.
                  //like HOF(.map(), filter(), reduce()) forEach() loop do not return anything.
                  //If we want to return something we use HOF(.map(), filter(), reduce())

// map: The map function is used to transform each element of an array by applying
//  a given function to it, and then returning a new array with the transformed elements. 
// It takes a function as an argument and returns a new array.
const a = [1, 2, 3, 4, 5];
const doubled = a.map(num => num * 2); // [2, 4, 6, 8, 10]
console.log(doubled);

// filter: The filter function is used to create a new array 
// containing only the elements that pass a certain condition defined by a given function.
const b = [1, 2, 3, 4, 5];
const evens = b.filter(num => num % 2 === 0); // [2, 4]
console.log(evens);

const books = [
    {
        title:"Book1", genre : "History", year : "2000"
    },
    {
        title:"Book2", genre : "Maths", year : "2001"
    },
    {
        title:"Book3", genre : "History", year : "2002"
    },
    {
        title:"Book4", genre : "History", year : "2010"
    },
    {
        title:"Book5", genre : "History", year : "2015"
    },    
]

const userbook = books.filter((bk) => {return bk.genre ==="History" && bk.year>=2005});
console.log(userbook);

// Chaining of HOF
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = myNum.map((num) => num*10)
                    .map((num) => num +1) //the resultant array from previous HOD is passed to nest HOD
                    .filter((num) => num >=40) 
console.log(newNum);
//Here [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myNum.map((num) => num*10) //--> [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//     .map((num) => num +1) //--> [11, 21, 31, 41, 51, 61, 71, 81, 91, 101];
//     .filter((num) => num >=40) //--> [41, 51, 61, 71, 81, 91, 101];


// // reduce: The reduce function is used to accumulate values in an array and produce a single result.
// // It takes a function and an initial value as arguments and iterates over the array, 
// // applying the function to each element and the accumulated result.
const c = [1, 2, 3, 4, 5];

const myTotal = c.reduce(function(accumulator, currentVal) {
    console.log(`accumulator: ${accumulator} and currentVal: ${currentVal}`);
    return accumulator + currentVal
},0);
console.log(myTotal);

const total = c.reduce((acc, curVal) => acc+curVal,0);
console.log(total);

const onlineCourses = [
    {
        itemName : "Web Dev",
        price : "1999"
    },
    {
        itemName : "Blockchain Dev",
        price : "2999"
    },
    {
        itemName : "App Dev",
        price : "3999"
    }
]

const billToPay = onlineCourses.reduce((totalBill, currentBill) => totalBill+currentBill.price, 0);
console.log(billToPay); //o/p 0199929993999 
//If you wanted billToPay to be convert datatype of price from string to number 

console.log("afhdjas");

// Function Composition: Higher-order functions can be used to compose 
// multiple functions together to create more complex behavior.
const compose = (...functions) => input => {
    return functions.reduceRight((acc, fn) => fn(acc), input);
  };
  
  const add = x => y => x + y;
  const multiply = x => y => x * y;
  
  const addAndMultiply = compose(multiply(3), add(2));
  const result = addAndMultiply(5); // (5 + 2) * 3 = 21
  console.log(result); // Output: 21
  
  console.log("afhdjas");

console.log("**********************");
//.map() --> Creates a new array 
//           by performing some operations on each array elements
//Syntax 
// let arr2 = arr.map((value, index, array) => {
//     //function logic
//     return statement;
// })
let arr = [1, 2, 3, 4, 5, 6, 7 ];
let one = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value +1;
})
console.log(arr);
console.log(one);


console.log("**********************");
//.filter() --> Creates a new array of elements by filtering them using a condition
//Syntax 
// let newArray = array.filter((value, index, array) => {
//     // Filtering logic, return true to keep the element, false to filter it out
//     return statement;
// });
    let arr2 = [1, 2, 3, 4, 5, 6, 7 ];
    let two = arr2.filter((a) => {
        return a<=5;
    })
    console.log(arr2);
    console.log(two);
    
console.log("**********************");
//.reduce() ---> reduce an array to a single value
//Syntax 
// let result = array.reduce((accumulator, value, index, array) => {
    //     // Accumulation logic, return the updated accumulator
    //     return statement;
    // }, initialValue);
    // accumulator: The accumulated result up to the current iteration.
    // value: The current value being processed in the array.
    // index: The index of the current value in the array.
    // array: The array on which reduce was called.
// initialValue: Optional. The initial value for the accumulator.
let arr3 = [1, 2, 3, 4, 5, 6, 7 ];
let three = arr3.reduce((a, b) => {
    return a+b;
})
console.log(arr3);
console.log(three);




console.log("**********************");
const myarr = [1, 2, 3, 4, 5];

//Cannot call functions defined through arrow functions before their definition
// but can be accessed using traditional function definition
// arr.find(myFunc);

// .find(): The .find() function is a higher-order function that searches through an array
//  and returns the first element that satisfies a given condition. 
//  It takes a predicate function as an argument and returns the first matching element, 
//  or undefined if no element matches the condition.
const myFunc = (value, index) => {
    if(value === 3){
        console.log("3 Exists");
    }
}

//If we want to call function defined by arrow function, we need to define it before
//If we want to call function defined by traditional function, we can define it before or after function call
arr.find(myFunc);

const num1 = [1, 2, 3, 4, 5];
const firstEven = num1.find(num => num % 2 === 0); // 2

console.log("*************");
// .every(): The .every() function checks if all elements of an array satisfy a given condition. 
// It returns true if all elements meet the condition, and false if any element fails the condition.
const num2 = [2, 4, 6, 8, 10];
const num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const allEven1 = num2.every(num => num % 2 === 0); // true
const allEven2 = num3.every(num => num % 2 === 0); // false
console.log(allEven1);
console.log(allEven2);

console.log("*************");
// .some(): The .some() function checks if at least one element of an array satisfies a given condition. 
// It returns true if at least one element meets the condition, and false if no element meets the condition.
const someEven1 = num2.some(num => num % 2 === 0); // true
const someEven2 = num3.some(num => num % 2 === 0); // true
console.log(someEven1);
console.log(someEven2);




