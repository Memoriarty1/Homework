var user = { name: 'Алексей' };
function func(surname, patronymic) {
    alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname);
}
func.apply(user, ['Петров', 'Алексеевич']);

// var user = {
//     name: 'Алексей',
//     func: function (surname, patronymic) {
//         alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname);
//     }
// };
// function getUserInput(patronymic, surname, callback, callbackObj) {
//     callback.apply(callbackObj, [patronymic, surname]);
// };
// getUserInput('Петров', 'Алексеевич', user.func, user);
