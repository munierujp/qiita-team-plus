import { EditArticlePage } from '../pages'

export default function () {
  const editArticlePage = new EditArticlePage(document)
  const checkbox = editArticlePage.getSyncScrollCheckboxElement()
  if (!checkbox.checked) {
    checkbox.click()
  }
}
