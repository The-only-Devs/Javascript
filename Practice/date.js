let currentDate = new Date()

console.log(currentDate)
console.log(currentDate.toString())
console.log(currentDate.toTimeString())
console.log(currentDate.toDateString())

console.log(currentDate.toLocaleString())
console.log(currentDate.toLocaleDateString())
console.log(currentDate.toLocaleTimeString()) 

console.log(currentDate.toJSON())
console.log(currentDate.toISOString())

// *************************

// new Date(yyyy, mm, dd, hh, mm, ss, msms)
// new Date(msms from reference 1 Jan 1970)
const createdDate = new Date(2030, 0, 25, 15, 30, 44) //Fri Jan 25 2030 15:30:44 GMT+0530 (India Standard Time)
const createdDate1 = new Date(2030, 12, 40, 15, 30, 44) //Sun Feb 09 2031 15:30:44 GMT+0530 (India Standard Time)

// new Date("yyyy/mm/dd")
// new Date("mm/dd/yyyy")
const createdDate2 = new Date("2030-01-25") // Fri Jan 25 2030 05:30:00 GMT+0530 (India Standard Time)
const createdDate3 = new Date("02-03-2030") //Sun Feb 03 2030 00:00:00 GMT+0530 (India Standard Time)

const createdDate4 = new Date("03 Jan 2025") // Fri Jan 03 2025 00:00:00 GMT+0530 (India Standard Time)
//All above method can be applied in createdDate

// ****************************
// .getDate(), .getDay(), .getMonth(), .getFullYear()
// .getHours(), .getMinutes(), .getSeconds
let learnToExtract = new Date()
console.log(learnToExtract.getDay()) // 0 => Sunday
console.log(learnToExtract.getMonth()) // 0 => Jan
//Usually we do console.log(learnToExtract.getMonth() + 1) to avoid confusion for user

console.log(`This is month ${learnToExtract.getMonth() + 1} of ${learnToExtract.getFullYear()}`)

learnToExtract.setHours(51) // 2days(48 hrs) + 3 hrs from date in variable
console.log(learnToExtract)

// ********************************

let myTimeStamp = Date.now()
console.log(myTimeStamp) // Milliseconds from refernce 1 Jan 1970(1700212590053)
console.log(createdDate.getTime()) // Milliseconds from refernce 1 Jan 1970(1895565644000)
// Now we can use this to compare time

// Display Current time in seconds
console.log(Math.floor(Date.now()/1000))

// ******************************
const TimeStandards = new Date()
TimeStandards.toLocaleString('default', {
    weekday: "long",
})
console.log(TimeStandards)