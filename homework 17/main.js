function getValueFromInput(){
    const inputElems = document.querySelectorAll('input')
    const textareaElem = document.querySelector('textarea')

    inputElems.forEach(item => {
        textareaElem.value += `${item.value}`
    })
}

setInterval(getValueFromInput, 8000)