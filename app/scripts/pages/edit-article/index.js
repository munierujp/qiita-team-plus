import { SyncScrollCheckboxElement } from './elements'

class EditArticlePage {
  constructor (document) {
    this.document = document
  }

  getSyncScrollCheckboxElement () {
    return SyncScrollCheckboxElement.from(this.document)
  }
}

export default EditArticlePage
