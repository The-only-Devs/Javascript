console.log(this)

console.log("1***********")
const obj1 = {
    proof: this,//As we can access window here, this==window
    age: 20,
    getAge: function(){
        console.log(this)
        console.log(this.age)
    }
}
console.log(obj1.proof)
obj1.getAge() //this refers to obj1 object

console.log("2***********")
const obj2 = {
    age: 30,
    getAge: () => {
        console.log(this)
        console.log(this.age)
    }
}
obj2.getAge() //this refers to window object

console.log("3***********")
const obj3 = {
    age: 40, 
    normalFunc: function(){
        console.log(this)
        console.log(this.age)
    },
    arrowFunc:  () => {
        console.log(this)
        console.log(this.age)
    }
}
obj3.normalFunc() //this refers to obj3 object
obj3.arrowFunc() //this refers to window object


console.log("4***********")
const user = {
    age: 55,
    greet: function(){
        function normalhello(){
            console.log(this)
            console.log(this.age)
        }
        normalhello() //this refers to window object
    }
}
user.greet() //this refers to user object

console.log("5***********")
const person = {
    age: 1,
    greet: function(){
        arrowhello = () => {
            console.log(this)
            console.log(this.age)
        }
        arrowhello() //this refers to user object
    }
}
person.greet() //this refers to user object

