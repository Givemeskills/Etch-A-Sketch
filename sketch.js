/* Essential variables
Rows - a list of all rows
cells - a list of all cells
reset - reference to reset button
*/
let table = document.getElementById("grid-container");
let rows = document.getElementsByClassName("row-styles");
let cells = document.getElementsByClassName("cell-styles");
let reset = document.getElementById("reset-button");

function makeRows(rowNum) {

    for (i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.classList.add("row-styles")
        table.appendChild(row);
    }
}

function makeColumns(columns) {
    for (i = 0; i < columns; i++) {
        for (j = 0; j < rows.length; j++){
            let cell = document.createElement('div');
            cell.classList.add("cell-styles");
            rows[j].appendChild(cell);
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
    console.log(event.target);
})

// 'erases' color by resetting background of all cells to white
function resetColor() {
    for(i=0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white";
}}

reset.addEventListener("click", resetColor);

// starts page with 16x16 etch-a-sketch
createTable(16,16);