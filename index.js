function addData() {
    // Get input values
    let name =
        document.getElementById("nameInput").value;
    let author =
        document.getElementById("authorInput").value;
    let isbn =
        document.getElementById("isbnInput").value;
    let genre =
        document.getElementById("genreInput").value;
    let pub =
        document.getElementById("pubInput").value;
    let year =
        document.getElementById("yearInput").value;
    let qty =
        document.getElementById("qtyInput").value;
    
    // Get the table and insert a new row at the end
    let table = document.getElementById("outputTable");
    let newRow = table.insertRow(table.rows.length);
    
    // Insert data into cells of the new row
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = author;
    newRow.insertCell(2).innerHTML = isbn;
    newRow.insertCell(3).innerHTML = genre;
    newRow.insertCell(4).innerHTML = pub;
    newRow.insertCell(5).innerHTML = year;
    newRow.insertCell(6).innerHTML = qty;
    newRow.insertCell(7).innerHTML =
        '<button onclick="editData(this)">Edit</button>'+
        '<button onclick="deleteData(this)">Delete</button>';
    
    // Clear input fields
    clearInputs();
}

function editData(button) {
    
    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;
    
    // Get the cells within the row
    let nameCell = row.cells[0];
    let authorCell = row.cells[1];
    let isbnCell = row.cells[2];
    let genreCell = row.cells[3];
    let pubCell = row.cells[4];
    let yearCell = row.cells[5];
    let qtyCell = row.cells[6];
    
    // Prompt the user to enter updated values
    let nameInput =
        prompt("Enter the updated name:",
            nameCell.innerHTML);
    let authorInput =
        prompt("Enter the updated Author's Name:",
            authorCell.innerHTML);
    let isbnInput =
        prompt("Enter the updated ISBN:",
            isbnCell.innerHTML
        );
    let genreInput =
        prompt("Enter the updated genre:",
            genreCell.innerHTML
        );
    let pubInput =
        prompt("Enter the updated publisher name:",
            pubCell.innerHTML
        );
    let yearInput =
        prompt("Enter the updated year of publication:",
            yearCell.innerHTML
        );
    let qtyInput =
        prompt("Enter the updated quantity:",
            qtyCell.innerHTML
        );
    
    // Update the cell contents with the new values
    nameCell.innerHTML = nameInput;
    authorCell.innerHTML = authorInput;
    isbnCell.innerHTML = isbnInput;
    genreCell.innerHTML = genreInput;
    pubCell.innerHTML = pubInput;
    yearCell.innerHTML = yearInput;
    qtyCell.innerHTML = qtyInput;
}


function deleteData(button) {
    
    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Remove the row from the table
    row.parentNode.removeChild(row);
}
function clearInputs() {
    
    // Clear input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("isbnInput").value = "";
    document.getElementById("genreInput").value = "";
    document.getElementById("pubInput").value = "";
    document.getElementById("yearInput").value = "";
    document.getElementById("qtyInput").value = "";
}

