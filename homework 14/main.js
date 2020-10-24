//робочий вариант 4 ч утра(после появления ES5 в котором добавили class)
class SuperMath {
    constructor() {

    }
    input(obj) {
        // obj = {
        //     x: parseInt(prompt('Укажите первое число ')),
        //     y: parseInt(prompt('Укажите второе число ')),
        //     znak: prompt('Укажите действие')
        // };
        obj.x = parseInt(prompt('Укажите первое число '))
        obj.y= parseInt(prompt('Укажите первое число '))
        obj.znak = prompt('Укажите действие')
        this.check(this);
    }
    check() {
        this.x = obj.x;
        this.y = obj.y;
        this.znak = obj.znak;
        switch (this.znak) {
            case '/':
                if (confirm(`Вы уверены что хотите x${this.znak}y? `) == true) {
                    console.log(`${this.x / this.y}`);
                } else {
                    this.input(this);
                }
                break
            case '+':
                if (confirm(`Вы уверены что хотите x${this.znak}y? `) == true) {
                    console.log(`${this.x + this.y}`);
                } else {
                    this.input(this);
                }
                break
            case '-':
                if (confirm(`Вы уверены что хотите x${this.znak}y? `) == true) {
                    console.log(`${this.x - this.y}`);
                } else {
                    this.input(this);
                }
                break
            case '*':
                if (confirm(`Вы уверены что хотите x${this.znak}y? `) == true) {
                    console.log(`${this.x * this.y}`);
                } else {
                    this.input(this);
                }
                break
            case '%':
                if (confirm(`Вы уверены что хотите x${this.znak}y? `) == true) {
                    console.log(`${this.x % this.y}`);
                } else {
                    this.input(this);
                }
                break
        }
    }
}
obj = {
    x: parseInt(prompt('Укажите первое число ')),
    y: parseInt(prompt('Укажите второе число ')),
    znak: prompt('Укажите действие')
};
// obj = {};
const p = new SuperMath();
p.check(obj);