window.onload = function () {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.id === 'buttons') {
            button.addEventListener('click', counter);
        } else if(button.id === 'button-cleaner') {
            button.addEventListener('click', clearCountup);
        }
    });
    goOnParsed();

    function goOnParsed() {
        if (typeof localStorage.getItem('obj') === 'string') {
            const parsed = JSON.parse(localStorage.getItem('obj'));
            for (element in parsed) {
                const elem = document.getElementById(element);
                elem.value = parsed[element];
            }
        }
    }

    function clearCountup() {
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
            if (typeof element.id === 'string' && element.id != 'buttons', 'button-cleaner') {
                obj[element.id] = element.value;
            }
        });
        localStorage.setItem('obj', JSON.stringify(obj));
    }
}