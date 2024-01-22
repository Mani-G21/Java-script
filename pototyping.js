// constructor and 'this' keyword
// In java to create Object,  we need to create class, but in js there is no need to create 
// class for creaeting a Object


function person(firstName, lastName, birthdate){
    this.name = {
        firstName: firstName,  // from ES6 key/value is same, there is no need to specify this
        lastName
    };

    this.birthdate = new Date(birthdate);
    
    this.getFullName = function(){
        return this.name.firstName + ' ' + this.name.lastName;
    }

    this.getAge = function(){
        const todaysDate = new Date();
        const diff = todaysDate - this.birthdate;
        const diffDate = new Date(diff);
        const diffYear = diffDate.getFullYear();
        return diffYear -  1970;
    }
}

const p1 = new person("Manish", "Ghindwani", "2005-04-21");
 console.log(p1.getFullName());
 console.log(p1.getAge());

p1.doTimePass = function(){
    console.log("Hello World");
}

person.prototype.greeting = function(){
    console.log(`Hello ${this.getFullName()}`);
}

console.log(p1);
const p2 = new person("John", "doe", "1974-01-01");
console.log(p2);
p2.greeting();
p1.greeting();

const p3 = Object.create(p1);
p3.birthdate = p1.birthdate;
p1.birthdate = "1974-01-10";
console.log(p3);