class SyncScrollCheckboxElement {
  constructor (element) {
    this.element = element
  }

  static from (document) {
    const element = document.getElementById('draft_item[syncScroll]')
    return new SyncScrollCheckboxElement(element)
  }

  get checked () {
    return this.element.checked
  }

  click () {
    return this.element.click()
  }
}

export default SyncScrollCheckboxElement
