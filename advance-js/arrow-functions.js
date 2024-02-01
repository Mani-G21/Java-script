// function as an expression
const sayHello = function(){
    console.log("hello");
}

const sayHello1 = () => {
    console.log("Hello from arrow function")
}

const sayHello2 = () => console.log("Hello from arrow functions")

// const getFullName = function(firstName, lastName){
//     return `${firstName} ${lastName}`
// }


// Arrow functions provide implicit return

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`

sayHello();
sayHello1();
sayHello2();

console.log(getFullName("Advance", "java"));


// const getObject = function(){
//     return {
//         name: `study link`,
//         age: 15
//     }
// }

const getObject = () => ({name: `study Link`, age: 15});   //Note: while returnning object always put round braces

console.log(getObject());

const greet = userName => console.log("Welcome "+ userName);  //Note: agar ek he argument pass kar rahe then no need to put braces around argument

greet("Manish");

const names = ["mahek", "mayush", "mehul"];

// const lens  = names.map(function(name){
//     return name.length;
// });

const lens = names.map(name => name.length);

console.log(names);
console.log(lens);