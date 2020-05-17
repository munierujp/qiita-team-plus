import { paths } from '../modules'
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
  run: () => {
    const shouldCloseByDefault = !document.location.hash.match(/^#comment-/)
    const page = new ArticlePage(document)
    const commentList = page.getCommentListElement()
    const comments = commentList.getCommentElements()
    if (shouldCloseByDefault) {
      comments.forEach(comment => comment.classList.add(CLASS_HIDE))
    }
    const toggle = createToggleElement({ comments, shouldCloseByDefault })
    commentList.prepend(toggle)
  }
}

function createToggleElement ({ comments, shouldCloseByDefault }) {
  const icon = document.createElement('i')
  addSelector(icon, 'comment-icon')
  const DEFAULT_CLASS = shouldCloseByDefault ? CLASS_CLOSED : CLASS_OPEND
  icon.setAttribute('class', `fa fa-lg ${DEFAULT_CLASS}`)

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
