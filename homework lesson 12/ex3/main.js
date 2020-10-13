// var user = {
//     name: 'Алексей',
//     func: function (surname, patronymic) {
//         alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname);
//     }
// };
// var bindTest = user.func.bind(user);
// bindTest('Петров', 'Алексеевич');

var user = {name: 'Алексей'};
function func (surname, patronymic) {
    alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname);
}
var func = func.bind(user);
func('Николаев', 'Иванович');