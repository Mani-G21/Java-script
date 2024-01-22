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

person.prototype.greeting = function(){
    console.log(`Hello ${this.getFullName()}`);
}

function student(firstName, lastName, birthdate, rollNo){
    //Note: while giving call to base class constructor, we need to remember that we need to pass 'this' as the first aargument
    person.call(this, firstName, lastName, birthdate);
    this.rollNo = rollNo;
}

//inherit the prototype
student.prototype = Object.create(person.prototype);

//Make students prototype constructor to return student()
student.prototype.constructor = student;

const p1 = new person("smith", "rambhia", "2004-01-13");
const s1 = new student('mahek', 'narsinghani', '2004-10-25', 45);
console.log(s1);
console.log(s1.getAge());
p1.greeting();
s1.greeting();

console.log(s1 instanceof student);
console.log(s1 instanceof person);