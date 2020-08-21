class App {
  constructor(gradeTable) {
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }

  handleGetGradesError(error) {
    console.error('this is the error: ', [error]);
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
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
  }
}
