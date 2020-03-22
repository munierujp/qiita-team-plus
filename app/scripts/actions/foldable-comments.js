import paths from '../paths'
import { ArticlePage } from '../pages'

const CLASS_HIDE = 'qiita-team-plus-foldable-comments-hide'
const CLASS_CLOSED = 'fa-caret-right'
const CLASS_OPEND = 'fa-caret-down'

export default {
  key: 'foldable_comments',
  name: 'コメント欄を折りたたむ',
  routes: [
    paths.article
  ],
  run: (config) => {
    const page = new ArticlePage(document)
    const commentList = page.getCommentListElement()
    const comments = commentList.getCommentElements()
    comments.forEach(comment => comment.classList.add(CLASS_HIDE))
    const toggle = createToggleElement({ comments })
    commentList.prepend(toggle)
  }
}

function createToggleElement ({ comments }) {
  const icon = document.createElement('i')
  addSelector(icon, 'comment-icon')
  icon.setAttribute('class', `fa fa-lg ${CLASS_CLOSED}`)

  const label = document.createElement('span')
  addSelector(label, 'comment-label')
  label.textContent = `コメント (${comments.length})`

  const toggle = document.createElement('div')
  addSelector(toggle, 'comment-toggle')
  toggle.addEventListener('click', () => {
    icon.classList.toggle(CLASS_OPEND)
    icon.classList.toggle(CLASS_CLOSED)
    comments.forEach(comment => comment.classList.toggle(CLASS_HIDE))
  })
  toggle.appendChild(icon)
  toggle.appendChild(label)

  return toggle
}

function addSelector (element, selector) {
  element.setAttribute('data-qiita-team-plus-foldable-comments', selector)
}
