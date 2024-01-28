console.log(this)

console.log("*************************")
function getAge1(){
    let age1 = 20
    console.log(this)
    console.log(this.age1)
}
getAge1()

console.log("*************************")
const getAge2 = function(){
    let age2 = 20
    console.log(this)
    console.log(this.age2)
}
getAge2()

console.log("*************************")
const getAge3 = () => {
    let age3 = 20
    console.log(this)
    console.log(this.age3)
}
getAge3()

//this refers to the object that is currently calling the function
//for regular functions => (this is Dynamic)this refers to object which is calling the function.
//                            If no object is calling the function, then this refers to parent object of the function definition.
//for arrow functions => (this is lexical)this refers to the lexical this of arrow function's parent function.
console.log("*************************")
var age = 30;

function displayAge(){
    console.log(this)
    console.log(this.age)
}
displayAge() //this refers to window object

var person = {
    age: 25,
    displayAge: displayAge
}
person.displayAge() //this refers to person object

var person = {
    age: 25,
    displayAge: displayAge,
    nestedPerson: {
        age: 40,
        displayAge: displayAge
    }
}
person.nestedPerson.displayAge() //this refers to nestedPerson object
        

console.log("*************************")

var person = {
    age: 50,
    greet1: function(){
        console.log(this)
        console.log(this.age)
        function greet2(){
            console.log(this)
            console.log(this.age)
        }
        greet2() //this refers to window object
    }
}
person.greet1() //this refers to person object
    

var user = {
    age: 500,
    greet1: function(){
        console.log(this)
        console.log(this.age)
        const greet2 = () => {
            console.log(this)
            console.log(this.age)
        }
        greet2() //this refers to user object
    }
}
user.greet1() //this refers to user object

// How can we use object context(this) in nested normal function
const myobj = {
    test: function(){
        let self = this
        setTimeout(function(){
            console.log(self)
        },1000)
    }
}
myobj.test() //this is stored in variable and used

"use strict"
function strict(){
    console.log(this)
}
strict() //when we use this after "use strict", then this refers to undefined