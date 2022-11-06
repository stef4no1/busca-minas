let board = [];
let rows = 8;
let columns = 8;

let minesCount = 10;
let minesLocation = []; 

let tilesClicked = 0;
let flagEnabled = false;

let gameOver = false;

window.onload = function() {
    startGame();
}

function setMines() {
    let minesLeft = minesCount;
    while (minesLeft > 0) { 
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        let id = r.toString() + "-" + c.toString();

        if (!minesLocation.includes(id)) {
            minesLocation.push(id);
            minesLeft -= 1;
        }
    }
}