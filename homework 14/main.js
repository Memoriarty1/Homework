//робочий вариант 4 ч утра(после появления ES5 в котором добавили class)
class SuperMath {
    constructor() {

    }
    input() {
        obj = { x: parseInt(prompt('Укажите первое число ')), y: parseInt(prompt('Укажите второе число ')), znak: prompt('Укажите действие') };
        this.check(obj);
    }
    check() {
        this.x = obj.x;
        this.y = obj.y;
        this.znak = obj.znak;
        switch (this.znak) {
            case '/':
                if (confirm(`Вы уверены что хотите x${this.znak}y? `) == true) {
                    console.log(`${this.x / this.y}`)
                } else {
                    this.input()
                }
                break
            case '+':
                if (confirm(`Вы уверены что хотите x${this.znak}y? `) == true) {
                    console.log(`${this.x + this.y}`)
                } else {
                    this.input()
                }
                break
            case '-':
                if (confirm(`Вы уверены что хотите x${this.znak}y? `) == true) {
                    console.log(`${this.x - this.y}`)
                } else {
                    this.input()
                }

                break
            case '*':
                if (confirm(`Вы уверены что хотите x${this.znak}y? `) == true) {
                    console.log(`${this.x * this.y}`)
                } else {
                    this.input()
                }
                break
            case '%':
                if (confirm(`Вы уверены что хотите x${this.znak}y? `) == true) {
                    console.log(`${this.x % this.y}`)
                } else {
                    this.input()
                }
                break
        }
    }
}
obj = { x: parseInt(prompt('Укажите первое число ')), y: parseInt(prompt('Укажите второе число ')), znak: prompt('Укажите действие') };
// obj = {};
const p = new SuperMath();
p.check(obj);

// function SuperMath() {
//     // this.x = obj.x
//     // this.y = obj.y
//     // this.znak = obj.znak

// }
// SuperMath.prototype.input = function () {
//     obj = {
//         x: parseInt(prompt('Укажите первое число ')),
//         y: parseInt(prompt('Укажите второе число ')),
//         znak: prompt('Укажите действие')
//     }
//     this.x = obj.x
//     this.y = obj.y
//     this.znak = obj.znak

//     p.check()
// }
// SuperMath.prototype.check = function () {
//     switch (this.znak) {
//         case '/':
//             if (confirm(`Вы уверены что хотите x${this.znak}y? `) == true) {
//                 console.log(`${this.x / this.y}`)
//             } else {
//                 SuperMath.prototype.input()
//             }
//             break
//         case '+':
//             if (confirm(`Вы уверены что хотите x${obj.znak}y? `) == true) {
//                 console.log(`${obj.x + obj.y}`)
//             } else {
//                 SuperMath.prototype.input()
//             }
//             break
//         case '-':
//             if (confirm(`Вы уверены что хотите x${obj.znak}y? `) == true) {
//                 console.log(`${obj.x - obj.y}`)
//             } else {
//                 SuperMath.prototype.input()
//             }

//             break
//         case '*':
//             if (confirm(`Вы уверены что хотите x${obj.znak}y? `) == true) {
//                 console.log(`${obj.x * obj.y}`)
//             } else {
//                 SuperMath.prototype.input()
//             }
//             break
//         case '%':
//             if (confirm(`Вы уверены что хотите x${obj.znak}y? `) == true) {
//                 console.log(`${obj.x % obj.y}`)
//             } else {
//                 SuperMath.prototype.input()
//             }
//             break
//     }
// }
// obj = {
//     x: 12,
//     y: 3,
//     znak: '/'
// }
//  p = new SuperMath()
// p.check(obj)
// console.log(SuperMath.prototype.check)