function rollDice() {
    const numofDice = document.getElementById("numofdice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const diceValues = [];
    const images = [];

    for (let i = 0; i < numofDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        diceValues.push(value);
        images.push(`<img src="dice_images/dice${value}.png" alt="Dice showing ${value}">`);
    }

    diceResult.textContent = `Dice: ${diceValues.join(", ")}`;
    diceImages.innerHTML = images.join("");
}