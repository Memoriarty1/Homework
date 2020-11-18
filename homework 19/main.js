
const player = document.querySelector('.player')
const startValue = getComputedStyle(player)

let playerHeight = player.clientHeight;
let playerWidth = player.clientWidth;
let playerX = player.getBoundingClientRect().left;
let playerY = player.getBoundingClientRect().top;
let step = 50;
let h = 100;

let screenW = screen.width
let screenH = screen.height
document.addEventListener('keydown', doJump);
document.addEventListener('keydown', sit);
document.addEventListener('keyup', up);
document.addEventListener('keydown', upAndDown);
document.addEventListener('keydown', leftAndRight);

function upAndDown(event) {
    switch (event.code) {
        case 'ArrowUp':
            if (playerY >= step  ) {
                moveTop();
            }
            break
        case 'ArrowDown':
            if (playerY <= screenH - 2 * playerHeight - 1.5 * step ) {
                moveBottom();
            }
            break
    }
};
function leftAndRight(event) {
    switch (event.code) {
        case 'ArrowRight':
            if (playerX <= screenW - playerWidth - step) {
                moveRight();
            }
            break;
        case 'ArrowLeft':
            if (playerX >= step) {
                moveLeft();
            }
            break
    }
}

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
    if (event.code == 'Space' && playerY - h >= 0 ) {
        let jump = playerY - h;
        player.style.top = jump + 'px';
        setTimeout(position, 900);
    }
}
function position() {
    player.style.top = playerY + 'px';

}
function sit(event) {
    if (event.ctrlKey) {
        let sitPosWidth = playerWidth * 1.15
        let sitPosHeight = playerHeight * 0.6
        player.style.width = sitPosWidth + 'px'
        player.style.height = sitPosHeight + 'px'
        document.addEventListener('keydown', leftAndRight);
        document.removeEventListener('keydown', upAndDown);
        document.removeEventListener('keydown', doJump);

    }

}
function up() {
    player.style.height = playerHeight + 'px'
    player.style.width = playerWidth + 'px'
    document.addEventListener('keydown', upAndDown);
    document.addEventListener('keydown', leftAndRight);
    document.addEventListener('keydown', doJump);
}