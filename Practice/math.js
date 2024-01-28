console.log(Math.abs(5 - 200))
console.log(Math.round(4.5))
console.log(Math.ceil(9.2))
console.log(Math.floor(6.3))
console.log(Math.trunc(8.345)) // Removes decimal part
console.log(Math.min(4, 3, 6, 8))
console.log(Math.max(4, 3, 6, 8))

console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log((Math.floor(Math.random()*10 + 1)))

const min = 10
const max = 20
console.log(Math.random() * (max - min + 1) + min)

console.log(Math.sign(8)) // +ve => 1, -ve => -1, 0 => 0
console.log(Math.pow(2, 3)) // 2^3
console.log(Math.sqrt(25)) // 2^3
console.log(Math.log2(8)) // log10(100), log(22)

const angleInDegree = (90 * Math.PI) / 180;
console.log(Math.sin(angleInDegree))
