// Rest and Spread are Used with Arrays and Objects

// In ES5
// function addNum(a, b, c){
//     console.log(arguments)
//     console.log(a+b+c)
// }
// addNum(1, 2, 3, 66, 12, 46, 13, 20)

// In ES6
function addNum(a, b, c, ...others){
    console.log(others) // Combines(Receives) rest of arguments in the form of array
    console.log(a+b+c)
}
addNum(1, 2, 3, 66, 12, 46, 13, 20)

const greet = ["hello", "to", "everyone"]
function getNames(greet1,greet2,greet3) {
    console.log(greet1,greet2,greet3)
}
getNames(greet[0], greet[1], greet[2])
getNames(...greet)

// *****************
let user = {
    name : "Sai",
    id : "001",
    city : ["Mumbai", "Pune"]
}
// const {name} = user
// const{name, id} = user

const{city,...rest} = user
console.log(city) //=>['Mumbai', 'Pune']
console.log(rest) //=>{name: 'Sai', id: '001'}

const{...all} = user
console.log(all) //{name: 'Sai', id: '001', city: Array(2)}

const newUser1 = {
    ...all
}
console.log(newUser1) 

//How to override any value after spreading
let newUser2 = {
    ...all,
    name : "Saikumar Gatla"
}
console.log(newUser2) 
