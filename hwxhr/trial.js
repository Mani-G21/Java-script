document.querySelector('#userForm').addEventListener('submit',fetchUsers);
var output = document.querySelector('.gallery');
var xhr = new XMLHttpRequest();
function fetchUsers(evt)
{
   
    evt.preventDefault();
    while(output.firstChild){
        output.firstChild.remove();
    }
    document.getElementById('output').innerHTML = `
    <div class = "spinner-border text-primary" role = "status">
        <span class = "visually-hidden">Loading...</span>
    </div>
    `;
    let numOfUsers = document.getElementById('numUsers').value;
    numOfUsers = parseInt(numOfUsers);

  
    xhr.open("GET", `https://randomuser.me/api/?results=${numOfUsers}`, true);
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if(xhr.readyState == 3 || xhr.readyState == 2){
            document.getElementById('output').innerHTML = ''; 
           
        }
    }
    xhr.onload = function(){
        if(xhr.status === 200){
        let users = JSON.parse(xhr.responseText);
        users = users.results;
   
        users.forEach(function(user){
         
        
var card = document.createElement("div");
card.setAttribute("class", "card");

var cardImage = document.createElement("div");
cardImage.setAttribute("class", "card-image waves-effect waves-block waves-light");

var img = document.createElement("img");
img.setAttribute("class", "activator");
img.setAttribute("src", `${user.picture.large}`);

cardImage.appendChild(img);

var cardContent = document.createElement("div");
cardContent.setAttribute("class", "card-content");

var cardTitle = document.createElement("span");
cardTitle.setAttribute("class", "card-title activator grey-text text-darken-4");
cardTitle.innerHTML = `${user.name.first} ${user.name.last}<i class='material-icons right'>more_vert</i>`;

cardContent.appendChild(cardTitle);

var cardReveal = document.createElement("div");
cardReveal.setAttribute("class", "card-reveal");

var cardTitle2 = document.createElement("span");
cardTitle2.setAttribute("class", "card-title grey-text text-darken-4 inner-title");
cardTitle2.innerHTML =  `<b>${user.name.first} ${user.name.last}</b><i class='material-icons right'>close</i>`;

cardReveal.appendChild(cardTitle2);

var cardDescription = document.createElement("p");
cardDescription.innerHTML = `
<ul class = "list-group-mb-4">
<li class = "list-group-item"><b>Email:</b> ${user.email}</li>
<br>
<li class = "list-group-item"><b>Age:</b>    ${user.dob.age}</li>
<br>
<li class = "list-group-item"><b>Contact:</b>    ${user.cell}</li>
<br>
<li class = "list-group-item"><b>Address:</b>   ${user.location.city} ${user.location.timezone.description}</li>

</ul>
`;

cardReveal.appendChild(cardDescription);

card.appendChild(cardImage);
card.appendChild(cardContent);
card.appendChild(cardReveal);

output.appendChild(card);

        });
        }
    }
    xhr.send();
}