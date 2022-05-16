// / <reference types="cypress" />
class CommonPage {
  constructor(objectFactory) {
    this.objectFactory = objectFactory;
  }
  getFileName(path) {
    let fileName = path
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, function (str) {
        return str.toUpperCase();
      })
      .split("%2 F")
      .pop()
      .split(".");
    return fileName;
  }
}
export default CommonPage;
