class person{
    firstName;
    lastName;
    birthdate;
    constructor(firstName, lastName, birthdate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = new Date(birthdate);

        this.getFullName = function(){
            return `${this.firstName} ${this.lastName}`;

        }
    }

    //this below function will be added in prototype
    greeting(){
        console.log(`welcome ${this.getFullName()}`);
    }

    static addNumbers(num1, num2){
        return num1+num2;
    }   
}

class student extends person{
    constructor(firstName, lastName, birthdate, rollNo){
        super(firstName, lastName, birthdate);
        this.rollNo = rollNo;
    }

    getRollNo(){
        return this.rollNo;
    }
}

const s1 = new student("smith", "rambhia", "2004-06-10", 30);
s1.greeting();
console.log(student.addNumbers(10,20));
console.log(s1);