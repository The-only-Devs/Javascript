class user {
    constructor(name) {
        this.name = name
    }

    getName() {
        console.log(this) //user {name: 'Saikumar'}
        console.log(this.name)  //Saikumar
    }
}

const user1 = new user("Saikumar")
user1.getName()

console.log("***************")
const person = {
    firstName: "Saikumar",
    getName() {
        const firstName = "Saikumar Gatla!"
        console.log(this.firstName) //Saikumar
    }
}
person.getName()

console.log("***************")
var length = 40

function callback(){
    console.log(this.length) // 40
}

const obj = {
    length: 20,
    method(callback) {
        callback()
    },
}

obj.method(callback)

console.log("***************")
var length = 40

function callback(){
    console.log(this.length) // 40
}

const myObj = {
    length: 20,
    method() {
        console.log(arguments) //"arguments" is a keyword in Javascript, that refers to the array of arguments  passed to function. Here arguments is arguments = [callback, 2, 3]
        arguments[0]() // 3 //arguments[0] is callback function, and its parent object is arguments which is an array, which is also a object. Which has a property of .length. Hence output is 3.
    },
}

myObj.method(callback, 2, 3)

console.log("***************")
// Complete the code
// let calculator = {
//      ... your code ...
// }

// calculator.read() //Take two input numbers from user
// console.log(calculator.sum()) // Sum of two input numbers
// console.log(calculator.multiply()) // Multiplication of two input numbers

let calculator = {
    read() {
        this.a = parseInt(prompt("Enter first number", 0))
        this.b = parseInt(prompt("Enter second number", 0))
    },
    sum() {
        return this.a+this.b
    },
    multiply() {
        return this.a*this.b
    },
}
calculator.read() 
console.log(calculator.sum()) 
console.log(calculator.multiply()) 

console.log("***************")
// Implement the code:
// Such that with the help of claci we can infinitely call.add(), .multiply(), .subtract(), .divide() and get the result.

// const result = calci.add(10).multiply(5).subtract(30).divide(10).add(20)
// console.log(result)

const calci = {
    result: 0,
    add(num) {
        this.result += num
        return this 
    },
    subtract(num) {
        this.result -= num
        return this 
    },
    multiply(num) {
        this.result *= num
        return this 
    },
    divide(num) {
        this.result /= num
        return this 
    },
}
const result = calci.add(10).multiply(5).subtract(30).divide(10).add(20)
console.log(result)

console.log("***************")
// What is output? Fix the code.
function makeUser() {
    return {
        name: "John",
        ref: this,
    }
}

let User = makeUser()
console.log(User.ref.name) // this refers to window

// How to make "this" point to user object and print "John" as output for "console.log(User.ref.name)"
// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this
//         }
//     }
// }
// let User = makeUser()
// console.log(User.ref.name) // John // this refers to user object

console.log("***************")
// What is output? Fix the code.
const game = {
    player: "Saikumar",
    points: 0,
    getData() {
        console.log(this) //window
        console.log(this.name)
    },
}
setTimeout(game.getData, 1000) // setTimeout is using game.getData as a callback rather than a method. This means it goes in callback queue and not longer has access to game object. Hence this refers to window object.

// How to make "this" point to game object and print "Saikumar" as output for "console.log(this.name)"
// const game = {
//     player: "Saikumar",
//     points: 0,
//     getData() {
//         console.log(this) //window
//         console.log(this.name)
//     },
// }
// setTimeout(function () {
//     game.getData
// }, 1000) // Here a closure is formed and this refers to game object.