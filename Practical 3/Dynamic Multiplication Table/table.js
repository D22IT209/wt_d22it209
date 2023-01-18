function generateTable() {
    var rows = document.getElementById("rows").value;
    var cols = document.getElementById("cols").value;
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    var row, cell, text;
    for (var i = 0; i <= rows; i++) {
    row = document.createElement("tr");
    for (var j = 0; j <= cols; j++) {
    cell = document.createElement("td");
    text = document.createTextNode(i * j);
    cell.appendChild(text);
    row.appendChild(cell);
     }
    tableBody.appendChild(row);
     }
    table.appendChild(tableBody);
    document.getElementById("table").appendChild(table);
}