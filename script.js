document.addEventListener('DOMContentLoaded', function () {
    const diceElement = document.getElementById('dice');
    const rollButton = document.getElementById('roll-button');

    rollButton.addEventListener('click', rollDice);

    function rollDice() {
        const randomNumber = getRandomNumber(1, 6);
        diceElement.textContent = randomNumber;
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
