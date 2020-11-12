let player = document.querySelector('.player')
const startValue = getComputedStyle(player)
stepLeft = 50;
step = 50;
h = 100;
up = 500;
document.addEventListener('keydown',doJump);
// document.addEventListener('keyup',endJump);
// document.addEventListener('keydown',seat);
// document.addEventListener('keyup',up);
document.addEventListener('keydown', doStep);
// document.removeEventListener('keyup',doStep);

function doStep(event) {
    if (event.code == 'ArrowRight') {
        stepLeft += step
        player.style.left = stepLeft + 'px';
        console.log(player.style.right)

    }
    if(event.code =='ArrowLeft'){
        stepLeft -= step
        player.style.left = stepLeft + 'px';
    }
}
function doJump(event) {
    if (event.code == 'Space') {
        player.style.transition = 'all .9s'
        let jump = (parseInt(startValue.top) - h)
        player.style.top = jump +'px';
        console.log(jump)
        // player.style.top =`${h}px`;
        setTimeout(poss, 900);
    }
}

function poss() {
    jump = (parseInt(startValue.top) + h)
    return player.style.top = jump +'px';
}