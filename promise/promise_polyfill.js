// promise polyfill
// const examplePromise = new promisePolyfill((resolve, reject) => {
//     // resolve("Promise Resolved")
//     // reject("Promise Rejected")
//     setTimeout(() => {
//         resolve("Promise Resolved")
//     }, 1000)
// })

// examplePromise
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) })
// For Async implementation of exector the above code of polyfill will not Worker.

// As.then() will not be called and onResolve will not be assigned callback function of .then()
// Hence, onResolve will be just same as a variable not a function any more.
// And a error that onResolve is not a function will occur




// // for Async promise only
// function promisePolyfill(executor) {
//     let onResolve, onReject

//     function resolve(val) {
//         onResolve(val)
//     }
//     function reject(val) {
//         onReject(val)
//     }

//     this.then = function (callback) {
//         onResolve = callback
//         return this
//     }
//     this.catch = function (callback) {
//         onReject = callback
//         return this
//     }

//      try {
//     executor(resolve, reject)
// }
// catch(error){
//     reject(error)
// }
// }

function promisePolyfill(executor) {
    let onResolve, onReject
    let isFulfilled=false, isRejected=false, isCalled=false, value

    function resolve(val) {
        isFulfilled = true
        value = val

        if (typeof onResolve === "function") {
            onResolve(val)
            isCalled = true
        }
    }
    function reject(val) {
        isRejected = true
        value = val

        if (typeof onResolve === "function") {
            onReject(val)
            isCalled = true
        }
    }

    this.then = function (callback) {
        onResolve = callback

        if (isFulfilled && !isCalled) {
            isCalled = true
            onResolve(value)
        }
        return this
    }
    this.catch = function (callback) {
        onReject = callback

        if (isRejected && !isCalled) {
            isCalled = true
            onReject(value)
        }
        return this
    }

    try {
        executor(resolve, reject)
    }
    catch(error){
        reject(error)
    }
}

const examplePromise = new promisePolyfill((resolve, reject) => {
    // resolve("Promise Resolved")
    // reject("Promise Rejected")
    setTimeout(() => {
        resolve("Promise Resolved")
    }, 1000)
})

examplePromise
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) })


// Promise.resolve() and Promise.reject() polyfill
promisePolyfill.resolve = (val) => {
    return new promisePolyfill(function executor(resolve, reject) {
        resolve(val)
    })
}

promisePolyfill.reject = (val) => {
    return new promisePolyfill(function executor(resolve, reject) {
        reject(val)
    })
}


// Polyfill for Promise.all()
// Promise.all([p1, p2, p3])
    // .then()
    // .catch()

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("p1 success")}, 1000)
        // setTimeout(() => {reject("p1 fail")}, 1000)
    })
    
    const p2 = new Promise((resolve, reject) => {
        // setTimeout(() => {resolve("p2 success")}, 2000)
        setTimeout(() => {reject("p2 fail")}, 2000)
    })
    
    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("p3 success")}, 3000)
        // setTimeout(() => {reject("p3 fail")}, 3000)
    })
    
Promise.allPolyfill = (promiseArray) => {
    return new Promise((resolve, reject) => {
        let output = []

        if (promiseArray.length === 0) {
            resolve(output)
            return 
        }

        let size = promiseArray.length
        promiseArray.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((res) => {
                output[index] = res

                size--

                if (size === 0) {
                resolve(output)
                }
                })
                .catch(() => {
                    reject(`An error occured in promise at index ${index}`)
                })
        })
    })
}

Promise.allPolyfill([p1, p2, p3])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))



// Polyfill for Promise.allSettled()
// Promise.allSettledPolyfill([p1, p2, p3])
//     .then()
// We don't need .catch() in Promise.allSettled()

Promise.allSettledPolyfill = (promiseArray) => {
    let output = []
    return new Promise((resolve, reject) => {
        promiseArray.forEach((promise, index) => {
            promise
            .then((res) => {
                output.push({
                    status: "fulfilled",
                    value: res,
                })
                if (index === (promiseArray.length - 1))
                resolve(output)          
                })
                .catch((err) => {
                    output.push({
                        status: "rejected",
                        reason: err,
                    })
                    if (index === (promiseArray.length - 1))
                        resolve(output)
                })
            })
        })
}
Promise.allSettledPolyfill([p1, p2, p3])
    .then((res) => {
        console.log(res)
    })


// Polyfill for Promise.race()
// Promise.racePolyfill([p1, p2, p3])
//     .then()
//     .catch()

Promise.racePolyfill = (promiseArray) => {
    return new Promise((resolve, reject) => {
        promiseArray.forEach((promise, index) => {
            promise
                .then(resolve)
                .catch(reject)
        })
    })
}
Promise.racePolyfill([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err))


// Polyfill for Promise.any()
// Promise.racePolyfill([p1, p2, p3])
//     .then()
//     .catch()

Promise.anyPolyfill = (promiseArray) => {
    let output = []

    return new Promise((resolve, reject) => {
        promiseArray.forEach((promise, index) => {
            promise
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    output.push(err)

                    if (index === (promiseArray.length - 1))
                        reject(output)
                })
        })
    })
}
Promise.anyPolyfill([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err))