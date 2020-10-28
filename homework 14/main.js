// //переделать под классы обычные так как на паре
// class SuperMath {
//     constructor() {
//     }
//     method() {
//         let methods = {
//             '/': (this.x / this.y),
//             '*': (this.x * this.y),
//             '+': (this.x + this.y),
//             '-': (this.x - this.y),
//             '%': (this.x % this.y)
//         }
//         for(let key in methods) {
//             if(this.znak == key){
//                return console.log( methods[key])
//             }
//         }
//         methods[ob.znak](x, y)
//     }
//     input() {
//         obj = {
//             x: parseInt(prompt('Укажите первое число ')),
//             y: parseInt(prompt('Укажите второе число ')),
//             znak: prompt('Укажите действие')
//         };
//         this.check(this);
//     }
//     
//     }
// }
// obj = {
//     x: parseInt(prompt('Укажите первое число ')),
//     y: parseInt(prompt('Укажите второе число ')),
//     znak: prompt('Укажите действие')
// };

// const p = new SuperMath();
// p.check(obj);


function SuperMath() {
    this.check = function (obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.znak = obj.znak;
        if (confirm(`Вы уверены что хотите x${this.znak}y? `) == true) {
            this.method(this.x, this.y , this.znak);
        } else {
            this.input(this);
        }
    }
}
SuperMath.prototype.method = function() {
        let methods = {
            '/': (this.x / this.y),
            '*': (this.x * this.y),
            '+': (this.x + this.y),
            '-': (this.x - this.y),
            '%': (this.x % this.y)
        }
        for (let key in methods) {
            if (this.znak == key) {
                return console.log(methods[key])
        }
        
        // methods[ob.znak](x, y)
    }
    console.log('Такого математического действия нету')
}
SuperMath.prototype.input = function(obj) {
        
            this.x = parseInt(prompt('Укажите первое число ')),
            this.y = parseInt(prompt('Укажите второе число ')),
            this.znak = prompt('Укажите действие')
        
        this.method(this.x, this.y , this.znak);
    }
var obj = {x: 12, y: 2, znak: '/'}
const p = new SuperMath();
p.check(obj);
