
function SuperMath() {
    this.check = function (obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.znak = obj.znak;
        switch (this.znak) {
            case '/':
                if (confirm(`Вы уверены что хотите ${this.x}${this.znak}${this.y}? `) == true) {
                    console.log(`${this.x / this.y}`);
                } else {
                    this.input(this);
                }
                break
            case '+':
                if (confirm(`Вы уверены что хотите ${this.x}${this.znak}${this.y}? `) == true) {
                    console.log(`${this.x + this.y}`);
                } else {
                    this.input(this);
                }
                break
            case '-':
                if (confirm(`Вы уверены что хотите ${this.x}${this.znak}${this.y}? `) == true) {
                    console.log(`${this.x - this.y}`);
                } else {
                    this.input(this);
                }
                break
            case '*':
                if (confirm(`Вы уверены что хотите ${this.x}${this.znak}${this.y}? `) == true) {
                    console.log(`${this.x * this.y}`);
                } else {
                    this.input(this);
                }
                break
            case '%':
                if (confirm(`Вы уверены что хотите ${this.x}${this.znak}${this.y}? `) == true) {
                    console.log(`${this.x % this.y}`);
                } else {
                    this.input(this);
                }
                break
        }
    }
}
SuperMath.prototype.input = function () {
    obj = {
        x: parseInt(prompt('Укажите первое число ')),
        y: parseInt(prompt('Укажите второе число ')),
        znak: prompt('Укажите действие')
    };
    this.check(obj);
}
obj = {
    x: parseInt(prompt('Укажите первое число ')),
    y: parseInt(prompt('Укажите второе число ')),
    znak: prompt('Укажите действие')
};

const p = new SuperMath();
p.check(obj);