export default class {
  constructor (element) {
    this.element = element
  }

  setAttribute (name, value) {
    this.element.setAttribute(name, value)
  }

  querySelector (selector) {
    return this.element.querySelector(selector)
  }
}
