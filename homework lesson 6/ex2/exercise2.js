// function compareMaxSum(array, secondArray) {
//     sumFirst = sum(array);
//     sumSecond = sum (secondArray);
//     return sumFirst > sumSecond? array : secondArray
// }

// function sum(array) {
//     sumElements = 0;
    
//     for ( var i = 0 ;  i < array.length  ; i++ ) {
//         item = array[i]

//         if (isNumber(item)){
//         sumElements += item
//         }
//     }
//     return sumElements
// }

// function isNumber (value) {
//     return !isNaN(value)
// }

// result = compareMaxSum([1, 2, 3] , [4, 5, 6]);
// console.log(result, 'result')
function compareMaxSum() {
maxI = 0;
max = 0;
for(var i = 0; i < arguments.length; i++){
    maxSum = sum(arguments[i]);
    if (i == 0) {
        max = maxSum;
        maxI = i;
    }
    if (maxSum > max) {
        max = maxSum;
        maxI = i;
    }
}
    console.log(arguments, maxI);
    return arguments[maxI];
}

function sum(array) {
    sumElements = 0;
    for (var i = 0; i < array.length; i++) {
        item = array[i];

        if (isNumber(item)) {
        sumElements += item;
        }
    }
    return sumElements;
}
function isNumber (value) {
    return !isNaN(value);
}

result = compareMaxSum([1, 2, 3] ,[10, 12, 33] , [4, 5, 6]);
console.log(result, 'result')