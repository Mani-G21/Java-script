const xhr = new XMLHttpRequest();

document.getElementById("userForm").addEventListener('submit', fetchUsers);
function fetchUsers(evt){
    evt.preventDefault();
    document.getElementById('output').innerHTML = `
    <div class = "spinner-border text-primary" role = "status">
        <span class = "visually-hidden">Loading...</span>
    </div>
    `;
    let numberOfUsers = document.getElementById('numUsers').value;
    if(!numberOfUsers){
        numberOfUsers = 5;
    }

    xhr.open("GET", `https://randomuser.me/api/?results=${numberOfUsers}`);
    xhr.send();

    // xhr.onreadystatechange = function(){
    //     console.log(this.readyState);
    //     if(this.readyState == 3 || this.readyState == 2){
    //         document.getElementById("output").classList.remove('d-none');
    //     }
    // }

    xhr.onload = function(){
        if(this.state == 200){
            const output = JSON.parse(this.responseText);
            const results = output.results;
            console.log(output);
            let dom = '';
            console.log(results);
            results.forEach(function(user){
                dom += `
                <ul class = "list-group-mb-4">
                    <li class = "list-group-item"><img src="${user.picture.thumbnail}"/></li>
                    <li class = "list-group-item">${user.name.title} ${user.name.first} ${user.name.last}</li>
                    <li class = "list-group-item">Email: ${user.email}</li>
                    <li class = "list-group-item">DOB: ${user.dob.date}</li>
                    <li class = "list-group-item">Age: ${user.age}</li>
                    <li class = "list-group-item">Contact: ${user.cell}</li>
                </ul>
                `;
            });
            document.getElementById("output").innerHTML = dom;
        }
    }
}