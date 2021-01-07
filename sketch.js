/* Essential variables
Rows - a list of all rows
cells - a list of all cells
reset - reference to reset button
*/
let table = document.getElementById("grid-container");
let rows = document.getElementsByClassName("row-styles");
let cells = document.getElementsByClassName("cell-styles");
let reset = document.getElementById("reset-button");
let eraserButton = document.getElementById("eraser");
let rainbowButton = document.getElementById("change-color-rainbow");
let defaultButon = document.getElementById("change-color-default");
let shaderButton = document.getElementById("change-color-shader");
let removeGridButton = document.getElementById("remove-grid");
let tableSize = 16;

// starts page with 16x16 etch-a-sketch
createTable(tableSize, tableSize);
resetColor(); // prevents all black glitch on load

// Slider to alter size
var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("padSize");
output.innerHTML = rangeslider.value;
rangeslider.oninput = function() {
    output.innerHTML = this.value;

    for (i = 0; i < tableSize; i++) {
    rows[0].remove();
    }
    tableSize = rangeslider.value;
    createTable(tableSize, tableSize);
    resetColor();
}

function removeListeners() {
    table.removeEventListener("mouseover", shadingPen);
    table.removeEventListener("mouseover", blackPen);
    table.removeEventListener("mouseover", rainbowPen);
    table.removeEventListener("mouseover", eraser);
}

function makeRows(rowNum) {

    for (i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.classList.add("row-styles")
        table.appendChild(row);
        row.style.height = "calc(500px / " + tableSize + ")";
    }
}

function makeColumns(columns) {
    for (i = 0; i < columns; i++) {
        for (j = 0; j < rows.length; j++){
            let cell = document.createElement('div');
            cell.classList.add("cell-styles");
            rows[j].appendChild(cell);
            cell.style.width = "calc(5000px / " + tableSize +")";
        }
    }
}

function createTable (rowNum, columnNum) {
    makeRows(rowNum);
    makeColumns(columnNum);
}

// 'erases' color by resetting background of all cells to white
function resetColor() {
    removeListeners();
    for(i=0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white";
}}

reset.addEventListener("click", resetColor);

// 'eraser' button sets pen to white
function eraser(event){
    event.target.style.backgroundColor = "rgba(0,0,0,0)";
}
function addEraserToGrid() {
    removeListeners();
    table.addEventListener("mouseover", eraser)
}
eraserButton.addEventListener("click", addEraserToGrid);

// button to remove gridlines
function removeGrid() {
    console.log(removeGrid);
    for(i=0; i < cells.length; i++) {
        if (cells[i].style.border != "none") {
        cells[i].style.border = "none";
        } else {
        cells[i].style.border = "1px solid black";
        }
}}

removeGridButton.addEventListener("click", removeGrid)

// Default (black) pen functionality & button
function blackPen(event) {
    event.target.style.backgroundColor = "black";
}
function addBlackPenToGrid() {
    removeListeners();
    table.addEventListener("mouseover", blackPen)
}
defaultButon.addEventListener("click", addBlackPenToGrid);

// Shading pen (increase opacity 10% over each pass) functionality and button
function shadingPen(event) {
        if (event.target.style.backgroundColor === "white" || event.target.classList.contains("rainbow")) {
            event.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            event.target.classList.remove("rainbow");
        } else {
        let bgColor = event.target.style.backgroundColor;
        let alphaString = bgColor.slice(14,17);
        let alpha = parseFloat(alphaString);
        event.target.style.backgroundColor = `rgba(0, 0, 0, ${(alpha+0.1)})`;
        event.target.classList.remove("rainbow");
        }
}

function addShadingPenToGrid() {
    removeListeners();
    table.addEventListener("mouseover", shadingPen);
}

shaderButton.addEventListener("click", addShadingPenToGrid);

// Rainbow pen functionality & button
// generates 3 numbers between 0-255 which will be used as RGB values for rainbow pen
let colorValue = [];
function generateColorValue() {
    for (i = 0; i < 3; i++) {
        colorValue[i] = (Math.floor((Math.random() * 255)));
}
    return colorValue;
}

function rainbowPen(event){
        generateColorValue();
        event.target.style.backgroundColor = "rgb(" + colorValue[0] + "," + colorValue[1] + "," + colorValue[2] + ")";
        event.target.classList.add("rainbow");
}

function addRainbowPenToGrid() {
    removeListeners();
    table.addEventListener("mouseover", rainbowPen);
}

rainbowButton.addEventListener("click", addRainbowPenToGrid);