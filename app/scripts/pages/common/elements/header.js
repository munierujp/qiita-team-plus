class HeaderElement {
  constructor (element) {
    this.element = element
  }

  static from (document) {
    const element = document.querySelector('.headerContainer')
    return new HeaderElement(element)
  }

  setAttribute (name, value) {
    this.element.setAttribute(name, value)
  }

  querySelector (selector) {
    return this.element.querySelector(selector)
  }
}

export default HeaderElement
