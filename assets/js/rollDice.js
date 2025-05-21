const rollBtn = document.getElementById("rollBtn");
const result = document.getElementById("result");

let randomNum;

const min = 1;
const max = 6;

rollBtn.addEventListener('click', () => {
    randomNum = Math.floor(Math.random() * max) + min;
    result.textContent = randomNum;
});