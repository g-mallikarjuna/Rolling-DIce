const displayResult = document.getElementById('rollDiceResult');
const displayImage = document.getElementById('imageResult');
function rolldice() {
    const inputValue = document.getElementById('resultValue');
    const numberroll = inputValue.value
    const values = [];
    const images = [];
    for (let index = 0; index < numberroll; index++) {
        const numberValue = Math.floor(Math.random() * 6) + 1;
        values.push(numberValue);
        images.push(`<img src="image/${numberValue}.svg" width=100">`)
    }
    displayResult.textContent = `Dice: ${values.join(", ")}`;
    displayImage.innerHTML = images.join(" ");
}
