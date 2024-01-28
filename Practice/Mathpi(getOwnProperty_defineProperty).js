// Math.PI is a constant.
// Can you change the value of PI ?
// If yes then why can we change ?
// If no then why can't we change ?

Math.PI = 5
console.log(Math.PI)

const innerDescription = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(innerDescription)
// {
//     value: 3.141592653589793,
    // writable: false,
    // enumerable: false,
    // configurable: false
// }

// writable: false:   It means that the value of the property cannot be changed.
// enumerable: false: It means that the property will not be iterated over in a for...in loop.
//                    If enumerable is false, the property will not show up while iterating over the object's properties.
// configurable: false: If configurable is set to false, you cannot use the delete operator to remove the property,
//                       and you cannot change its configurability, enumerability, or writability.

const user = {
    name: 'John',
    age: 30,
    isLogin: true,
    getStaus() {
        return `${this.name} is ${this.age} years old.`
    }
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'))
Object.defineProperty(user, 'name', { enumerable: false })// This will make name property of user object non-iterable.

for (let [key, val] of Object.entries(user)) {
    if (typeof val !== 'function') {
        console.log(`${key}: ${val}`)
    }
}
// o/p:
// age: 30
//  isLogin: true