const cart = ["mobile", "laptop", "tablet"]

const promise = createOrder(cart)
console.log(promise)

promise.then(function(orderId) {
    console.log(orderId)
    proceedToPayment(orderId)
})
.catch(function(err) { //Error Handling: If we will not use .catch(), then error will be given in console of user,but webpage will not display any error
    console.log(err)
    console.log(err.message)
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
    return true;
    // return false;
}