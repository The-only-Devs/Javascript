const course = {
    courseName : "Js",
    price : "free",
    courseInstructor : "Me"  
}
console.log(course.courseInstructor)

const{courseInstructor} = course;
console.log(courseInstructor)

const{courseInstructor: Instructor} = course;
console.log(courseInstructor)

// In React
// Instead of 
// const navbar = (props.name) => {

// }
// We do
// const navbar = ({company}) => {

// }

// navbar(company="LoveNature")

// destructing can also be done in arrays

// intro to JSON and api and useful websites => char aur code

