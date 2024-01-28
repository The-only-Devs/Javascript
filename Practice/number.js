const score = 30
console.log(score)

// .toString(), .toFixed(), .toPrecision(), .toLocalString('en-IN')
const balance = new Number(230.347)
console.log(balance) //(typeof balance) => object

console.log(balance.toString().length) 
//.toString() =>converts number into string. Now you can use all string methods

console.log(balance.toFixed(2)) // 230.35
//Rounds off numbers after decimal pt to given input range

const amount = 23.87
console.log(amount.toPrecision(2)) //23.87 => 24
//console.log(amount.toPrecision(3)) //123.87 => 124
//console.log(amount.toPrecision(3)) //1123.87 => 1.123+3
//Rounds off numbers to given input range

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))
//.toLocaleString() => separated by ',' according to US Standard 
//.toLocaleString('en-IN') => separated by ',' according to Indian Standard

