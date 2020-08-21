// Before App is instantiated, query the document for your table element.
var table = document.querySelector("table");

// After you get the table element, but before instantiating App, instantiate GradeTable, passing in the table element.
var gradeTable = new GradeTable(table);

// Modify your instantiation of App to pass in your GradeTable instance as an argument.
var app = new App(gradeTable);
app.start();
