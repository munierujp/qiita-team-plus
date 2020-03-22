class CommentElement {
  constructor (element) {
    this.element = element
  }

  get classList () {
    return this.element.classList
  }
}

export default CommentElement
