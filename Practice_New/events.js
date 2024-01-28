const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Promise Resolved Value1")
    }, 5000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Promise Resolved Value2")
    }, 10000)
})

// async: always returns a promise
// await can only be used inside an async function.
// We use await infront of a promise, instead of using traditional way of using .then() to resolve a promise
// async function handlePromise() {
//     console.log("Hello world!")

////    Js engine seems to wait for promise to be resolved, but under the hood it suspends the function till the promise is settled
//     const val1 = await p1
//     console.log(val1)
//     console.log("Love Nature1")

//     const val2 = await p2
//     console.log(val2)
//     console.log("Love Nature2")
// }
// handlePromise()


function getData() {
    //Js engine will not wait for promise to be resolved
    p1.then((data) => console.log(data))
    console.log("Love Nature1")

    p2.then((data) => console.log(data))
    console.log("Love Nature2")
}
getData()