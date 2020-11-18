window.onload = function () {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.id === 'button-counter1' || button.id === 'button-counter2') {
            button.addEventListener('click', counter);
        } else if (button.id === 'button-cleaner') {
            button.addEventListener('click', clearCounters);
        } else if (button.id === 'button-set') {
            button.addEventListener('click', setCounter);
        }
    });
    goOnParsed();

    function setCounter() {
        let id = prompt("Укажите id блока ");
        let myValue = +prompt("Укажите число ");
        if (typeof localStorage.getItem('obj') === 'string') {
            const parsed = JSON.parse(localStorage.getItem('obj'));
            parsed[id] = myValue;
            localStorage.setItem('obj', JSON.stringify(parsed));
        }
    }
    function goOnParsed() {
        if (typeof localStorage.getItem('obj') === 'string') {
            const parsed = JSON.parse(localStorage.getItem('obj'));
            for (element in parsed) {
                const elem = document.getElementById(element);
                elem.value = parsed[element];
            }
        } else {
            sirializeFrom(document.querySelector('form'));
        }
    }

    function clearCounters() {
        localStorage.removeItem('obj');
    }

    function counter(event) {
        event.preventDefault();
        let count = this.nextElementSibling;
        count.value = parseInt(count.value) + 1;
        sirializeFrom(document.querySelector('form'));
    }

    function sirializeFrom(form) {
        let obj = {};
        [].forEach.call(form, element => {
            if (typeof element.id === 'string' && element.id != 'button-counter1' && element.id != 'button-counter2' && element.id != 'button-cleaner' && element.id != 'button-set') {
                obj[element.id] = element.value;
            }
        });
        localStorage.setItem('obj', JSON.stringify(obj));
    }
}