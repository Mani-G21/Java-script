const startStopBtn = document.getElementById('startstop');

let playing = false;
const GAME = 15;
let game_time;
let score;
let correctAns;
let intervalObj;

startStopBtn.addEventListener('click', handleStartStop);

function show(selector) {
  document.querySelector(selector).style.display = 'block';
}

function hide(selector) {
  document.querySelector(selector).style.display = 'none';
}

function setInnerHTML(selector, html) {
  document.querySelector(selector).innerHTML = html;
}

function handleStartStop(evt) {
  evt.preventDefault();
  playing = !playing;

  if (playing) {
    startGame();
  } else {
    location.reload();
  }
}

function startGame() {
  hide('#gameover');
  game_time = GAME;
  score = 0;
  setInnerHTML('#startstop', "STOP GAME");
  show('#timeremaining');
  setInnerHTML('#timeremainingValue', game_time);
  scoreValue.innerHTML = score;

  for (let i = 1; i <= 4; i++) {
    document.getElementById(`box${i}`).addEventListener('click', verifyAnswer);
  }

  intervalObj = setInterval(function () {
    game_time--;
    if (game_time <= 0) {
      endGame();
    }
    setInnerHTML('#timeremainingValue', game_time);
  }, 1000);

  generateQA();
}

function endGame() {
  clearInterval(intervalObj);
  show('#gameover');
  hide('#timeremaining');
  setInnerHTML('#gameover', `<p> GAME OVER</p> YOUR SCORE: ${score}`);
  setInnerHTML('#startstop', "Start GAME");
  playing = false;

  for (let i = 1; i <= 4; i++) {
    document.getElementById(`box${i}`).removeEventListener('click', verifyAnswer);
  }
}

function generateQA() {
  let num1 = generateRandomNumber();
  let num2 = generateRandomNumber();
  let operator = generateRandomOperator();

  switch (operator) {
    case '+':
      correctAns = num1 + num2;
      setInnerHTML('#question', `${num1} + ${num2}`);
      break;
    case '-':
      correctAns = num1 - num2;
      setInnerHTML('#question', `${num1} - ${num2}`);
      break;
    case '*':
      correctAns = num1 * num2;
      setInnerHTML('#question', `${num1} * ${num2}`);
      break;
    case '/':
      correctAns = num1 / num2;
      setInnerHTML('#question', `${num1} / ${num2}`);
      break;
  }

  const correctAnsBox = generateRandomNumber(1, 3);
  setInnerHTML(`#box${correctAnsBox}`, correctAns);

  const answer = [correctAns];

  for (i = 1; i <= 4; i++) {
    if (i == correctAnsBox) continue;

    let wrongNum1;
    let wrongNum2;
    let wrongAns;
    let wrongOperator;

    do {
      wrongNum1 = generateRandomNumber();
      wrongNum2 = generateRandomNumber();
      wrongOperator = generateRandomOperator();

      switch (wrongOperator) {
        case '+':
          wrongAns = wrongNum1 + wrongNum2;
          break;
        case '-':
          wrongAns = wrongNum1 - wrongNum2;
          break;
        case '*':
          wrongAns = wrongNum1 * wrongNum2;
          break;
        case '/':
          wrongAns = wrongNum1 / wrongNum2;
          break;
      }
    } while (answer.indexOf(wrongAns) != -1);

    setInnerHTML(`#box${i}`, wrongAns);
  }
}

function generateRandomNumber(min = 1, endMinus1 = 9) {
  return Math.round(Math.random() * (endMinus1 - min) + min);
}

function generateRandomOperator() {
  const operators = ['+', '-', '*', '/'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

function verifyAnswer() {
  const answerClicked = parseInt(this.innerHTML);

  if (answerClicked === correctAns) {
    generateQA();
    score++;
    scoreValue.innerHTML = score;
    show('#correct');
    hide('#wrong');
    setTimeout(function () {
      hide('#correct');
    }, 500);
  } else {
    show('#wrong');
    hide('#correct');
    setTimeout(function () {
      hide('#wrong');
    }, 500);
  }
}
