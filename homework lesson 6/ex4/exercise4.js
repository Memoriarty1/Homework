function textSlicer(myString,arrayDelEl) {
    splitedMyString = myString.split('');;
    result = splitedMyString.filter(function(myTrueString) {
        return !arrayDelEl.includes(myTrueString);
    });
    return  result.join('');
}
myString = 'hello world';
arrayDelEl = ['l', 'd'];

console.log(textSlicer(myString,arrayDelEl));


