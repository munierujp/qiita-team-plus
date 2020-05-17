import { SyncScrollCheckboxElement } from './elements'

export default class {
  constructor (document) {
    this.document = document
  }

  getSyncScrollCheckboxElement () {
    const element = this.document.getElementById('draft_item[syncScroll]')
    return new SyncScrollCheckboxElement(element)
  }
}
