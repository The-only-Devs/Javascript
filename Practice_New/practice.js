//__proto__,prototype, prototypal chaining, constructor function, factory function

// Understanding __proto__ and prototype and prototypal chaining in JavaScript
let arr = ["a", "b"]

function func() {
    console.log("Hello")
}

/*
arr
arr.__proto__
arr.prototype // undefined // Because arrays .prototype is not for instance of Array
Array.prototype
arr.__proto__ === Array.prototype

arr.__proto__.__proto__
Object.prototype
arr.__proto__.__proto__ === Object.prototype

But, 
arr.__proto__.__proto__.__proto__ // null
*/

/*
func
func.__proto__
Function.prototype
func.__proto__ === Function.prototype

func.__proto__.__proto__
Object.prototype
func.__proto__.__proto__ === Object.prototype
*/

// Similarly for strings

/*
obj.__proto__ === Object.prototype
*/
let obj1 = {
    name: "Sai",
    place: "Hyderabad",
    getInfo() {
        console.log(`name: ${this.name}, place: ${this.place}`)
    }
}

let obj2 = {
    name: "Saikumar",
}

//Never do this
console.log(obj2.__proto__) // Object.prototype
obj2.__proto__ = obj1 // Now obj2.__proto__ is obj1 not Object.prototype
//Modern syntax
// Object.setPrototypeOf(obj2, obj1) // same as obj2.__proto__ = obj1


// Now if we do 
console.log(obj2.place) // Even though obj2 doesn't have place property, it will get it from obj1
console.log(obj2.getInfo()) // name: Saikumar, place: Hyderabad // It acces getInfo() from obj1, and this.name from obj1 and go on level up on hierachy to find this.place

// But if we want getInfo() to be accessible to all the object instances created we we can doObject.prototype
Object.prototype.getInfo = function() {
    console.log(`name: ${this.name}, place: ${this.place}`)
}
obj2.getInfo()
// If we comment line(obj2.__proto__ = obj1 ) and (console.log(obj2.getInfo()).
// Then to we can access getInfo() from obj2 because it is available in Object.prototype


// Create a constructor function user and add increment score method using .prototype
// Constructor function
function game(name, score) {
    this.name = name
    this.score = score
}

game.prototype.incrementScore = function() {
    this.score++
    console.log(`Your score is ${this.score}`)
}

// let player1 = game("Sai", 10) // This will not work because we are not using new keyword
let player1 = new game("Sai", 10)

// What happens if we don't use new keyword?
// New instance of object will not be created

// What happens when we use new keyword?
// Here's what happens behind the scenes when the new keyword is used:

// (1) A new object is created

// (2) The newly created instance is liked with the prototype property of the constructor function.
//   This means that now the newly created object has access to all the methods and properties that the constructor function has access to.

// (3) The constructor is called with the specified arguments and this of constructor is bound to the newly created object.
// If there is no explicit return from the constructor function, Javascript assumes the newly created object instance as the intended return value.

// (4) If the constructor function doesn't return a non-primitive value(object, array, function etc.)., then the newly created object instance is returned.
console.log(player1.__proto__ === game.prototype) // true
player1.incrementScore() // Your score is 11

//Q2:
// Add your own method .truelength() to all strings which will give true length og strings
// truelength is the length of string without spaces
// let str = "Sai          "
// str.trueLength() // 3

String.prototype.trueLength = function () {
    //console.log(this) // here this is the string calling the function
    console.log(`The true length is ${this.trim().length}`)
}
let str = "Sai          "
str.trueLength()
"Saikumar   ".trueLength() 

// Factory Function: In Javascript, factory functions return a new object just like factory produces a new product.
function FruitNinga(name, size, color) {
    return {
        fruit_name: name,
        fruit_size: size,
        fruit_color: color,
        getData() {
            console.log(`Name: ${this.fruit_name}, Size: ${this.fruit_size}, Color: ${this.fruit_color}`)
        }
    }
}
let fruits = []
for (let i = 0; i < 1000; i++){
    fruits.push(FruitNinga("Apple", Math.random()*100, "Red"))
}
console.log(fruits)