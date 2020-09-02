class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    console.log('grades: ', grades);

    var tableBody = this.tableElement.querySelector('tbody');
    tableBody.textContent = '';

    for (var i = 0; i < grades.length; i++) {
    var renderItems = this.renderGradeRow(grades[i],this.deleteGrade);
    tableBody.appendChild(renderItems);
      if (grades.length === 0) {
        var p = document.getElementById("pTag");
        p.classList.remove("none");
      }
    }
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(grade, deleteGrade) {
    var tableRow = document.createElement("tr");
    var student1 = document.createElement("td");
    var student2 = document.createElement("td");
    var student3 = document.createElement("td");
    var student4 = document.createElement("td");
    tableRow.appendChild(student1);
    tableRow.appendChild(student2);
    tableRow.appendChild(student3);
    tableRow.appendChild(student4);

    var button = document.createElement("button");
    student4.appendChild(button);
    button.classList = "btn";
    button.type = "button";

    student1.textContent = grade.name;
    student2.textContent = grade.course;
    student3.textContent = grade.grade;
    button.textContent = "DELETE";
    button.addEventListener("click", function () {
      deleteGrade(grade.id)
    });
    return tableRow;
  }
}
