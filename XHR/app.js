document.getElementById('btnTextData').addEventListener('click',getTextData);
document.getElementById('btnJsonData').addEventListener('click', getJsonData);
document.getElementById('btnArrayOfJsonData').addEventListener('click', getArrayOfJson);

function getTextData(){
    fetch('data.txt')
        .then(function(res){
            // console.log(res);
            if(res.status === 200){
                return res.text();
            }
            throw new Error('Hello World');
        })
        .then(function(data){
            document.getElementById('outputData').innerHTML = data;
        })
        .catch(function(err){
            console.warn(err);
        });
}

function getJsonData(){
    fetch('student.json')
        .then(function(res){
            if(res.status === 200){
                return res.json();
            }
            throw new Error(`Status: ${res.status} `);
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.warn(err);
        })
}

function getArrayOfJson(){
    fetch('students.json')
        .then(function(res){
            if(res.status === 200){
                return res.json();
            }
            throw new Error(`status: ${res.status}`);
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.warn(err);
        })
}