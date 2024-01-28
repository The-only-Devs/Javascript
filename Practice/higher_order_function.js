// Higher_order_function:
// A function which takes another function as argument & returns a function

// .map() 
//Create a New Array by applying some Transformation on the Original Array.
const arr = [1, 2, 3]
// triple = [3, 6, 9]
// binary = ['1', '10', '11']

const triple = arr.map((ele, ind, arr) => ele*3)
console.log(triple)

const binary = arr.map(function(ele, ind, arr){
    return ele.toString(2)
})
console.log(binary)


console.log("*************************")
// .fiter() 
//Create a New Array by Filtering Elements(return True of False) from Original Array.
// morethan2 = [3]
// odd = [1, 3]

const morethan2 = function(val){
    return val>2
}
const output = arr.filter(morethan2)
console.log(output)

const odd = arr.filter((ele, ind, arr) => (ele%2 !== 0) ) 
console.log(odd)


console.log("************************")
// .reduce() method
//Extract some values from Original array.
//If there is no initial value, it takes first element of array for accumulator. And the iteration will start from second element of array
// sum = 6
// max = 3

const sum = arr.reduce((acc, cur, ind, arr) => (acc = acc+cur), 0)
console.log(sum)

const max = arr.reduce((acc, cur, ind, arr) => acc = (cur>acc) ? cur : acc, 0)
console.log(max)

console.log("****************************")
// Polyfills

//polyfill for map
// arr.map((ele, ind, arr) => ())

const logic1 = function(ele, ind, arr){
    return ele+10
}

Array.prototype.Mymap = function(logic){
    const output = []
    for(let i=0; i<this.length; i++){
        output.push(logic(this[i], i, this))
    }
    return output    
}

const result1 = arr.Mymap(logic1)
console.log(result1)

console.log("****************************")
//polyfill for filter
// arr.filter((ele, ind, arr) => ())

const logic2 = function(ele, ind, arr){
    return ele>2
}

Array.prototype.Myfilter = function(logic){
    const output = []
    for(let i=0; i<this.length; i++){
        if(logic(this[i], i, this)){
            output.push(this[i])
        }
    }
    return output
}
const result2 = arr.Myfilter(logic2)
console.log(result2)

console.log("****************************")
// polyfill for reduce
// arr.reduce((acc, cur, ind, arr) => (), init_val)

const logic3 = function(acc, cur, ind, arr){
    console.log(`cur: ${cur} || acc: ${acc} || ind: ${ind}`)
    return acc+cur
}

Array.prototype.Myreduce = function(logic, init_val){
    let acc = init_val
    for(let i=0; i<this.length; i++){
        acc = (acc===undefined) ? this[0] : logic(acc, this[i], i, this)
    }
    return acc
}

const result3 = arr.Myreduce(logic3, 0)
console.log(result3)

//.map() vs .forEach()
// .map() => Return array
//           We can chain(arr.map().filter().reduce()) methods as it returns modifies array

// .forEach() => Don't return array
//               We can't chain, as it doesn't return any array

// .sort()
// swaps 2 elements if +ve value is returned, doesn't swaps if -ve value is returned
arr.sort((a, b) => {
    if(a > b){ //Ascending
        return 1
    }
    else{
        return -1
    }
})

arr.sort((a, b) => (a-b) ) //Ascending

//Practice
const data = [
    {fname: "Saikumar", lname: "Gatla", marks: 85},
    {fname: "Ryz", lname: "Random", marks: 30},
    {fname: "Jackie", lname: "Chain", marks: 85},
    {fname: "John", lname: "Doe", marks: 50}
]

// Q1: ["SAIKUMAR GATLA", "RYZ RANDOM", "JACKIE CHAIN", "JOHN DOE"]
// Q2: {30:1, 50:1, 80:2} =>{marks:no.of.std.}
// Q3: Total of marks of students whose marks are more than 50
// Q4: Implement Q3 with .reduce()
// Q5: Add 20 grace marks to students who scored less than 60, and return sum of marks of students more than 80

const q1 = data.map((ele) => {
    return `${ele.fname.toUpperCase()} ${ele.lname.toUpperCase()}`
})
console.log(q1)

const q2 = data.reduce((acc, cur) => {
    if(acc[cur.marks]){
        acc[cur.marks] = ++acc[cur.marks]
    }
    else{
        acc[cur.marks] = 1
    }
    return acc
},{})
console.log(q2)

const q3 = data.filter((ele) => ele.marks>50)
.map((ele) => ele.fname)
console.log(q3)

const q4 = data.reduce((acc, cur, ind, arr) => {
    if(cur.marks > 50){
    acc.push(cur.fname)
    }
    return acc
}, [])
console.log(q4)

const q5 = data
.map((ele) => {
    if(ele.marks < 60){
        ele.marks = ele.marks + 20
    }
    return ele
})
.filter((ele) => ele.marks>80)
.reduce((acc, cur) => acc = acc+cur.marks, 0)
console.log(q5)