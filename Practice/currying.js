// Curring
// It is a technique of using a curried function
// A curried function is a function that takes one argument at a time and return a new function expecting the next argument
// If there is a function f(a, b, c), then its curried function will be like f(a)(b)(c)

console.log("1****************")
// sum(a, b, c) to sum(a)(b)(c)

// Without Currying
// function sum(a, b, c) {
    //     console.log(a+b+c)
// }
// sum(1, 2, 3)

// With Currying
function sum(a) {
    return function(b) {
        return function (c) {
            return (a + b + c)
        } 
    }
}

// Currying using arrow functions
// const sum = (a) => {
//     return (b) => {
//         return (c) => {
//             return (a + b + c)
//         }
//     }
// }
// How can we write this in a single line
// const sum = (a) => (b) => (c) => (a + b + c)
console.log(sum(1)(2)(3))


console.log("2****************")
// evaluate("sum")(a)(b)
// evaluate("difference")(a)(b)
// evaluate("multiply")(a)(b)
// evaluate("divide")(a)(b)

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if(operation === "sum") return (a+b)
            else if(operation === "difference") return (a-b)
        else if(operation === "multiply") return (a*b)
    else if (operation === "divide") return (a/b)
else return "Invalid operation"
}
}
}
evaluate("sum")(a)(b)


console.log("3****************")
// Infinite currying
// add(1)(2)(3)(4)(5)(6)(7)(8)(9)(10).....()
function add(a) {
    return function (b) {
        if (b) return add(a+b)
        else return a
}
}
console.log(add(1)())
console.log(add(1)(2)())
console.log(add(1)(2)(3)())


console.log("4****************")
// Curring  vs Partial Application
// Currying:            Node.of nesting function = No.of arguments
// Partial Application: Node. of nesting function != No. of arguments

// This is a partial Application
// What partial Application does?
// Partial Application returns another functions with small arrity
function intro(name) {
    return function (firstName, lastName) {
        return `${name}: ${firstName} ${lastName}`
    }
}
const detail = intro("Name")
console.log(detail("Saikumar", "Gatla"))
console.log(detail("John", "Deo"))


console.log("5****************")
// Real World usecase of Currying
// Manipulating DOM
// To avoid passing same variable again and again
// To make functions pure and make code less prone to error
// To create a HOF
// #1
function changeText(id) {
    return function (content) {
        document.getElementById(`#${id}`).textContent = content
    }
}
const changeHeaderText = changeText("heading")
changeHeaderText("Welcome User") //We can use this function and add it on the eventListener

// #2
userObj = {
    name: "Saikumar",
    age: 20,
}
function getUserObj(obj) {
    const getUserInfo = function (info) {
        return obj[info]
    }
    return getUserInfo
}
const gotUserObj = getUserObj(userObj)
console.log(gotUserObj("name"))


console.log("6****************")
// Implement a function curry()
// which will convert function lets say this -> f(a, b, c)
// to
// f(a)(b)(c)
// Example:
// const nonCurriedFunction = (a, b, c, d) => a + b + c + d
// const curriedFunction = curry()
// curriedFunction(a)(b)(c)(d)

// func.length -> No. of arguments passed in function
// args.length -> length of array

function curry(func) {
    return function recursiveFunction(...args){
        console.log(`func.length:${func.length} || args.length:${args.length}`)
        if (args.length >= func.length) {
            return func(...args)
        }
        else {
            return function (...next) {
                return recursiveFunction(...args, ...next)
            }
        }
    }
}

const uncurriedFunction = (a, b, c, d) => a + b + c + d

const curriedFunction = curry(uncurriedFunction)

console.log(curriedFunction(1)(2)(3)(4))


console.log("7****************")
// Infinite currying
// // Q1: sum(a)(b)(c)...(n)()
function add(a) {
    return function (b) {
        if (b) return  add(a+b)
        else return a
}
}

// // In Es6, format
// const add = (a) => {
    //     const innerAdd = (b) => {
        //         if (b) return add(a + b)
//         else return a
//     }
//     return innerAdd
// }

// const add = (a) => (b) => (b) ? add(a+b) : a
console.log(add(1)())
console.log(add(1)(2)())
console.log(add(1)(2)(3)()) 

// You might have question that how to implement Infinte Currying like this
// //Q2 sum(a)(b)(c)...(n)
function x() {
    console.log("abc1")
    return "abc2"
}
console.log(x)
//It is same as console.log(x.toString()).Behind the scenes it uses .toString() to stringify the function
// But we can change to .toString() method with another function we want to change its bydefault definition
x.toString = function() {
    return "1234"
}
console.log(x)
console.log(x())
console.log(x.toString())
// But if we try to return a number it works in Chrome,
// but it may give an error in other Javascript environment(So the solution is that we need to convert it into a string)
x.toString = function() {
    return 1000
}
console.log(x)
console.log(x())
console.log(x.toString())


function sum(a) {
    const temp = function (b) {
        if (b) {
            return sum(a+b)
        }
        else {
            return a
        }
    }
    temp.toString = () => a
    return temp
}
console.log(sum(1)(2)(3)(4)(5).toString())


// Q3: sum(a, b, c, ....)(a, b, c, ....)(a, b, c, ....).....()
function plus(...args) {
    let ans = args.reduce((accum, cur) => accum += cur, 0)
    return function (...next) {
        if (next.length === 0) {
            return ans
        }
        else {
            let newAns = next.reduce((accum, cur) => accum += cur, 0)
            return plus(ans + newAns)
        }
    }
}
console.log(plus(1, 2, 3)(1, 2, 3)(1, 2, 3)())

// Q4: sum(a, b, c, ....)(a, b, c, ....)(a, b, c, ....).....(a, b, c, ....)
function addy(...args) {
    let ans = args.reduce((accum, cur) => accum += cur, 0)
    const temp =  function (...next) {
        if (next.length === 0) {
            return ans
        }
        else {
            let newAns = next.reduce((accum, cur) => accum += cur, 0)
            return addy(ans + newAns)
        }
    }
    temp.toString = function () {
        return ans
    }
    return temp
}
console.log(addy(1, 2, 3)(1, 2, 3)(1, 2, 3)(1, 2, 3, 4, 5).toString())





