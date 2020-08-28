class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
  }

  handleGetGradesError(error) {
    console.error('this is the error: ', [error]);


  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);

    var total = 0;
    for (var gradeList = 0; gradeList < grades.length; gradeList++) {
      parseInt(grades[gradeList].grade, 10);
      total += grades[gradeList].grade;
    }
    var averageOfGrades = total / (grades.length);
    this.pageHeader.updatedAverage(averageOfGrades);
  }

  getGrades() {
    $.ajax({
      type: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      // API KEY: "lP7bPRsj"
      headers: { "x-access-token": "lP7bPRsj" },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
  }

  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }

  createGrade(name, course, grade) {
    // console.log(name, course, grade);
    $.ajax({
      type: "POST",
      headers: { "x-access-token": "lP7bPRsj" },
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade,
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
    });
  }

  handleCreateGradeError(error) {
    console.error(error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }
}
