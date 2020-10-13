function filter(input, isEven) {
    timeArray = [];
    for (element of input) {
        if (isEven(element)) {
            timeArray.push(element);
        }   
    }
    return timeArray;
}

function isEven(x) { 
    return x % 2 == 0; 
}
input = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filter(input, isEven));
