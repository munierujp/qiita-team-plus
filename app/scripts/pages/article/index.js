import { ArticleElement } from './elements'

class ArticlePage {
  constructor (document) {
    this.document = document
  }

  getArticleElement () {
    return ArticleElement.from(this.document)
  }
}

export default ArticlePage
