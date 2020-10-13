function arrayFiller(size, max, min) {
    array = new Array(size);
    for (i = 0; i < size; i++) {
        array[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return array;
}

console.log(arrayFiller(prompt('Укажите длину массива', ''), prompt('Укажите максимальное значение', ''), prompt('Укажите минимальное значение', '')), 'result');