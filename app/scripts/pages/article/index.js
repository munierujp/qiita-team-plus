import { ArticleElement, CommentListElement } from './elements'

class ArticlePage {
  constructor (document) {
    this.document = document
  }

  getArticleElement () {
    const element = this.document.querySelector('.teamArticle')
    return new ArticleElement(element)
  }

  getCommentListElement () {
    const element = this.document.querySelector('.commentList')
    return new CommentListElement(element)
  }
}

export default ArticlePage
