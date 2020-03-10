import { ArticleElement } from './elements'

class ArticlePage {
  constructor (document) {
    this.document = document
  }

  getArticleElement () {
    const element = this.document.querySelector('.teamArticle')
    return new ArticleElement(element)
  }
}

export default ArticlePage
