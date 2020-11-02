// debugger
function Field(width, height) {
    this.filler = Field.fieldFiller(width, height);
}
Field.fieldFiller = function (width, height) {
    var array = new Array(width);
    for (var i = 0; i < width; i++) {
        array[i] = new Array(height);
        for (var j = 0; j < height; j++) {
            array[i][j] = 0;
        }
    }
    return array;
}

Field.prototype.renderField = function () {
    document.write('<hr\>');
    for (let i = 0; i < this.filler.length; i++) {
        document.write(this.filler[i] + '<br\>');
    }
    document.write('<hr\>');
}
Field.prototype.clearField = function (person) {
        this.filler[person.positionY][person.positionX] = 0;
}
Field.prototype.changeSize = function (newX, newY) {
    this.filler = Field.fieldFiller(newX, newY);
}
function Person(name, XPosition, YPosition) {
    this.name = name;
    this.positionX = XPosition;
    this.positionY = YPosition;
    this.firstXPos = XPosition;
    this.firstYPos = YPosition;
}
Person.prototype.start = function () {
    this.filler[this.positionY][this.positionX] = 1;
}
Person.prototype.go = function go(direction, step) {
    this.filler[this.positionY][this.positionX] = 0;
    switch (direction) {
        case 'left':
            this.positionX -= step;
            break;
        case 'right':
            this.positionX += step;
            break;
        case 'top':
            this.positionY -= step
            break;
        case 'bottom':
            this.positionX += step;
            break;
    }

    this.start();
}

Person.prototype.resetPosition = function () {
    this.filler[this.positionY][this.positionX] = 0;
    this.positionX = this.firstXPos;
    this.positionY = this.firstYPos;
    this.filler[this.positionY][this.positionX] = 1;
}

var field = new Field(10, 10);
Person.prototype.__proto__ = Object.create(field);
var person = new Person('Igor', 2, 5);

field.renderField();
person.start();
field.renderField();
person.go('bottom', 2);
person.go('right', 3);
field.renderField();
person.resetPosition();
field.renderField();
field.clearField(person);
field.renderField();


