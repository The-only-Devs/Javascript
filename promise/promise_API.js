const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => {resolve("p1 success")}, 1000)
    setTimeout(() => {reject("p1 fail")}, 1000)
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => {resolve("p2 success")}, 2000)
    setTimeout(() => {reject("p2 fail")}, 2000)
})

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => {resolve("p3 success")}, 3000)
    setTimeout(() => {reject("p3 fail")}, 3000)
})

// Promise.all([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err))
    
// Promise.all([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err))
// //It will give array of promise value if all promises are resolved
// //else if any of the promise is rejected it will give error value/message/reason

// Promise.allSettled([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err))
// // It will give a array of promise object, if all promises are resolved
// // We don't need .catch() here. It will woks same if we comment it bcz everything is going in .then()

// Promise.race([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err))
// // It will give value of first settled promise
    
Promise.any([p1, p2, p3])
    .then((res) => console.log(res))
    .catch((err) => {
        console.error(err)
        console.error(err.errors)
    })
5