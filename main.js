// // window
// // document
// // console
// console.log("Hello World");
// console.warn("Hello World");
// console.error("Hello World");

// // window.alert
// // alert("Hello World!");

// // window.prompt
// // ans = prompt("This is from prompt");
// // console.log(ans);

// // window.confirm
// // ans = confirm("Are you  sure you want to delete me?"); // returns true if 'Ok' is pressed
// // returns false if 'cancel' is pressed!
// // console.log(ans); 

// /******** KEYWORDS TO CREATE VARIABLES IN JAVASCRIPT! */
// /*
// In JS, there are 3 keywords
// 1. var
// 2. let
// 3. const
// */
// // var variableName1;
// // variableName1 = 'Welcome to JS';
// // variableName1 = 10;
// // console.log(variableName1);

// // let letVariable1; // declaration
// // letVariable1 = "Welcome from let"; //initialization
// // letVariable1 = 10;
// // console.log(letVariable1);

// // const constVariable1 = "Welcome from const!";
// // constVariable1 = "I will create error!";
// // console.log(constVariable1);

// // Difference between let and var
// console.log(numberOne);
// var numberOne="Hi";

// // console.log(numberTwo);
// // let numberTwo;

// console.clear();
// let someVar = "Mukund!"; // string
// console.log(someVar); 
// console.log(typeof(someVar));
// someVar = 23456; // number
// console.log(someVar);
// console.log(typeof(someVar));
// someVar = 23.456; // number
// console.log(someVar);
// console.log(typeof(someVar));
// // // // In javascript whatever you write inside braces {} is treated as object
// someVar = {
//   firstName: 'Dipesh',
//   lastName: 'Gangwani',
//   age: 19,
// };
// console.clear();
// console.log(someVar);
// console.log(someVar.age);
// console.log(someVar['age']); // key of  obbject can be accessed as array index
// console.log(someVar.firstName + " " + someVar.lastName);
// console.log(typeof(someVar));
// console.table(someVar);
// console.clear();

// // Arrays
// someVar = [10, 20, 30, 40, 50];
// console.log(someVar);
// console.log(someVar[2]);
// console.log(someVar.length);
// console.log(typeof(someVar));

// // // Strings
// console.clear();
// // document.write("Hello World!");
// let firstName = 'Sumeet';
// let lastName = 'Verlyani';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// console.clear();

// let age = 18;
// let sentence;
// // type coercion
// sentence = "My Name is " + firstName + " " + lastName + " and I am " + age + " years old!";
// console.log(sentence);

// console.log(firstName.length);
// // // // Escape Sequence
// let val = 'That\'s Awesome';
// console.log(val);

// val = 'This \\ that';
// console.log(val);

// val = "That's Awesome!";
// val = 'My Name is "JavaScript"!';

// val = "My Name is ";
// // concat() of string
// val = val.concat(firstName, ' ', lastName, ' ', age);
// console.log(val);

// // change case
// val = firstName.toLowerCase();
// val = firstName.toUpperCase();

// // Strings can be accessed with the help of array index
// val = firstName[2];
// console.clear();

// // indexOf(string, startIndex = 0): returns -1 if the string is not found!
// let myString = "I Love Java, but JavaScript is also Fun!";
// val = myString.indexOf("Java"); // returns 7
// val = myString.indexOf("Java", 8); // returns 17
// val = myString.indexOf("JavaD");
// // char charAt(index)
// val = firstName.charAt(5); // Sumeet
// val = firstName.charAt(10); // doesn't give exception/error! 

// // substring(startIndex, endIndex) where endIndex is exclusive
// val = myString.substring(4, 9);

// // slice(start, end): slice and substring is same, till negative indexing! as slice supports it and substring doesn't
// console.log(myString);
// val = myString.slice(7, 10);
// val = myString.slice(-6); // Negative Indexing
// val = myString.slice(-6, -3); // Negative Indexing

// val = myString.split(' ');
// const tags = "Education, JavaScript, Programming";
// val = tags.split(", ");

// // replace(og, replace): replaces only 1st occurence of the og
// tempSent = "This is some stupid statement, which will make u more stupid after reading!";
// val = tempSent.replace("stupid", "idiotic");
// // val = tempSent.replaceAll("stupid", "idiotic");

// // // // includes(key): returns 'true' if the key is found else 'false'
// val = tempSent.includes("stupid");

// // document
// let html;
// // html = "<ul><li>First Name: " + firstName +"</li><li>Last Name: " + lastName + "</li><li>Age: " + age + "</li></ul>";
// // html = "<ul>"+
// //           "<li>First Name: " + firstName +"</li>"+
// //           "<li>Last Name: " + lastName + "</li>"+
// //           "<li>Age: " + age + "</li>"+
// //         "</ul>";

// // With Template String (ES6)
// console.log(`This is very awesome: ${1 + 2}`);
// html = `
//   <ul>
//     <li>First Name: ${firstName}</li>
//     <li>Last Name: ${lastName}</li>
//     <li>Age: ${age}</li>
//   </ul>
// `;
// document.write(html);

// function add(num1, num2)
// {
//     //body of the function
//     //code which i want to call again and again
//     console.log("Hello world from the function");
//     return num1 + num2;
// }

// let num1 = 10;
// let num2 =20;
// console.log(`Addition of ${num1} and ${num2} is ${add(num1, num2)}`);

// val = add();
// //console.log(val);

// console.log(typeof(NaN));
// val = add("Hello", "World");
// console.log(val);

// //function with default argument
// function sampleFunction(num1, num2=10)
// {
//     console.log(`num1 = ${num1}`);
//     console.log(`num2 = ${num2}`);
// }

// sampleFunction(5);
// sampleFunction(50,100);
// console.clear();
// //callbacl functions

// function parent(arg)
// {
//     console.log("called parent");
//     arg();
// }

// function callMe()
// {
//     console.log("Hey, you called me");
// }

// parent(callMe);
// parent(function(){
//     console.log("Hello world from call back");
// });


// //**** *
// // arrays
// //

// console.clear();
// console.log(typeof(null));
// const numbers = [1, 2, 3 ,4, 5];
// const numbers2 = new Array(22 ,12, 54, 65, 34, 43, 76);
// const fruits = ['Banana', 'Apple', 'Orange', 'Mango'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date(), [1,2,3,4]];

// console.log(fruits);
// console.log(mixed);

// //length
// console.log(numbers2.length);
// console.clear();

// //check whether the variable is an array or not

// val = true;
// console.log(typeof(val));

// //console.log(Array.isArray(val));

// val = numbers2;
// console.log(Array.isArray(val));
// //console.clear();
// // //index of

// const numbers3 = new Array(22, 12, 54, 65, 12, 34, 43, 76);
// val = numbers3.indexOf(12);
// val = numbers3.indexOf(12,2);
// console.clear();

// // Mutating array
// //insert at end

// console.log(numbers3);
// numbers3.push(100);
// console.log(numbers3);

// //insert at the beginning

// numbers3.unshift(5);
// console.log(numbers3);

// //remove from end
// val = numbers3.pop();
// console.log(numbers3);

// //remove from start
// val = numbers3.shift();
// console.log(numbers3);
// console.clear();

// //splice(start, numOfElementsToBeDeleted)

// console.log(numbers3);
// numbers3.splice(1, 3);
// console.log(numbers3);

// //reverse
// numbers3.reverse();
// console.log(numbers3);

// //concatenate arrays
// console.log("Numbers: "+numbers);
// console.log("Numbers3: "+numbers3);
// val = numbers.concat(numbers3);
// console.log("Numbers after concate: "+ numbers);

// //concat() of array creates a new array and returns it

// //sorting

// console.clear();

// //console.log(fruits);
// //val = fruits.sort();
// //console.clear();

// console.log(numbers2);
// numbers2.push(100);
// numbers2.unshift(5);
// console.log(numbers2);

// val = numbers2.sort();

// //sort() accepts a function with 2 arguments this function is known as compare function which
// //allows the sort function to call it and pass 2 args to it to get the order of 2 elements

// //function(num1, num2)
// //returns -ve if num1 comes before num2
// //returns +ve if num2 comes samller than num1
// //returns 0 if order is sane(i,.e doesnt matter)


// val=numbers2.sort(function(num1, num2){
//     return num1-num2;

//     //more like this
//     //if(num1 < num2) return -1
//     // if(num1 > num2) return 1
//     //return 0
// });

// val = numbers2.sort(compare);
// function compare(num1, num2)
// {
//     return num1 - num2;
// }

// //find: finds the first elemeent that matches the condition it also takes callback
// //console.log("NUMbers 2: "+ numbers2);
// //val = numbers2.find(functio(value){
// //     return value > 50;
// // });


// val = numbers2.find(above50);
// function above50(value)
// {
//     return value > 50;
// }

// //map
// console.clear();
// console.log("NUMbers : "+numbers);
// val = numbers.map(function(value){
//     return value*2;
// });

// console.log("Numbers after map: "+ numbers);
// console.clear();
// console.log(fruits);
// val = fruits.map(function(fruit){
//     return fruit.length;
// });

// console.clear();

// //filter

// console.log("NUmbers2: "+numbers2);
// val = numbers2.filter(function(value){
//     return value%2 == 0;
// });

// console.log("NUmbers2 after filer : "+ numbers2);

// //console.log(val)

// // //arithmetic operations
// // +
// // -
// // /
// // *
// // %
// // >
// // <
// // >
// // >=
// // <=
// // !=

// //objects
// console.clear();
// firstName = 'Krishna';
// const person = {
//     firstName: 'study',
//     lastName: 'Link',
//     hobbies: ['playing cricket', 'manufacturing engineers'],
//     address: {
//         city: 'Mumbai',
//         state: 'MH',
//     },

//     getFullName: function(){
//         return `${this.firstName}  ${this.lastName}`;

//     }
// };

// console.log(person);
// console.log(person.getFullName);
// console.log(person['firstName']);
// console.log(person.lastName);
// console.log(person.address.state);
// console.log(person.address['city']);

// //Date object i.e, built in object

// console.clear();
// const today = new Date();
// console.log(today);
// console.log(today.getDate());
// console.log(today.getMonth());
// //MOnth starts with  0 jan  and 11-dec

// console.log(today.getFullYear());
// console.log(today.getYear());
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getMilliseconds());
// console.log(today.getTime());

// //re3turns epoch time: time which is from 1st jan 1970 00:00:00 timestamp

// //changing the date

// //console.clear();
// // today.setMonth(8);
// // today.setDate(21);
// // today.setUTCFullYear(2024);
// // today.setMinutes(34);
// // today.setSeconds(19);
// // today.setMilliseconds(21);


// // console.log(today);

// //branching and looping statements in java script

// // if(condition){
// //     if body
// // }
// // else{
// //     else body
// // }


// // if...else
// // if(condition)
// // {
// //     if body
// // }

// // else if body
// // else if
// // else if..
// // else body

// let id = '101';
// if(id===101)
// {
//     console.log("id is 101");
// }
// else{
//     console.log("it is not 101");
// }


// // != is a strict type and not equal to compartor!
// // if(id!== 101)
// //     console.log(it is not 101);
// // else
// //     console.log(id is 101);

// // logical operators
// // && for and
// // || for or

// // ternary operators
// // conditin ? valueForTrue : valueForFalse;

// let numTemp = 19;
// let result = '';
// //  if(numTemp % 2 === 0){
// //     result = 'even';
// //  }
// //  else{
// //     result = 'odd';
// //  }

// result = numTemp%2 ===0 ? 'even' : 'odd';
// console.log(`${numTemp} is ${result}`);
// //same rule goes in javascirpt that if .. else has only 1 line in body then no braces are required

// // switch statement



// // id = '101';
// // switch(id)
// // {
// //     case 100: 
// //                 console.log('id is 100');
// //                 break;
// //     case 101:
// //                 console.log('id is 101');
// //                 break;

// //     case 102:  console.log("id is 102");
// //                 break;

// //     default:
// //                 console.log('Kya dala be?');

// // }


// // switch statements work on ===

// // no changes in syntax of for whle do..while  all the rules are same


// const subjects = ['Data Strucures', 'Operating system', 'Relational Database'];
// for(let i=0; i<subjects.length; i++);
// {
//     console.log(subjects[i]);
// }

// //  foreach loop

// console.clear();
// subjects.forEach(function(s){
//     console.log(s);
// });

// const personObj = {
//     firstName: 'study',
//     lastName: 'Link',
//     hobbies: ['playing cricket', 'manufacturing', 'engineers'],
//     address: {
//         city: 'Mumbai',
//         state: 'MH',
//     },

//     getFullName(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// };

// console.clear();

// // objects do not have foreach, they have for...in 
// // personObj.forEach(function(value){
// //     console.log(value);
// // });

// for(let key in personObj){
//     if(typeof(personObj[key])!== 'function'){
//         console.log(personObj[key]);
//     }
//     else{
//         personObj[key]();
//     }
// }


// /************ */

// // window object


// // alert("Hello World");

// // let name = prompt('Please enter your name: ');
// // console.log(name);
// // let ans = confirm('Are you sure you want to delete?');
// // if(ans)
// // {
// //     console.log("you just deleted me");
// // }
// // else{
// //     console.log("you saved me from being trashed");
// // }


// console.clear();
// val = window.outerHeight;
// val = window.outerWidth;

// val = window.innerHeight;
// val = window.innerWidth;

// //val = window.scrollX;
// val = window.scrollY;

// //Location

// val= window.location;
// val = location.hostname;
// val = location.protocol;
// val = location.href;
// val = location.search; //returns the query string
// val = location.host;

// //location.reload();


// //HISTORY

// val = window.history;
// //window.history.back();
// // window.history.go(-3);     here -ve goes back
// // otherwise goes forward

// // NAVIGATOR OBJECT

// // val = window.navigator;
// // val = window.navigator.appName;
// // val = window.navigator.appVersion;
// // val = window.navigator.userAgent;
// // val = window.navigator.userAgent.mobile;
// // val = window.navigator.vendor;
// // val = window.navigator.platform;

// // functions in JS

// function sayHello(firstName, lastName){
//     console.log(`Hello ${firstName} ${lastName}`);
// }

// console.clear();
// sayHello('study', 'link');
// sayHello('study');
// sayHello();

// //functions with default arguments
// function greet(firstName='John' , lastName='Doe'){
//     console.log(`hello ${firstName} ${lastName}`);
// }

// greet("Study", "link");
// greet("study");
// greet();


// //function as expressions

// const square  = function(x){
//     return x*x;
// }

// val = square(9);
// console.clear();

// //Immediately invokable function expressions
// //             IIFE

// (function()
// {
//     console.log("Hello world from IIFE")
// })();

// (function(first, last)
// {
//     console.log(first, last);
// })("Study", "link");

// //property method: Methods inside objects
// const todo = {
//     add: function(){
//         //property method
//         console.log('new task allocated to u');
//     },
//     remove: function()
//     {
//         console.log("you just completed a task great");
//     },
// };

// todo.add();
// console.clear();

// // let ,var ,const
// // var doesnt create block scope

// // var a=1;
// // let b=2;
// // const c =3;

// // function timepass(){
// //     a=4;
// //     b=5;
// //     c=6;
// //     console.log(a,b,c);
// // }

// // timepass();

// // console.log("global scopes: "+a,b,c);


// if(true)
// {
//     var a =7;
//     let b = 8;
//     const c = 9;
//     console.log("Block scope: "+ a, b, c);
// }

// console.log("Global scope: "+a,b,c);
// console.log(val);

// for(let i=0; i<5; i++)
// {
//     console.log(i);
// }

// console.log("outside of for loop: "+i);

// console.log(val);


