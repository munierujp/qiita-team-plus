import getHeaderElements from '../modules/getHeaderElements'

export default function () {
  const headers = getHeaderElements()
  headers.forEach(header => {
    header.setAttribute('data-qiita-team-plus-fix-header', 'header')
  })
}
