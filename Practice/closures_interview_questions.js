// Write a function that would allow you to do this

// let addSix = createBase(6)
// addSix(10) // 16 // add 6 to 10
// addSix(36) // 40 // add 6 to 36

function createBase(base) {
    return function (num) {
        console.log(base + num)
    }
}

let addSix = createBase(6)
addSix(10)
addSix(36)


// Advantages of Closures
// Time Optimization
// Before Closures
function find(index) {
    let a = []
    for (let i = 0; i < 1000000; i++){
        a[i] = i+1
    }
    console.log(a[index])
}
console.time("6")
find(6) // 7
console.timeEnd("6") //6: 21.83984375 ms
console.time("50")
find(50) // 51
console.timeEnd("50") //50: 17.907958984375 ms
// In this version, the array is recreated for every call, resulting in redundant work.


// After CLosures
function find() {
    let a = []
    for (let i = 0; i < 1000000; i++){
        a[i] = i+1
    }
    return function (index) {
        console.log(a[index])
    }
}
let closure = find()
console.time("6")
closure(6) //7
console.timeEnd("6") // 6: 0.438232421875 ms
console.time("50")
closure(50) //51
console.timeEnd("50") // 50: 0.197021484375 ms
// In this version, When you call closure(6) or closure(50), it accesses the precomputed array a without recreating it.

// Key Points:
// The array creation is done only once when the closure is generated, not every time the inner function is called.
// The closure "memorizes" the array a, avoiding the need to repeat the array creation on subsequent calls.


// Module Pattern
// A Module Pattern doesn't allow to to access private variable and functions,
// but allow us to indirectly access them using public functions

let Module = (function () {
    function privateFunction() {
        // do something
    }

    return {
        publicMethod: function () {
            // can call something
        }
    }
})()

// For example,
let musicPlayer = (function () {
    function playMusic() {
        console.log("Song has been played...!!")
    }
    function pauseMusic() {
        console.log("Song Paused...!!")
    }

    return {
        playSong: playMusic,
        pauseSong: pauseMusic,
    }
})()

musicPlayer.playSong()
musicPlayer.pauseSong()

// Module Pattern 
// Make this function run only once
// let medium
// function subscribeToNewsLetters() {
//     medium = "Github"
//     console.log(`Subscribed to newsletter of ${medium}`)
// }
// subscribeToNewsLetters()

let medium
function subscribeToNewsLetters() {
    medium = "Github"
    let calledCnt = 0

    return function () {
        if (calledCnt > 0) {
            console.log(`Already Subscribed to newsletter of ${medium}`)
        }
        else {
            console.log(`Subscribed to newsletter of ${medium}`)
            calledCnt++
        }
    }
}
let isSubscribed = subscribeToNewsLetters()
isSubscribed()
isSubscribed()

// Polyfill for once()
function once(func, context) {
    let ran 

    return function () {
        if (func) {
            ran = func.apply(context || this, arguments) // arguments is a keyword iin javascript
            func = null
        }
    }
}

let onceFunc = once(() => console.log("Run only once"))
onceFunc()
onceFunc()
onceFunc()


// Memoize / Caching Function Implementation
function myMemoize(fn, context) {
    const cache = {} // This will store all precomputed results

    return function (...args) {
        var argsCache = JSON.stringify(args) // It will look like res = {"5, 6": 30,} after caching
        
        // If argsCache is not present in the cache object the make a function call to compute it
        if (!cache[argsCache]) { 
            cache[argsCache] = fn.call(context || this, ...args)
        }

        return cache[argsCache]
    }
}

const expensiveMultiply = (num1, num2) => {
    for (let i = 0; i < 1000000; i++) { }
    
    return num1 * num2
}

const memoizedExpensiveMultiply = myMemoize(expensiveMultiply)

console.time("First Call")
console.log(expensiveMultiply(2342, 986)) //2309212
console.timeEnd("First Call") //First Call: 2.267822265625 ms

console.time("Second Call")
console.log(expensiveMultiply(2342, 986)) //2309212
console.timeEnd("Second Call") //Second Call: 1.126953125 ms
