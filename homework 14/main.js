
function SuperMath() {
    this.check = function (obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.znak = obj.znak;
        if (confirm(`Вы уверены что хотите ${this.x}${this.znak}${this.y}?`) == true) {
            this.toDo(this);
        } else {
            this.input(this);

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
    SuperMath.prototype.toDo = function () {
        let methods = {
            '/': (this.x / this.y),
            '*': (this.x * this.y),
            '+': (this.x + this.y),
            '-': (this.x - this.y),
            '%': (this.x % this.y)
        }
        for(let key in methods) {
            if(this.znak == key){
               return console.log( methods[key]);
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