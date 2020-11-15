
const player = document.querySelector('.player')
const startValue = getComputedStyle(player)

let playerHeight = player.clientHeight;
let playerWidth = player.clientWidth;
let playerX = player.getBoundingClientRect().left;
let playerY = player.getBoundingClientRect().top;
let step = 50;
let h = 100;
ctrlFlag = false;
screenW = screen.width
screenH = screen.height
document.addEventListener('keydown', doJump);
document.addEventListener('keydown', sit);
document.addEventListener('keyup', up);
document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowRight':
            if (playerX <= screenW - playerWidth -  step ) {
                moveRight();
            }
            break;
        case 'ArrowLeft':
            if (playerX >= step ) {
                moveLeft();
            }
            break
        case 'ArrowUp':
            if (playerY >= step && !ctrlFlag) {
                moveTop();
            }
            break
        case 'ArrowDown':
            if (playerY <= screenH -  2 * playerHeight -  1.5 * step && !ctrlFlag ) {
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
    if (event.code == 'Space' && playerY - h >= 0 && !ctrlFlag) {
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