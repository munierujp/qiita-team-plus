export default class {
  constructor (element) {
    this.element = element
  }

  get checked () {
    return this.element.checked
  }

  click () {
    return this.element.click()
  }
}
