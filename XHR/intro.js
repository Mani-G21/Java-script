document.getElementById("btnTextData").addEventListener('click', getTextData);
document.getElementById("btnJsonData").addEventListener('click', getJsonData);
document.getElementById("btnArrayOfJsonData").addEventListener('click', getArrayOfJSON);

function getTextData(evt){
    //1. create object of xhr
    const xhr = new XMLHttpRequest();

    //2. Open the connection of xhr with its open(HTTPMethod, URL, aysnc)
    xhr.open('GET', 'data.txt', true);

    //3. send the opened request using send()
    xhr.send();
    console.log(xhr);
    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById("outputData").innerHTML = this.responseText;
        }
    }
   
    // xhr.onreadystatechange = function(){
    //     if(this.readyState === 4 && this.status === 200){
    //         document.getElementById("outputData").innerHTML = this.responseText;
    //     }
    // }
   
}

function getJsonData(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "student.json", true);
    xhr.onload = function(){
        if(this.status === 200){
            const student = JSON.parse(this.responseText);

            let output = "<ul>";
            for(const key in student){
                output += `<li>${key}: ${student[key]}</li>`;
            }
            output += "</ul>";

            document.getElementById("outputJSON").innerHTML = output;
        }
    }
    xhr.send();
}

function getArrayOfJSON(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "students.json", true);

    xhr.onload = function(){
        if(this.status === 200){
            const students = JSON.parse(this.responseText);
            let output = "";
            students.forEach(function(student){
                output += "<ul>";
                for(const key in student){
                    output += `<li>${key}: ${student[key]}</li>`;

                }
                output += "</ul>";
            });

            document.getElementById("outputArrayOfJSON").innerHTML = output;
        }
    }
    xhr.send();
}