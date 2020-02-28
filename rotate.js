const onButton = document.querySelector('#turn-rotation-on');
const offButton = document.querySelector('#turn-rotation-off');

onButton.addEventListener('click', turnOnRotation);
offButton.addEventListener('click', turnRotationOff);

function turnOnRotation() {
    const thingsToRotate = document.querySelectorAll('.rotate-off');
    for (let i = 0; i < thingsToRotate.length; i++) {
        if (i % 2 == 0) {
            thingsToRotate[i].className = 'rotate-right';
        } else {
            thingsToRotate[i].className = 'rotate-left';
        }
    }
}

function turnRotationOff() {
    const thingsToRotate = document.querySelectorAll('.rotate-right, .rotate-left');
    for (let i = 0; i < thingsToRotate.length; i++) {
        thingsToRotate[i].className = 'rotate-off';
    }
}