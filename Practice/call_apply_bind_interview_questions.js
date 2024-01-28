const person = { name: "Saikumar" }

function sayHi(profession, age){
    return `${this.name} is a ${profession} of age ${age}`
}

console.log(sayHi.call(person, "Software Engineer", 20)) //Saikumar is a Software Engineer of age 20
console.log(sayHi.bind(person, 20)) // reference to "sayHi" function

console.log("*************************")
var status = "one"

setTimeout(() => {
    const status = "two"
    
    const data = {
        status: "three",
        getStatus() {
            return this.status
        },
    }
    
    console.log(data.getStatus()) 
    console.log(data.getStatus.call(this)) //this points to parent object of function definition. Here parent object of setTimeout is global object. Hence this points to global object.  
}, 0)

console.log("After setTImeout Question*************************")
const obj = {
    unique:"lsfha",
    f() {
        console.log(this) // As null is binded with f(), this points to global object
    }
}

let user = {
    g: obj.f.bind(null) // If we pass null then this will always point to global object
}

user.g()

console.log("After setTImeout Question*************************")
// What is output? Fix the code.
const animals = [
    { name: "Waffles", type: "dog", age: 12 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "dog", age: 11 },
]

function printAnimals(i) {
    this.print = function () {
        console.log(`#${i} ${this.name} ${this.type} ${this.age}`) //#undefined undefined undefined undefined// As this is pointing to global object, eveything will be undefined
    }
    this.print()
}
printAnimals() 

// How can we modify the above code to print print the data in animals array?
for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i) 
}


console.log("After setTImeout Question*************************")
// Use apply to enhance built-in functions

// Find min/max number in an array
const numbers = [5, 6, 2, 3, 7];
console.log(Math.max.apply(null, numbers))
console.log(Math.min.apply(null, numbers))


// How can we append an array in another array?
// Without using.concat() and loop ?
const arr1 = [0, 1, 2]
const arr2 = ['a', 'b', 'c']

arr1.push.apply(arr1, arr2) //Notice that here typed arr1 twice smartly, to provide a context of arr1 to arr1

console.log(arr1) // [0, 1, 2, "a", "b", "c"]

console.log("After setTImeout Question*************************")
// Bind Chaining. Bind chaining will not work as once object is binded with a function we cannot change it 
function printMe() {
    console.log(this.name)
}

const printMeBinded = printMe.bind({name: "Saikumar"}).bind({ name: "Saikumar Gatla" })
printMeBinded() 

console.log("After setTImeout Question*************************")
// What is output? Fix the code.
function checkPasswaord(success, fail) {
    let password = "Saikumar"
    if (password === "Saikumar") success()
    else fail()
}

let customer = {
    name: "Saikumar Gatla",
    loginSuccessful() {
        console.log(`${this.name} logged in`)
    },
    loginFailed() {
        console.log(`${this.name} failed to log in`)
    },
}

checkPasswaord(customer.loginSuccessful, customer.loginFailed.bind) //logged in
// Now, when you call checkPassword with the loginSuccessful and loginFailed methods of the customer object:
// checkPassword(customer.loginSuccessful, customer.loginFailed);
// The loginSuccessful and loginFailed functions lose their connection to the customer object when they are passed as arguments to checkPassword. 
// As a result, when success() or fail() is invoked inside checkPassword, they are not called as methods of the customer object,
// and the value of this inside them will not refer to customer.
// In JavaScript, when a function is called as a standalone function (not as a method of an object),
// this inside the function refers to the global objectin non - strict mode.In strict mode, this would be undefined.

// How can you fix the code to print "Saikumar Gatla logged in"?
checkPasswaord(customer.loginSuccessful.bind(customer), customer.loginFailed.bind(customer)) 



console.log("After setTImeout Question last*************************")
function passwordChecker(ok, fail) {
    let password = prompt("Enter Password", "")
    if (password === "Saikumar") ok()
    else fail()
}

let user1 = {
    name: "Saikumar Gatla",
    login(result) {
        console.log(this.name + (result ? " logged in" : " failed to log in"))
    }
}
passwordChecker(user1.login(true), user1.login(false))
// this is directly called as we are calling the function and not passing the function reference to passwordChecker.
// And this will give error as we are passing nothing as an argument to password checker.



// How can you fix the code to print "Saikumar Gatla logged in".Such that it is not directly executed?
// #1
// passwordChecker( () => user1.login(true),  () => user1.login(false))
// Now we are passing a function reference as we have enclosed or wrapped user1.login(true) and user1.login(false) inside a arrow function


// #2
// Another way can be to use bind as .bind() returns a function reference
// passwordChecker(user1.login.bind(user1, true), user1.login.bind(user1, false))

// With arrow function
const age = 10

var info = {
    name: "Sai",
    age: 20,
    getAgeArrow: () => console.log(this.age),
    getAge() {
        console.log(this.age)
    },
}
var info2 = { age: 30 }
info.getAge.call(info2) // 30
info.getAgeArrow.call(info2) // undefined 
// as there is no "age" variable declared with var keyword. Although there is a variable "age" with const keyword but it is in Script scope 


// Ployfill for .call(), .apply(), .bind()
let car = {
    color: "red",
    company: "BMW",
}
function purchase(currency, price) {
    console.log(
        `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
    )
}
purchase.call(car, "USD", "10000")
purchase.apply(car, ["USD", "10000"])

// Polyfill for .call()
Function.prototype.myCall = function (context = {}, ...args) {
// Here this refers to purchase function, as this depends on how we call the function, add we are calling .call() using purchase

    // Checking if in func.call() is "func" is really a function or not.
    if (typeof this !== "function") {
        throw new Error(`${this} is not callable` )
    }

    context.fn = this
    context.fn(...args)
}

purchase.myCall(car, "USD", "10000")
// Here this refers to purchase function, as this depends on how we call the function, add we are calling .call() using purchase


// Polyfill for .apply()
Function.prototype.myApply = function (context = {}, argsArray) {
// Here this refers to purchase function, as this depends on how we call the function, add we are calling .call() using purchase

    // Checking if in func.apply() is "func" is really a function or not.
    if (typeof this !== "function") {
        throw new Error(`${this} is not callable` )
    }

    // Checking if in func.apply(context, [argsArray]) is "[argsArray]" is really a array or not.
    if (!Array.isArray(argsArray)) {
        throw new Error(`TypeError: CreateListFromArrayLike called on non-object`)
    }
    
    context.fn = this
    context.fn(...argsArray)
}

purchase.myApply(car, ["USD", "10000"])
// Here this refers to purchase function, as this depends on how we call the function, add we are calling .call() using purchase

// Polyfill for .bind()
// let bindedFunc1 = purchase.bind(car, "10000", "USD")
// bindedFunc1()
// let bindedFunc2 = purchase.bind(car)
// bindedFunc2("10000", "USD")

Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(`${this} is not callable`)
    }

    context.func = this
    return function (...argsNew) {
        context.func(...args, argsNew)
    }
}
let bindedFunc1 = purchase.myBind(car, "10000", "USD")
bindedFunc1()
let bindedFunc2 = purchase.myBind(car)
bindedFunc2("10000", "USD")