import paths from '../paths'
import { CommonPage } from '../pages'

export default {
  key: 'fix_header',
  name: 'ヘッダーを固定',
  routes: [
    paths.all
  ],
  run
}

function run () {
  const page = new CommonPage(document)
  const header = page.getHeaderElement()
  header.setAttribute('data-qiita-team-plus-fix-header', 'header')
}
