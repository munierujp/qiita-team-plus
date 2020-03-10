class SyncScrollCheckboxElement {
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

export default SyncScrollCheckboxElement
