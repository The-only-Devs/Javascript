// What is output? Fix the code.
console.log("start")

function asyncFunc(username) {
    setTimeout(() => {
        return `Hello ${username}`
    }, 1000)
}
console.log(asyncFunc("saikumar")) //undefined  
console.log("end")

// How can we modify the above code to print "Hello saikumar"?
// Solution we also pass a callback along with usern
console.log("start")

function asyncFuncModified(username, callback) {
    setTimeout(() => {
        callback(`Hello ${username}`)
    }, 1000)
}

asyncFuncModified("saikumar", (message) => {
    console.log(message)
})
console.log("end")

// ************************
// Another way to to reolve and reject a promise
Promise.resolve("Promise is resolved").then((res) => {console.log(res)})
Promise.reject("Promise is rejected").catch((err) => {console.log(err)})


// ************************
// What is output
console.log("start")

const p1 = new Promise((resolve, reject) => {
    console.log("1")
    resolve("resolved")
})

p1.then((res) => {console.log(res)})
console.log("end")

// start
// 1
// end
// resolved

// ************************
// What is output
console.log("start")

const p2 = new Promise((resolve, reject) => {
    console.log("1")
    console.log("2")
    
})
console.log(p2)
p2.then((res) => {console.log(res)})
console.log("end")
// If there is no resolve or reject then promise will be in pending state forever.
// And .then() and .catch() will not be executed, as there is no resolve or reject.
// start
// 1
// 2
// end

// ************************
console.log("start")

const fn = () => {
    return new Promise((resolve, reject) => {
        console.log("1")
        resolve("resolved")
    })
}

console.log("mid")
fn().then((res) => {console.log(res)})
console.log("end")

// start
// mid
// 1
// end
// resolved


// ************************
function job(state){
    return new Promise(function(resolve, reject){
        if (state) {
            resolve("success")
        }
        else {
            reject("error")
        }
    });
}

let promise = job(true)
promise
.then(function (data) {
    console.log(data)
    return job(false)
})
.catch(function (error) {
    console.log(error)
    return "Error caught"
})
.then(function (data) {
    console.log(data)
    return job(false) 
})
.catch(function (error) {
    console.log(error)
})
.then(function () {
        console.log("No matter what I will always be called whatever may happen")    
    })
    //success
// error
// Error caught
// error
// No matter what I will always be called whatever may happen

let anotherpromise = job(true)
anotherpromise
.then(function (data) {
    if (data !== "victory") {
        throw "Defeat" // throw means go in .catch() block. It is similar to an promise is rejected
    }
    return job(true) // this is not executed as data is not equal to "victory"
})
.then(function (data) {
    console.log(data)
})
.catch(function (error) {
    console.log(error)
    return "Error caught"
})
.then(function (data) {
    console.log(data)
    return new Error("test") // this just to error, it is similar to resolved promise
})
.then(function (data) {
    console.log("Success:", data.message)
})
.catch(function (data) { // this block is not executed as promise is resolved
    console.log("Error:", data.message)
})
//Defeat
//Error caught
//Success: test


// ************************
// Create a firstProm that will resolve to "First promise resolved" and 
// a secondProm that will resolve to the firstProm. 
// Then, resolve the firstProm with the help of secondProm

const firstProm = new Promise((resolve, reject) => {
    resolve("First promise resolved")
}) 

const secondProm = new Promise((resolve, reject) => {
    resolve(firstProm)
})

secondProm
.then((res) => {
    return res
})
.then((res) => console.log(res))


// ************************
// Write the given function with async/await 

// function loadJSON(url) {
//     return fetch(url).then(response => {
//         if (response.status == 200) {
//             return response.json()
//         }
//         else {
//             throw new Error(response.status)
//         }
//     })
// }

// loadJSON('no-such-user.json').catch((err) => {
//     console.log(err)
// })

async function loadJSON(url) {
    let response = await fetch(url)
    
    if (response.status == 200) {
        let json = await response.json()    
        return json
    }

    throw new Error(response.status)
}

// **********************************
// Solve promises recursively
// promRecursive([prom1, prom2, prom3])

function promRecursive(promises) {
    if(promises.length === 0) {
        return 
    }

    // What shift does?
    // const temp = [1, 2, 3]
    // temp.shift() //1
    // console.log(temp) // [2, 3]
    const currentPromise = promises.shift()

    currentPromise
        .then((res) => {console.log(res)})
        .then((err) => { console.log(err) })
    
    promRecursive(promises)
}