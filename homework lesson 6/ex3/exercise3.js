function doMath(x, znak, y) {
    return znak() 
}
function znak() {
    switch(znachok){
        case '+':
            return  x + y;   
        case '-':
            return  x - y;
        case '*':
            return  x * y;
        case '/':
            if(y != 0){
            return  x / y;
        }else {
            return 'Нельзя делить на 0';
        }
        case '%':
            if(y != 0){
            return  x % y;
        }else {
            return 'Нельзя делить на 0';
        }
        case '^':
            return  x ** y;
    }
}
let x = +prompt('Укажите первое число');
let znachok = prompt('Укажите действие');
let y = +prompt('Укажите второе число');

console.log(doMath(x,znak, y))