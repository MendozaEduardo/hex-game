// Generates random RGB values
function randomColor() {
    //pick a red from 0-255//
    var r = Math.floor(Math.random() * 256);
    //green from 0-255//
    var g = Math.floor(Math.random() * 256);
    //blue from 0-255//
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

export function pickColor(cards, colorArray) {
    colorArray = [];
    cards.forEach((element) => {
        colorArray.push(element.color);
    });
    console.log("Color Array: ", colorArray);
    var random = Math.floor(Math.random() * colorArray.length);
    console.log("Color:", colorArray[random]);
    return colorArray[random];
}

export function resizeBoard() {
    Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight);
}

export function getRandomIndex(array) {
    var random = Math.floor(Math.random() * array.length);
    return random;
}

export function initializeGame(game) {
    game.cards = [];
    game.objective = null;
    //generate the colors
    var id = 0;
    while (game.cards.length < 6) {
        game.cards.push({
            id: id++,
            color: randomColor(),
        });
    }

    // pick a color within the colors array to be objective
    var random = Math.floor(Math.random() * game.cards.length);
    game.objective = game.cards[random].color;
}
