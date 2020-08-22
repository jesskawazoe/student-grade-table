class PageHeader {
  constructor (headerElement) {
    this.headerElement = headerElement;
  }

  updatedAverage (newAverage) {
    var span = document.querySelector("span");
    span.textContent = newAverage;
  }

}
