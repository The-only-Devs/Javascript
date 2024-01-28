console.log(Math.round(4.4), Math.round(5.8));
console.log(Math.floor(4.4), Math.floor(5.8), Math.floor(5));
console.log(Math.ceil(4.4),  Math.ceil(5.8), Math.ceil(5));
console.log(Math.trunc(4.4),  Math.trunc(5.8), Math.trunc(5));
console.log(Math.sign(123), Math.sign(-123), Math.sign(0));
console.log(Math.pow(2,3), Math.pow(10, -2));
console.log(Math.log2(8));
console.log(Math.sqrt(625), Math.sqrt(15));
console.log(Math.abs(23), Math.abs(-23));//Used to return abosolute values like Math.abs(a-b) always returns positive difference
console.log(Math.sin(90)); //pass the value in radian.radian = (degree*Math.PI)/180, All trigo functions are present
console.log(Math.PI);
console.log(Math.max(23, 45, 6, 76, 345));
console.log(Math.min(23, 45, 6, 76, 345));
console.log(Math.random());
console.log(Math.random()*10); //MAth.random()*(max-min+1) + min
// Generate a random number between 0 (inclusive) and 100 (exclusive)
const randomNumber1 = Math.floor(Math.random() * 100);
// Generate a random number between 0 (inclusive) and 100 (inclusive)
const randomNumber2 = Math.floor(Math.random() * 101);
// Generate a random number between 50 (inclusive) and 101 (exclusive)
const randomNumber3 = Math.floor(Math.random() * 51) + 50;
// Generate a random number between 50 (inclusive) and 101 (inclusive)
const randomNumber4 = Math.floor(Math.random() * 51) + 51;

//Date
const a = new Date();   //crrent date in browser
console.log(a); 
const b = new Date(2022, 0, 0);   
//const a = new Date(millisec);  const a = new Date(yyyy, mm, dd, hh, mm, ss, msec);0->Jan 11->Dec
const c = new Date("Thu Jan 02 1970 05:30:02");   
const d = new Date("Jan 02 1970 05:30:02");   
const e = new Date("Jan 02 1970");   
const f = new Date(20, 11, 12);   //yy -> Considers previous century 20->1920

const z = new Date();
// z.getDate();
// z.getHours();
// and many more se in vs code recommendations

const y = new Date("2022/05/15");
y.setHours(51);//51 hrs from 2022/05/15
console.log()
console.log()
console.log()