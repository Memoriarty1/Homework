// document.addEventListener('keydown', function (event) {
//     console.log(event.key)

//     if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//         console.log('Are you  Ahuel??');
//     } else if (event.repeat == true) {
//         alert('POVTOR')
//     }
// });

// input.onkeydown = function () {
//     input.addEventListener('onkeydown', check);
// }
// function check(key) {
//     return (key >= '0' && key <= '9') || key == '+' || key == '-' || key == '-' || key == '(' || key == ')' ||
//         key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
// }

function runOnKeys(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function (event) {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
    
    pressed.clear();
    func();

});
document.addEventListener('keyup', function(event){
    pressed.delete(event.code)
})
}

runOnKeys(()=> alert('hallo pess'), 'KeyW','KeyQ')
// function runOnKeys(func, ...codes) {
//     let pressed = new Set();

//     document.addEventListener('keydown', function(event) {
//       pressed.add(event.code);

//       for (let code of codes) { // все ли клавиши из набора нажаты?
//         if (!pressed.has(code)) {
//           return;
//         }
//       }

//       // да, все

//       // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
//       // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
//       // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
//       pressed.clear();

//       func();
//     });

//     document.addEventListener('keyup', function(event) {
//       pressed.delete(event.code);
//     });

//   }

//   runOnKeys(
//     () => alert("Привет!"),
//     "KeyQ",
//     "KeyW"
//   )
