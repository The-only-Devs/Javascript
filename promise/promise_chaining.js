const cart = ["mobile", "laptop", "tablet"]

const promise = createOrder(cart)
console.log(promise)

promise
.then(function (orderId) {
    console.log(orderId)
    return orderId
})
.then(function (orderId) {
    return proceedToPayment(orderId)    
})
.then(function (paymentInfo) {
    console.log(paymentInfo)    
})
.catch(function(err) { //Error Handling: If we will not attach .catch(), then error will be given in console of user,but webpage will not display any error on the UI of website
    console.log(err)    //This .catch() will catch all the reject() error present above the chain
    console.log(err.message) //attach this .catch() carefully in promise chain, because if there is error in anyone of .then() in promise chain directly the .catch() will execute and the remaining .then() (btw the .catch() and .then() with error) will not be executed
})                          // We should figure it out where the .catch() fits in the promise chain, instead of randomly placing it in promise chain
.then(function () {     //No matter what this .then will execute
    console.log("No matter what happens this will definitely be called")
})

//Creating a promise
function createOrder(cart) {
    const prm = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid")
            reject(err)
        }

        const orderId = "12345" //DB.getOrderId
        if (orderId) {
            setTimeout(function () {
                resolve(orderId)
            }, 5000)
        }
    })

    return prm
}

function validateCart(cart) {
    return false;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Ssuccessfull")
    })
}