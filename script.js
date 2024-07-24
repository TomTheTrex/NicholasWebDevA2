document.addEventListener('DOMContentLoaded', () => {
    const train = document.getElementById('train');
    const startButton = document.getElementById('start-button');
    const resultMessage = document.getElementById('result-message');

    startButton.addEventListener('click', () => {
        const coalInput = document.getElementById('coal-input').value;
        const coalNeeded = 850; // 50 km * 17 kg/km (17 kg is 60 lbs converted to kg)

        resultMessage.textContent = '';
        train.style.transition = '';
        train.style.left = '0';

        if (coalInput < coalNeeded) {
            train.style.transition = 'left 2.5s linear';
            train.style.left = '50%';
            resultMessage.textContent = 'The train stopped halfway. Not enough coal.';
        } else {
            const excessCoal = coalInput - coalNeeded;
            train.style.transition = 'left 5s linear';
            train.style.left = 'calc(100% - 50px)';
            resultMessage.textContent = `You succeeded with ${excessCoal} KG of excess coal.`;
        }
    });
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = page.id === pageId ? 'block' : 'none';
    });
}