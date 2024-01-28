const p = new Promise((resolve, reject) => {
    setTimeout(() => {
    // resolve("Promise Resolved Value")
    reject("Promise Failed")
    }, 5000)
})

// async: always returns a promise
// await can only be used inside an async function.
// We use await infront of a promise, instead of using traditional way of using .then() to resolve a promise
async function handlePromise() {
    console.log("Hello world!")

//    Js engine seems to wait for promise to be resolved, but under the hood it suspends the function till the promise is settled, and executes rest of the synchronous code
    const val = await p // if promise is resolved, then val will be assigned the resolved value
    console.log(val)
    console.log("Love Nature2")
}
handlePromise().catch((err) => {
    console.log(err)
})
console.log("Remaining sync code")

// function getData() {
    //     console.log("Hello world!")
//     //Js engine will not wait for promise to be resolved
//     p
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
//     console.log("Love Nature1")
// }
// getData()
// console.log("Remaining sync code")