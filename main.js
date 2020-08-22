// Before App is instantiated, query the document for your table element.
var table = document.querySelector("table");
var header = document.querySelector("header");

// After you get the table element, but before instantiating App, instantiate GradeTable, passing in the table element.
var gradeTable = new GradeTable(table);

// Before App is instantiated, instantiate PageHeader
var pageHeader = new PageHeader(header);

// Modify your instantiation of App to pass in your GradeTable instance as an argument.
var app = new App(gradeTable, pageHeader);
app.start();
