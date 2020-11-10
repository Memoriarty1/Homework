const greenDiagram = document.querySelector('.green');
const redDiagram = document.querySelector('.red');
range.oninput = function () {
    numberRange.value = range.value;
    foo();
}
numberRange.oninput = function () {
    range.value = numberRange.value;
    foo();
}

function checkPersent(value) {
    if (value >= 0 && value < 20) {
        return 0.02;
    } else if (value >= 20 && value < 50) {
        return 0.04;
    } else if (value >= 50 && value < 75) {
        return 0.06;
    } else if (value >= 75 && value <= 100) {
        return 0.08;
    } else {
        return 0;
    }
}
function foo() {
    if (numberRange.value > 100 || numberRange.value < 0) {
        numberRange.value = 100;
    }
    greenDiagram.style.height = `${range.value}px`;
    let persent = checkPersent(Number(range.value));
    redDiagram.style.height = (persent * range.value) + `px`;
}