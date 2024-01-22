class person{
    #firstName;
    #lastName;
    #birthdate;
    constructor(firstName, lastName, birthdate){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#birthdate = new Date(birthdate);

        this.getFullName = function(){
            return `${this.#firstName} ${this.#lastName}`;

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

const p1 = new person("smith", "rambhia", "2004-04-21");
console.log(p1);
console.log(person.addNumbers(10,20));

console.log(p1.#firstName);