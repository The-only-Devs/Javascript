// Without Functional Programming
const num = [1, 2, 3]

const calculateArea = function(num){
  const output = [];
  for(let i=0; i<num.length; i++){
    output.push(Math.PI * num[i] * num[i])
  }
  return output
}
console.log(calculateArea(num)) 

const calculateDiameter = function(num){
  const output = [];
  for(let i=0; i<num.length; i++){
    output.push(2 * num[i])
  }
  return output
}
console.log(calculateDiameter(num)) 

const calculateCircumference = function(num){
  const output = [];
  for(let i=0; i<num.length; i++){
    output.push(2 * Math.PI * num[i])
  }
  return output
}
console.log(calculateCircumference(num)) 

//With Functional Programming
const rad = [1, 2, 3]

const area = function(num){
  return Math.PI * num * num
}
const diameter = function(num){
  return 2 * num 
}
const circumference = function(num){
  return 2 * Math.PI * num 
}

const calculate = function(logic, rad){
  const output = [];
  for(let i=0; i<rad.length; i++){
    output.push(logic(rad[i]))
  }
  return output
}
//calculate() is similar to .map()
console.log(rad.map(area))

console.log(calculate(area, rad))
console.log(calculate(diameter, rad))
console.log(calculate(circumference, rad))

console.log("*******************")
//How to make syntax also similar
Array.prototype.calculate = function(logic){
  const output = [];
  for(let i=0; i<this.length; i++){
    output.push(logic(this[i]))
  }
  return output
}
console.log(rad.calculate(area))

// forEach loop 
// Calls a function once for each array element.
// .forEach() ONLY USED WITH ARRAY.
// like HOF(.map(), filter(), reduce()) forEach() loop do not return anything.
// If we want to return something we use HOF(.map(), filter(), reduce())

const val = [1, 2, 3, 4, 5]
console.log(val)
num.forEach((ele, ind, arr) => {ele = ele*10; console.log(ele)}) //10 20 30 40 50 
console.log(val) //[1, 2, 3, 4, 5]

num.forEach((ele, ind, arr) => arr[ind] = ele*10)
console.log(val) //[10, 20, 30, 40, 50]

// arr.forEach(() => {})
const arr = [1, 2, 3]

Array.prototype.MyforEach = function(logic){
    for(let i=0; i<this.length; i++){
        logic(this[i], i, this)
    }
}

const twice = function(ele, ind, arr){
    ele = ele * 2
    console.log(ele)
} 
arr.MyforEach(twice)


