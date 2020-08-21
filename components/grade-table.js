class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades) {
    console.log('grades: ', grades);

    var tableBody = this.tableElement.querySelector('tbody');
    tableBody.textContent = '';

    for (var i = 0; i < grades.length; i++) {
      var tableRow = document.createElement('tr');

      var student1 = document.createElement("td");
      student1.textContent = grades[i].name;

      var student2 = document.createElement('td');
      student2.textContent = grades[i].course;

      var student3 = document.createElement('td');
      student3.textContent = grades[i].grade;

      tableRow.append(student1, student2, student3);
      tableBody.append(tableRow);

    }
  }
}
