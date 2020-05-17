export default class {
  constructor (element) {
    this.element = element
  }

  get classList () {
    return this.element.classList
  }
}
