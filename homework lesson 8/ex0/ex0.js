
function convert(array, newArray) {
    newArray = newArray || [];
    for(let i = 0; i < array.length; i++) {
        if (typeof (array[i]) == 'object') {
            convert(array[i], newArray); 
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
array = [[1, 2, 3, [3.1]], 4, [5, 6, [7, 8]]];
console.log(convert(array));

// // // obj = {}

// // // obj.a = 10;
// // // obj.b = 12;
// // // obj.c = {};
// // // obj.c.f = 13
// // // console.log(obj)
// obj = { a: 10, b: 12, c: { f: 13 } }
// arrayFinal = [];
// function convert(obj) {
//     for (element in obj) {
//         if (typeof element === 'object') {
//             convert(element); 
//         } else {
//             arrayFinal.push(element[element]);
//         } 
//     }
//     return arrayFinal;
// }

// console.log(convert(obj), 'obj');