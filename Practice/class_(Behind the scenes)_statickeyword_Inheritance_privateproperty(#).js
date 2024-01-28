// class in Javascript(Behind the scenes), static keyword, Inheritance and private property(#)

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        console.log(`Encrypting password: ${this.password.toUpperCase()}pqr`)
    }
}

let user1 = new User("Saikumar", "sai@emal.com", "saikumar")
console.log(user1) //{username: 'Saikumar', email: 'sai@emal.com', password: 'saikumar'}

// Behind the scenes
// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }
// User.prototype.encryptPassword = function() {
//     console.log(`Encrypting password: ${this.password.toUpperCase()}pqr`)
// }
// let user1 = new User("Saikumar", "sai@emal.com", "saikumar")

// static keyword
// static keyword defines properties or methods that belongs to a class itself
// but not accessible for the object instances and childs created from the class.


// Inheritance
// private property are defined using # before property name
class Person{
    static userCount = 0

    constructor(username) {
        this.username = username
        Person.userCount++
    }
}

let person1 = new Person("One")
let person2 = new Person("Two")
let person3 = new Person("Three")

// userCount is a static property of Person class, so we can access it using Person class only not its instances.
console.log(Person.userCount) 
console.log(user1.userCount) 

let Electronics = class {
    #modal
    #price
    #name

    constructor(name, modal, price) {
        this.#name = name
        this.#modal = modal
        this.#price = price
    }

    #print() {
        console.log(`Name: ${this.#name}, Modal: ${this.#modal}, Price: ${this.#price}`)
    }
}

let mobile = new Electronics("Samsung", "Galaxy", 10000)
// mobile.#print() // This will give error because #print() is private method of Electronics class and cannot be used here

class Charger extends Electronics {
    #type
    #color
    constructor(name, modal, price, type) {
        super(name, modal, price)
        this.#type = type
    }

    set setColor(color) { // If you willnot pass argument in setter method it will give error
        this.#color = color
    }

    get getColor() {
        return this.#color
    }

    // get getName() {
    //     return this.#name // This will give error because #name is private property of Electronics class and cannot be used here
    // }
}

let charger = new Charger("Samsung", "Galaxy", 10000, "Type-C")
charger.setColor = "Black"

console.log(charger) 
// charger.#print() //This will give error because #print() is private method of Electronics class and cannot be used here
