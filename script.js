const pagebtn1 = document.getElementById('pagebtn1');
const pagebtn2 = document.getElementById('pagebtn2');
const pagebtn3 = document.getElementById('pagebtn3');

pagebtn1.addEventListener('click', function() {
    showPage('home');
});

pagebtn2.addEventListener('click', function() {
    showPage('about');
});

pagebtn3.addEventListener('click', function() {
    showPage('simulation');
});

document.addEventListener('DOMContentLoaded', function() {
    const train = document.getElementById('train');
    const toggleButton = document.getElementById('toggle-button');
    let moving = false;
    
    toggleButton.addEventListener('click', function() {
        if (!moving) {
            // Start moving the train
            train.style.transition = 'left 5s linear';
            train.style.left = 'calc(100% - 50px)';
            toggleButton.textContent = 'Move Train';
            moving = true;
        } else {
            // Move the train back to the left
            train.style.transition = 'left 5s linear';
            train.style.left = '0';
            toggleButton.textContent = 'Move Train';
            moving = false;
        }
    });
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach( function(page) {
        page.style.display = page.id === pageId ? 'block' : 'none';
    });
}

function playSound(hi) {
    var sound = document.getElementById(hi);
    sound.play();
}