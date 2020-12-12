document.addEventListener("DOMContentLoaded", function (event) {

    let hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let flipperBtn = document.getElementById("flipperBtn");
    let colourName = document.getElementById("colourName");

    flipperBtn.addEventListener("click", function () {
        let hashColor = "#";
        for (let hexCharacter = 0; hexCharacter < 6; hexCharacter++) {
            hashColor += hexCharacters[getRandomHexCharacters()];
        };

        colourName.style.color = hashColor;
        colourName.textContent = hashColor;
        document.body.style.backgroundColor = hashColor;

    });

    function getRandomHexCharacters() {
        return Math.floor(Math.random() * hexCharacters.length);
    };

























});