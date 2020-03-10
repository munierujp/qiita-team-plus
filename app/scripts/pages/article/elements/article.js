import newDate from '../../../modules/newDate'

class ArticleElement {
  constructor (element) {
    this.element = element
  }

  getBodyHTMLElement () {
    return this.element.querySelector('.teamArticle_body')
  }

  getHeaderDateHTMLElement () {
    return this.element.querySelector('.teamArticle_header_date')
  }

  getUpdatedDate () {
    const headerDate = this.getHeaderDateHTMLElement()
    const dateString = headerDate.textContent
    const [, year, month, day, hour, minute, second] = dateString.match(/^([0-9]{4})年([0-9]{2})月([0-9]{2})日\(.\) ([0-9]{2})時([0-9]{2})分([0-9]{2})秒/)
    const date = newDate({
      year: Number(year),
      month: Number(month),
      day: Number(day),
      hour: Number(hour),
      minute: Number(minute),
      second: Number(second)
    })
    return date
  }

  insertBeforeBody (node) {
    const body = this.getBodyHTMLElement()
    return this.element.insertBefore(node, body)
  }
}

export default ArticleElement
