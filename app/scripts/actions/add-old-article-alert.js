import { paths } from '../modules'
import { ArticlePage } from '../pages'
import { differenceInYears } from 'date-fns'

const MIN_YEAR = 1

export default {
  key: 'add_old_article_alert',
  name: '古い記事にアラートを表示',
  routes: [
    paths.article
  ],
  run: (config) => {
    const page = new ArticlePage(document)
    const article = page.getArticleElement()
    const updatedDate = article.getUpdatedDate()
    const now = new Date()
    const year = differenceInYears(now, updatedDate)
    if (year >= MIN_YEAR) {
      const alert = createAlertElement({ year })
      article.insertBeforeBody(alert)
    }
  }
}

function createAlertElement ({ year }) {
  const icon = document.createElement('span')
  addSelector(icon, 'alert-icon')
  icon.setAttribute('class', 'fa fa-warning')

  const message = document.createElement('span')
  addSelector(message, 'alert-message')
  message.textContent = `この記事は最終更新日から${year}年以上が経過しています。`

  const alert = document.createElement('div')
  const range = toRange(year)
  addSelector(alert, `alert-${range}`)
  alert.appendChild(icon)
  alert.appendChild(message)

  return alert
}

function toRange (year) {
  if (year >= 5) {
    return 'five'
  } else if (year <= 3) {
    return 'three'
  }
  return 'one'
}

function addSelector (element, selector) {
  element.setAttribute('data-qiita-team-plus-add-old-article-alert', selector)
}
