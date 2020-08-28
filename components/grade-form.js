class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
  }

  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }

  handleSubmit(event) {
    event.preventDefault();

    var newFormData = new FormData(event.target);
    var name = newFormData.get('name');
    var course = newFormData.get('course');
    var grade = newFormData.get('grade');
    this.createGrade(name, course, grade);
    event.target.reset();
  }
}
