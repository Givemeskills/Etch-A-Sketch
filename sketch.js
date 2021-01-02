/* Essential variables
Rows - a list of all rows
cells - a list of all cells
reset - reference to reset button
*/
let table = document.getElementById("grid-container");
let rows = document.getElementsByClassName("row-styles");
let cells = document.getElementsByClassName("cell-styles");
let reset = document.getElementById("reset-button");
let eraser = document.getElementById("eraser");
let rainbowButton = document.getElementById("change-color-rainbow");
let defaultButon = document.getElementById("change-color-default");
let tableSize = 16;

function makeRows(rowNum) {

    for (i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.classList.add("row-styles")
        table.appendChild(row);
        row.style.height = "calc(600px / " + tableSize + ")";
    }
}

function makeColumns(columns) {
    for (i = 0; i < columns; i++) {
        for (j = 0; j < rows.length; j++){
            let cell = document.createElement('div');
            cell.classList.add("cell-styles");
            rows[j].appendChild(cell);
            cell.style.width = "calc(600px / " + tableSize +")";
        }
    }
}

function createTable (rowNum, columnNum) {
    makeRows(rowNum);
    makeColumns(columnNum);
}

// adds drawing functionality
table.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "black";
})

// 'erases' color by resetting background of all cells to white
function resetColor() {
    for(i=0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white";
}}

// starts page with 16x16 etch-a-sketch
createTable(tableSize, tableSize);
resetColor(); // prevents all black glitch on load

// reset button to clear sketchpad
reset.addEventListener("click", resetColor);

// 'eraser' button sets pen to white
eraser.addEventListener("click", function(even) {
    table.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = "white";
    })

})

// button to change color of pen to default (black)
defaultButon.addEventListener("click", function(event){
    
    table.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = "black";
    })

})

// button to change color of pen to rainbow
rainbowButton.addEventListener("click", function(event) {

    table.addEventListener("mouseover", function(event){
        generateColorValue();
        event.target.style.backgroundColor = "rgb(" + colorValue[0] + "," + colorValue[1] + "," + colorValue[2] + ")";

    })
    
}) 

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

// generates 3 numbers between 0-255 which will be used as RGB values
let colorValue = [];
function generateColorValue() {
    for (i = 0; i < 3; i++) {
        colorValue[i] = (Math.floor((Math.random() * 255)));
}
    return colorValue;
}





