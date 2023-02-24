let minValue = 0;
let maxValue = 100;
let answerNumber;
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

startGame();

document.getElementById('btnLess').addEventListener('click', function () {
    if (!gameRun) { return; }
    else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getQuestion(answerNumber);      
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (!gameRun) { return; }
    else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getQuestion(answerNumber);
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = getAnswer(answerNumber);
        gameRun = false;
    }
})

document.getElementById('btnRetry').addEventListener('click', reset);

function reset() {
    minValue = 0;
    maxValue = 100;
    startGame();
}

function startGame() {
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;
    answerField.innerText = getQuestion(answerNumber);
}

function getQuestion(answerNumber) {
    const rand = Math.random();
    if (rand < 0.33) {
        return `Вы загадали число ${ answerNumber }?`;
    }
    if (rand >= 0.3 && rand <= 0.63) {
        return `Ты загадал ${ answerNumber }?`;
    }
    if (rand >= 0.63) {
        return `Ваше число ${ answerNumber }?`;
    }
}
  
function getAnswer(answerNumber) {
    const rand = Math.random();
    if (rand < 0.33) {
        return `Я всегда угадываю`;
    }
    if (rand >= 0.3 && rand <= 0.63) {
        return `Я снова угадал`;
    }
    if (rand >= 0.63) {
        return `Ответ верный`;
    }
}