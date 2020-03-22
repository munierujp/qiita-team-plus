import { CommentElement } from '.'

class CommentListElement {
  constructor (element) {
    this.element = element
  }

  getCommentElements () {
    return Array.from(this.element.querySelectorAll('.comment'))
      .map(element => new CommentElement(element))
  }

  getCommentFormHTMLElement () {
    return this.element.querySelector('.commentForm')
  }

  insertBeforeCommentForm (node) {
    const commentForm = this.getCommentFormHTMLElement()
    return this.element.insertBefore(node, commentForm)
  }

  prepend (node) {
    this.element.prepend(node)
  }
}

export default CommentListElement
