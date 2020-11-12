function getValueFromInput() {
    const inputElems = document.querySelectorAll('input');
    const textareaElem = document.querySelector('textarea');
    let   sometext = ''
    
    inputElems.forEach(item => {
        if (item.value) {
            sometext += `${item.value},`;
        }
    })
   
    return textareaElem.value = sometext.slice(0,-1);
}

setInterval(getValueFromInput, 8000);