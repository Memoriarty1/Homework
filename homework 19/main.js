
const player = document.querySelector('.player')
const startValue = getComputedStyle(player)

let playerHeight = player.clientHeight;
let playerWidth = player.clientWidth;
let playerX = player.getBoundingClientRect().left;
let playerY = player.getBoundingClientRect().top;
let step = 50;
let h = 100;
let ctrlFlag = false;

document.addEventListener('keydown', doJump);
document.addEventListener('keydown', sit);
document.addEventListener('keyup', up);
document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowRight':
            if (ctrlFlag == false || (ctrlFlag == true && event.repeat)) {
                moveRight();
            }
            break;
        case 'ArrowLeft':
            if (ctrlFlag == false || (ctrlFlag == true && event.repeat)) {
                moveLeft();
            }
            break
        case 'ArrowUp':
            if (ctrlFlag == false) {
                moveTop();
            }
            break
        case 'ArrowDown':
            if (ctrlFlag == false) {
                moveBottom();
            }
            break
    }
});

function moveRight() {
    playerX = playerX + step;
    player.style.left = playerX + 'px';
}
function moveLeft() {
    playerX = playerX - step;
    player.style.left = playerX + 'px';
}
function moveTop() {
    playerY = playerY - step;
    player.style.top = playerY + 'px';
}
function moveBottom() {
    playerY = playerY + step;
    player.style.top = playerY + 'px';
}
function doJump(event) {
    if (event.code == 'Space') {
        player.style.transition = 'all .9s'
        let jump = playerY - h;
        player.style.top = jump + 'px';
        setTimeout(position, 900);
    }
}

function position() {
    return player.style.top = playerY + 'px';

}
function sit(event) {
    if (event.ctrlKey) {
        let sitPosWidth = playerWidth * 1.15
        let sitPosHeight = playerHeight * 0.6
        player.style.width = sitPosWidth + 'px'
        player.style.height = sitPosHeight + 'px'
        ctrlFlag == true;
    }

}
function up() {
    player.style.height = playerHeight + 'px',
        player.style.width = playerWidth + 'px'
    ctrlFlag == false;
}