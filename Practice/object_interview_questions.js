// Revise object with interview question
// Object is a collection of properties (key: value pair)
// If a properties value is a function it is called a method

console.log("1*********************")
// delete keyword is used to delete the property from an object
// const user = {
//     name: "Saikumar Gatla",
//     age: 20,
// } 
// delete user.age

// Q1: What is Output  
const val = (function (a) {
    delete a //Here variable 'a' will not be deleted, because delete keyword can delete only property of object
    return a
})(5);
console.log(val)

// Q2: How can we use variables as a key or value of an object
const property = "firstName"
const value = "Saikumar"
const user = {
    property: value,  //property: "Saikumar"
    [property]: value, //firstName: "Saikumar"
}
console.log(user)

// Q3: What will happen if there similar keys
// If there are 2 similar keys, 
// then the first key's value will be replaced with the value of the last key of similar key
const obj1 = {
    a: "one",
    b: "two",
    a: "three",
}
console.log(obj1) //{a: 'three', b: 'two'}

// Q4: What is the output(Referncing)
// #1:
// As we are providing the refernce/shallow copy not the copy/clone/deep copy of object, 
// changes made in any of the two Object(now , after) will affect both of them
let now = { greeting: "Hey" }
let after = now
now.greeting = "Hello"
console.log(after.greeting)

// #2:
console.log({a: 1} == {a: 1}) //This condition will always be false since Javascript compares objects by reference by, not by value
console.log({a: 2} === {a: 2})

// #3:
let person = { name: "John" }
const member = [person]
person = null

console.log(person) //null
console.log(member) // [{name: 'John'}]
// Why is the output of console.log(member) is not null.
// I am confused as objects have same reference.
// I was thinking the output of console.log(member) will be null.
// But why is it[{ name: 'John' }].Can you explain the reason?

// So, after person is set to null, the member array still holds a reference to the original object created { name: "John" }.
// Setting person to null doesn't affect the array member because the array contains a reference to the original object,
// In summary,
// (1) If we reinitialize object variable with a completely new object(ie.now changing its property),
// We get a completely new reference for object, and the previous reference is not ChannelMergerNode, previous reference remains unchanged
// (2) But if we just change the property of object,
//     there is a change in reference of object


// #4:
const num = { number: 10 }
const multiply = (x = {...num}) => {
    console.log(x.number *= 2)
}
multiply() //20 .Since we are not passing any arguments, default parameter of function definition will be considered. A clone is send not the reference
multiply() //20. Similarly
multiply(num) // 20 . As reference is passed to function, "number" property of object "num" is updated
multiply(num) // 40

// #5:
function changeAgeAndReference(person) {
    person.age = 25
    person = {
        name: "XYZ",
        age: 50,
    }

    return person
}

const personObj1 = {
    name: "ABC",
    age: 2555,
}

const personObj2 = changeAgeAndReference(personObj1)
console.log(personObj1) //{name: "ABC", age: 25}
console.log(personObj2) //{name: "XYZ", age: 50}
// (1) If we reinitialize object variable with a completely new object(ie.now changing its property),
// We get a completely new reference for object, and the previous reference is not ChannelMergerNode, previous reference remains unchanged
// (2) But if we just change the property of object,
//     there is a change in reference of object

// #6: What is shallow copy and Deep copy? What are the ways to create a deep copy? 
// shallow copy: pass by reference
// deep copy   : pass by value(Cloning an object)

const myObj = {
    name: "Sai",
    age: 20,
}

// Ways to create a deep copy
// const objClone = Object.assign({}, user)
// const objClone = JSON.parse(JSON.stringify(myObj))
let objClone = {...myObj}
objClone.name = "Saikumar Gatla" // This will not change myObj as objClone is a deep copy of myObj. Hence both of them have a different reference

console.log(myObj, objClone)


// Q5: What is Output
const a = {}
const b = {key: "b"}
const c = { key: "c" }

a[b] = 123
a[c] = 456

console.log(a[b]) // 456
console.log(a)

//Why is the output 456.
//The reason is that when we are using any object as a key, it is converted into a string(As shown below)
// And as the key is same it gets overwrited.(If not understood refer roadside coder's object video for explaination)
// a["[object Object]"] = 123
// a["[object Object]"] = 789


// Q6: What is Output(Spread in Object)
console.log([..."Hello"])

const city = {city: "Mumbai", direction: "West"}
const state = {state: "Maharashtra", ...city}
console.log(state)
    
// Q7:What is the Output(JSON.stringify)
const game = {
    userName: "Alpha",
    score: 20,
    highestScore: 88,
}
const data = JSON.stringify(game, ["score", "highestScore"]) //Only scrigify score and highestScore property of object game
console.log(data) //{"score":20,"highestScore":88}

// Q8: What is Output(this keyword)
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2
    },
    perimeter: () => 2 * Math.PI * this.radius
}
console.log(shape.diameter()) //28
console.log(shape.perimeter()) //NaN

// Q9: Destructuring
// #1
const devices = {
    first: "laptop",
    second: "smartPhone",
}
const { first } = devices
console.log(first)

// #2: Actually Interviewer provides such question to know if,
// we have knowledge that a rest parameter must be last in the parameters list
//This is the wrong way of using rest
// function getFruits(fruitList, ...args, fovouriteFruit) {
//     return [...fruitList, ...args, fovouriteFruit]
// }
// console.log(getFruits(["banana", "apple"], "pear", "orange"))

//So the correct way will be
function getFruits(fruitList, fovouriteFruit, ...args) {
    return [...fruitList, ...args, fovouriteFruit]
}
console.log(getFruits(["banana", "apple"], "pear", "orange"))


// How can we destructure if we have a variable with conflicting name
const room = {
    one: "hall",
    two: "studyRoom",
    three: "gym",
}
const one = "livingRoom"

const {one:general} = room
console.log(general)

// How to destructure a nested object
const place = {
    one: "garden",
    two: {
        up: "trace",
        down: "ground",
    },
}

const {two: {up}} = place
console.log(up)

// Q10: Create a function multiplyBy10(obj) that will
//     multiply all numeric property values by 10
const obj2 = {
    a: 5,
    b: 10,
    c: "NOT NUMBER",
}

function multiplyBy10(obj) {
    for (key in obj) {
        if (typeof (obj[key]) === "number") {
            obj[key] = obj[key] * 10
        }
    }
}
multiplyBy10(obj2)
console.log(obj2)

