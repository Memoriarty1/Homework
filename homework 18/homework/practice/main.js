const box = document.querySelector('.quad');

function Handler1(event) {
    box.style.position = 'absolute';
    box.style.left = `${event.clientX}px`;
    box.style.top = `${event.clientY}px`;
}

box.onmousedown = function () {
    console.log('onmousedown')
    document.addEventListener('mousemove', Handler1);
}
box.onmouseup = function () {
    console.log('onmouseup')
    document.removeEventListener('mousemove', Handler1);

}