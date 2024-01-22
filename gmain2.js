const startStopBtn = document.getElementById('startstop');


let playing = false;
const GAME = 100;
let game_time;
let score;
let correctAns;
let intervalObj;


startStopBtn.addEventListener('click',handleStartStop);

function show(selector){
    document.querySelector(selector).style.display = 'block';
}


function hide(selector){
    document.querySelector(selector).style.display = 'none';
}

function setInnerHTML(selector,html){
    document.querySelector(selector).innerHTML = html;
}

function handleStartStop(evt){
    evt.preventDefault();
    playing = !playing;

    if(playing){
        startGame();
    }else{
        location.reload();
    }
}


function startGame(){
    hide('#gameover');
    game_time = GAME;
    score=0;
    setInnerHTML('#startstop',"STOP GAme");
    show('#timeremaining');
    setInnerHTML('#timeremainingValue',game_time);
    scoreValue.innerHTML = score;


    for(let i=1;i<=4;i++){
        document.getElementById(`box${i}`).addEventListener('click',verifyAnswer)
    }


    intervalObj = setInterval(function(){
        game_time--;
        if(game_time <=0){
            endGame();
        }
        setInnerHTML('#timeremainingValue',game_time);
    },1000);

    generateQA();
}


function endGame(){
    clearInterval(intervalObj);
    show('#gameover');
    hide('#timeremaining');
    setInnerHTML('#gameover',`<p> GAME OVER</p> YOUR SCORE: ${score}`);
    setInnerHTML('#startstop',"Start GAme");
    playing = false;


    for(let i=1;i<=4;i++){
        document.getElementById(`box${i}`).removeEventListener('click',verifyAnswer)
    }
}


function generateQA(){

    let num1 = generateRandomNumber();
    let num2 = generateRandomNumber();
    let num3 = generateRandomNumber();
    let num4 = generateRandomNumber();
    let opts = ['+', '-', '*', '/'];

    let operator1 = generateRandomNumber(0, 3);
    let operator2,operator3;
    do {
         operator2 = generateRandomNumber(0, 3);
    } while (operator1 === operator2);

    do {
        operator3 = generateRandomNumber(0, 3);
   } while (operator3 === operator2 || operator3 === operator1);
    let shAns,hAns;

    shAns = eval(`${num1} ${opts[operator1]} ${num2}`);
    hAns = eval(`${shAns} ${opts[operator2]} ${num3}`);
    correctAns = eval(`${hAns} ${opts[operator2]} ${num4}`);

    if(correctAns == NaN){
        generateQA();
    }

    setInnerHTML('#question',`${num1} ${opts[operator1]} ${num2} ${opts[operator2]} ${num3} ${opts[operator3]} ${num4}`);

     const correctAnsBox = generateRandomNumber(1,4);
     setInnerHTML(`#box${correctAnsBox}`,correctAns);

     const answer = [correctAns];
     console.log(correctAns);


    for(i=1;i<=4;i++){
         if(i == correctAnsBox) continue;


         let wrongNum1;
         let wrongNum2;
         let wrongAns;


        do{
            wrongNum1 = generateRandomNumber();
            wrongNum2 = generateRandomNumber();
            wrongAns= wrongNum1 * wrongNum2
        }while(answer.indexOf(wrongAns)!= -1);


        setInnerHTML(`#box${i}`,wrongAns);
    }
}

function generateRandomNumber(min = 1, endMinus1 = 9) {
    return Math.round(Math.random() * endMinus1);
}

function verifyAnswer(){
    
    const answerClicked = parseFloat(this.innerHTML);
    console.log(answerClicked);
    if(answerClicked === correctAns){
        generateQA();
        score++;
        scoreValue.innerHTML = score;
        show('#correct');
        hide('#wrong');
        setTimeout(function(){
            hide('#correct');

        },500);

    }else{
        show('#wrong');
        hide('#correct');
        setTimeout(function(){
            hide('#wrong');
        },500);
    }
}