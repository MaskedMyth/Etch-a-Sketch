// JavaScript source code
let container = document.querySelector(".container");

let buttons = document.querySelectorAll(".settings .buttons button");

let size

function makeSquare() {
    let newSquare = document.createElement("div");
    newSquare.addEventListener("mouseenter", () => {
        newSquare.style.backgroundColor = "black";
    })
    container.appendChild(newSquare);
}

function deleteGrid() {
    let divs = document.querySelectorAll(".container div");
    divs.forEach(div => {
        div.remove();
    })
}

function makeGrid(size) {
    deleteGrid();

    for (let i = 1; i <= (size * size); i++) {
        makeSquare();
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const newSize = button.dataset.size;

        if (newSize == "Reset" && size) {
            makeGrid(size)
        } else {
            size = parseInt(newSize, 10);

            const cols = Math.sqrt(size);
            container.style.setProperty('--cols', size);

            makeGrid(size);
        }
    })
})