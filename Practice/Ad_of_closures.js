// With the help of closures we can access local variables outside the local scope
// .ie We can Create a private variable
function counter() {
    var count = 0
    return function incrementCounter(){
        count++
        console.log(count)
    }
}
// console.log(count)//We cannot access count here as it is encapsulated inside counter()

var counter1 = counter()
counter1()
counter1()

var counter2 = counter()//Here a new closure is created, with all new/fresh reference to lexical scope 
counter2()
counter2()
counter2()


// If we want to make our code scalable,
//  in the scene like if we want to add more functions to manipulate with count variable
// Then we can use a consturctor for that
console.log("**************")
function Manipulate(){
    var count = 0
    this.incrementCounter = function(){
        count++
        console.log(count)
    }
    
    this.decrementCounter = function(){
        count--
        console.log(count)
    }
}

var mani = new Manipulate()
mani.incrementCounter()
mani.decrementCounter()


console.log("**************")
function outer(){
    var a=10, z=50 //Here as "z" variable is not used later, then it is deleted by garbage collector
    return function(){
        console.log(a)
    }
}
var proofGarbage = outer()
proofGarbage()

// Module Pattern
// Make the function run only once
// once polyfill
// Implement caching/memoize polyfill

// ****************
// Closures vs Scope
// Closure:
// closure defination or intro
// Types of Scope for Closure: local scope, outer scope, global scope

// Scope:
// intro
// Types of Scope: local scope, global scope