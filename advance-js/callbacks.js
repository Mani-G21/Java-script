const students = [
    {firstName: 'smith', lastName: 'rambhia', rollNo: 1},
    {firstName: 'mahek', lastName: 'narsinghani', rollNo: 2},
];

function createStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        callback();
    },2000);
}

function getStudents(){
    setTimeout(function(){
        const outputElement = document.getElementById("output");
        const UL = document.createElement("UL");
        students.forEach(function(student){
            const li = document.createElement('LI');
            li.innerHTML = `${student.firstName} ${student.lastName}`;
            UL.append(li);

        });
        outputElement.append(UL);
    },1000);
}

createStudent({firstName: 'jatin', lastName: 'hinduja', rollNo: 3}, getStudents);