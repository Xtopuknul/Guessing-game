const input = document.getElementById('guess');
const check = document.getElementById('check');
const reset = document.getElementById('reset');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const audioWin = new Audio('mp3/ljnn.mp3')
 
let chislo = Math.floor(Math.random() *100) + 1;

let attempts = 0;


check.addEventListener('click', () => {
    attempts++;
    attemptsDisplay.textContent = `Попыток: ${attempts}`

    const numb = Number(input.value)

    if(numb > chislo) {
        feedback.textContent = 'Меньше'
    } else {
        feedback.textContent = "Больше"
    }

    if(numb === chislo) {
        feedback.textContent = "Угадал!"
        check.disabled = true;
        audioWin.play();
    }

    if(!numb) {
        feedback.textContent = 'Ввкдите число!'
        return;
    }

});
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        check.click(); 
    }
});

reset.addEventListener('click', () => {
    attempts = 0;
    attemptsDisplay.textContent = `Попыток: ${attempts}`

    chislo = Math.floor(Math.random() *100) + 1;

    input.value = "";
    feedback.textContent = "";

    check.disabled = false;
});