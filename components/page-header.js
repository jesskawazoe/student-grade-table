class PageHeader {
  constructor (headerElement) {
    this.headerElement = headerElement;
  }

  updatedAverage (newAverage) {
    console.log(newAverage);
    var span = document.querySelector("span");
    span.textContent = newAverage;
  }

}
