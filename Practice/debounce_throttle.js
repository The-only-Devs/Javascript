// Create a button and debounce as:
// Show "Button clicked <X> Times" every time button is clicked
// Increase "Triggered <y> Times" count after 500ms of debounce

/* <button class="debounceButton">Debounce Me</button>
    <button class="throttleButton">Throttle Me</button>
    <p>Button Clicked <span class="clickCount">0</span></p>
    <p>Button Triggered <span class="triggerCount">0</span></p> */
/* <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */
const debounceBtn = document.querySelector(".debounceButton");
const btnclicked = document.querySelector(".clickCount");
const btntriggered = document.querySelector(".triggerCount");

let clickCount = 0;
let triggerCount = 0;

const debouncedCount = _.debounce(() => {
    btntriggered.innerHTML = ++triggerCount
}, 500)

debounceBtn.addEventListener("click", () => {
    btnclicked.innerHTML = ++clickCount
    debouncedCount()
})

// Do the same with Throttle
const throttleBtn = document.querySelector(".throttleButton")

let throttledCount = _.throttle(() => {
    btntriggered.innerHTML = ++triggerCount
}, 500)

throttleBtn.addEventListener("click", () => {
    btnclicked.innerHTML = ++clickCount
    throttledCount()
})


// Debounce polyfill
{/* <input type="text" onkeyup="debouncedFuncTest()"> */}

function fetchData(...arr) {
    console.log("Fetching Data........")
    console.log(...arr)
}

function myDebounce(func, delay){
    let timer
    return function (...args) {
        let context = this
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
                    func.apply(context, args)
                }, delay)
    }
}
let debouncedFunc = myDebounce(fetchData, 400)
let debouncedFuncTest = () => debouncedFunc(1, 2, 3)


// Throttle polyfill
function myThrottle(func, delay) {
    let flag = true
    return function (...args) {
        let context = this
        if (flag) {
            func.apply(context, args)
            flag = false
            setTimeout(() => {
                flag = true
            }, delay)
        }
    }
}

