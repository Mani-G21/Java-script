let counter  = 0;
const counterObj = setInterval(function(){
    counter++;
    document.getElementById('counterElement').innerHTML = counter;
}, 1000);

const timeoutObj = setTimeout(function(){
    alert("Welcome to my game!");
}, 4000)