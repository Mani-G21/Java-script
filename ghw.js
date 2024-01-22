const level = document.querySelector('#diff-selector');
const btn = document.querySelector('#submit-button');
const redirectLink = document.querySelector('.redirect');
btn.addEventListener('click',handleSubmit);
function handleSubmit(e)
{

    let value = level.value;
    console.log(value);
    if(value == ''){
        window.alert('Select atleast one difficulty');
    }
    if(value == 1)
    {
        redirectLink.href = 'game.html';
    }
    if(value == 2)
    {
        redirectLink.href = 'game1.html';
    }
    if(value == 3)
    {
        redirectLink.href = 'game2.html';
    }
}
