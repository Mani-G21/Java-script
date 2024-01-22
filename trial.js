function generateRandomNumber(min = 1, endMinus1 = 9) {
    return Math.round(Math.random() * endMinus1);
}

let num1 = generateRandomNumber();
let num2 = generateRandomNumber();
let num3 = generateRandomNumber();
let opts = ['+', '-', '*', '/'];

let operator1 = generateRandomNumber(0, 3);
let operator2;
do {
    operator2 = generateRandomNumber(0, 3);
} while (operator1 === operator2);

let hAns, correctAns;

hAns = eval(`${num1} ${opts[operator1]} ${num2}`);
correctAns = eval(`${hAns} ${opts[operator2]} ${num3}`);

let textArea = document.querySelector('.trial');
textArea.innerHTML = `${num1} ${opts[operator1]} ${num2} ${opts[operator2]} ${num3}`;                      