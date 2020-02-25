import getCurrentUserId from '../modules/getCurrentUserId'
import getHeaderElements from '../modules/getHeaderElements'

function addStockButtonToHeader () {
  const userId = getCurrentUserId()
  const stockButton = createStockButtonElement({ userId })
  const headers = getHeaderElements()
  headers
    .map(header => header.querySelector('.sharedHeader_right'))
    .forEach(sharedHeaderRight => {
      const leftestButton = sharedHeaderRight.querySelector('.sharedHeader_newItem') || sharedHeaderRight.querySelector('.sharedHeader_notifications')
      sharedHeaderRight.insertBefore(stockButton, leftestButton)
    })
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

export default addStockButtonToHeader
