import { paths } from '../modules'
import { CommonPage } from '../pages'

export default {
  key: 'add_stock_button_to_header',
  name: 'ヘッダーにストックボタンを追加',
  routes: [
    paths.all
  ],
  run: (config) => {
    const page = new CommonPage(document)
    const userId = page.getCurrentUserId()
    const stockButton = createStockButtonElement({ userId })
    const header = page.getHeaderElement()
    const sharedHeaderRight = header.querySelector('.sharedHeader_right')
    const leftestButton = sharedHeaderRight.querySelector('.sharedHeader_newItem') || sharedHeaderRight.querySelector('.sharedHeader_notifications')
    sharedHeaderRight.insertBefore(stockButton, leftestButton)
  }
}

function createStockButtonElement ({ userId }) {
  const stockButtonIcon = document.createElement('i')
  addSelector(stockButtonIcon, 'header-stock-button-icon')
  stockButtonIcon.setAttribute('class', 'fa fa-fw fa-folder-open')

  const stockButtonText = document.createElement('span')
  addSelector(stockButtonText, 'header-stock-button-text')
  stockButtonText.textContent = 'ストック一覧'

  const stockButtonLink = document.createElement('a')
  addSelector(stockButtonLink, 'header-stock-button')
  stockButtonLink.setAttribute('href', `/${userId}/stocks`)
  stockButtonLink.appendChild(stockButtonIcon)
  stockButtonLink.appendChild(stockButtonText)

  const stockButton = document.createElement('div')
  addSelector(stockButton, 'header-stock')
  stockButton.appendChild(stockButtonLink)

  return stockButton
}

function addSelector (element, selector) {
  element.setAttribute('data-qiita-team-plus-add-stock-button-to-header', selector)
}
