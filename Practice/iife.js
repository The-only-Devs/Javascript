// IIFE- Immediately Invoked Function Expression 
// Syntax: Function inside ()"Grouping Operator" and function call
//(function)();

// 2 or more IIFE should always be separated by a ';'(semicolon).Otherwise it gives error

//named IIFE
(function add(a, b){
    console.log(a+b)
})();

(function(){
    console.log("DB CONNECTED")
})();

( () => console.log("I am ES6"))();

const val = (() => 50)();
console.log(val);

// Uses of IIFE:
// prevents accessing variables within the IIFE
// Avoid polluting the global scope 
var data = 50;
(function() {
    var data = 10
    console.log(data)
})()
console.log(data) // Throws ReferenceError:

// Without IIFE
// function name(){
//     console.log("Name 1")
// }

// function name(){
//     console.log("Name 2")
// }

// name() // Here 2nd name function is overridding(polluting) 1st name function

// With IIFE
function name(){
    console.log("Name 1")
}

(function (){
    function name(){
        console.log("Name 2")
    }
    name()
})() //Here IIFE is not allowing 2nd name function to pollute 1st name function

name()

