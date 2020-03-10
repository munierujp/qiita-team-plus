import { SyncScrollCheckboxElement } from './elements'

class EditArticlePage {
  constructor (document) {
    this.document = document
  }

  getSyncScrollCheckboxElement () {
    const element = this.document.getElementById('draft_item[syncScroll]')
    return new SyncScrollCheckboxElement(element)
  }
}

export default EditArticlePage
