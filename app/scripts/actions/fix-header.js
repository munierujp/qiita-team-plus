import { paths } from '../modules'
import { CommonPage } from '../pages'

export default {
  key: 'fix_header',
  name: 'ヘッダーを固定',
  routes: [
    paths.all
  ],
  run: (config) => {
    const page = new CommonPage(document)
    const header = page.getHeaderElement()
    header.setAttribute('data-qiita-team-plus-fix-header', 'header')
  }
}
