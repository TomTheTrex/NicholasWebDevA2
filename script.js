document.addEventListener('DOMContentLoaded', () => {
    const train = document.getElementById('train');
    const startButton = document.getElementById('start-button');

    startButton.addEventListener('click', () => {
        train.style.transition = 'left 5s linear';
        train.style.left = 'calc(100% - 50px)';
    });
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = page.id === pageId ? 'block' : 'none';
    });
}

function playSound() {
    var sound = document.getElementById("trainSound");
    sound.play();
}