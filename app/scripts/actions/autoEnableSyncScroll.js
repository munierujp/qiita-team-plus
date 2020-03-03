import { EditArticlePage } from '../pages'

export default function () {
  const page = new EditArticlePage(document)
  const checkbox = page.getSyncScrollCheckboxElement()
  if (!checkbox.checked) {
    checkbox.click()
  }
}
