//TODO: import recieved entried into json file, store in server? maybe use php?

function addFunction() {
  //adds data to table
  var name = document.getElementById("nameText").value;
  var course = document.getElementById("courseText").value;
  var idNum = document.getElementById("idText").value;
  var table = document.getElementById("userTable");
  var rowLength = table.rowLength;
  if (name == "" || course == "" || idNum == "") {
    alert("Please enter all necessary information.");
  } else {
    var row = table.insertRow(rowLength);
    var cellName = row.insertCell(0);
    var cellCourse = row.insertCell(1);
    var cellId = row.insertCell(2);
    cellName.innerHTML = name;
    cellCourse.innerHTML = course;
    cellId.innerHTML = idNum;
  }
}

function deleteRows() {
  //linearly deletes every row of the table
  var rowCount = userTable.rows.length;
  if (rowCount == 1) {
    alert("No currently registered data.");
  } else {
    var r = confirm("Delete all data?");
    if (r == true) {
      for (var i = rowCount - 1; i > 0; i--) {
        userTable.deleteRow(i);
      }
    }
  }
}

function undoEntry() {
  //checks for nth row and removes it
  var rowCount = userTable.rows.length;
  if (rowCount == 1) {
    alert("No currently registered data.");
  } else {
    var r = confirm("Undo last entry?");
    if (rowCount >= 2 && r == true) {
      userTable.deleteRow(rowCount - 1);
    }
  }
}

window.onbeforeunload = function (event) {
  //prompt user before refresh/exiting page
  return confirm("Confirm refresh");
};
