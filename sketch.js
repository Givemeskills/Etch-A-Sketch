
let table = document.querySelector("#gridContainer");
let rows = document.getElementsByClassName("rowStyles");
let column = document.getElementsByClassName("cellStyles")

function makeRows(rowNum) {

    for (i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.classList.add("rowStyles")
        table.appendChild(row);
    }
}

function makeColumns(columns) {
    for (i = 0; i < columns; i++) {
        for (j = 0; j < rows.length; j++){
            let cell = document.createElement('div');
            cell.classList.add("cellStyles");
            rows[j].appendChild(cell);
        }
    }
}

function createTable (r, c) {
    makeRows(r);
    makeColumns(c);
}