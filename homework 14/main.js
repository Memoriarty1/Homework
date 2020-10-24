
class SuperMath {
    constructor() {
    }
    method() {
        let methods = {
            '/': (this.x / this.y),
            '*': (this.x * this.y),
            '+': (this.x + this.y),
            '-': (this.x - this.y),
            '%': (this.x % this.y)
        }
        for(let key in methods) {
            if(this.znak == key){
               return console.log( methods[key])
            }
        }
    }
    input() {
        obj = {
            x: parseInt(prompt('Укажите первое число ')),
            y: parseInt(prompt('Укажите второе число ')),
            znak: prompt('Укажите действие')
        };
        this.check(this);
    }
    check() {
        this.x = obj.x;
        this.y = obj.y;
        this.znak = obj.znak;
        if (confirm(`Вы уверены что хотите x${this.znak}y? `) == true) {
            this.method(this);
        }else{
            this.input(this);
        }
    }
}
obj = {
    x: parseInt(prompt('Укажите первое число ')),
    y: parseInt(prompt('Укажите второе число ')),
    znak: prompt('Укажите действие')
};

const p = new SuperMath();
p.check(obj);
