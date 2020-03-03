import { CommonPage } from '../pages'

export default function () {
  const page = new CommonPage(document)
  const header = page.getHeaderElement()
  header.setAttribute('data-qiita-team-plus-fix-header', 'header')
}
