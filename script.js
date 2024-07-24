document.addEventListener('DOMContentLoaded', () => {
    const train = document.getElementById('train');
    const startButton = document.getElementById('start-button');
    const coalConsumedDisplay = document.getElementById('coal-consumed');

    let distance = 0; // Distance covered in kilometers
    const totalDistance = 50; // Total distance in kilometers
    const coalPerKilometer = 27.2 / 1.6; // Coal consumption per kilometer in KG

    startButton.addEventListener('click', () => {
        train.style.transition = `left ${totalDistance * 2}s linear`;
        train.style.left = 'calc(100% - 50px)';

        let interval = setInterval(() => {
            distance += 0.5; // Increment distance covered every second
            if (distance > totalDistance) {
                distance = totalDistance;
                clearInterval(interval);
            }
            const coalConsumed = (distance * coalPerKilometer).toFixed(2);
            coalConsumedDisplay.textContent = `Coal Consumed: ${coalConsumed} KG`;
        }, 1000);
    });
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = page.id === pageId ? 'block' : 'none';
    });
}
