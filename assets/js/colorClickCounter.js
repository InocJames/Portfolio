const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");
const blueBtn = document.getElementById("blueBtn");

const redCount = document.getElementById("redCount");
const greenCount = document.getElementById("greenCount");
const blueCount = document.getElementById("blueCount");

const resetBtn = document.getElementById("resetBtn");



redBtn.onclick = function() {
    redCount.textContent = Number(redCount.textContent) + 1;
    document.body.className = "red";
}


greenBtn.onclick = function() {
    greenCount.textContent = Number(greenCount.textContent) + 1;
    document.body.className = "green";
}


blueBtn.onclick = function() {
    blueCount.textContent = Number(blueCount.textContent) + 1;
    document.body.className = "blue";
}


resetBtn.onclick = function() {
    redCount.textContent = 0;
    greenCount.textContent = 0;
    blueCount.textContent = 0;
    document.body.className = "";
}