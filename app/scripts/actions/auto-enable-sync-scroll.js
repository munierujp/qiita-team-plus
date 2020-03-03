import paths from '../paths'
import { EditArticlePage } from '../pages'

export default {
  key: 'auto_enable_sync_scroll',
  name: '同時スクロールを自動的に有効化',
  routes: [
    paths.editPastArticle,
    paths.postNewArticle
  ],
  run
}

function run () {
  const page = new EditArticlePage(document)
  const checkbox = page.getSyncScrollCheckboxElement()
  if (!checkbox.checked) {
    checkbox.click()
  }
}
