import getCurrentUserId from '../modules/getCurrentUserId'
import getHeaderElements from '../modules/getHeaderElements'

function addStockButtonToHeader () {
  const userId = getCurrentUserId()
  const headers = getHeaderElements()
  headers.forEach(header => {
    const stockButton = createStockButtonElement({ userId })
    const sharedHeaderRight = header.querySelector('.sharedHeader_right')
    const newItemButton = header.querySelector('.sharedHeader_newItem')
    sharedHeaderRight.insertBefore(stockButton, newItemButton)
  })
}

function createStockButtonElement ({ userId }) {
  const stockButtonIcon = document.createElement('i')
  stockButtonIcon.setAttribute('data-qiita-team-plus', 'header-stock-button-icon')
  stockButtonIcon.setAttribute('class', 'fa fa-fw fa-folder-open')

  const stockButtonText = document.createElement('span')
  stockButtonText.setAttribute('data-qiita-team-plus', 'header-stock-button-text')
  stockButtonText.textContent = 'ストック一覧'

  const stockButtonLink = document.createElement('a')
  stockButtonLink.setAttribute('data-qiita-team-plus', 'header-stock-button')
  stockButtonLink.setAttribute('href', `/${userId}/stocks`)
  stockButtonLink.appendChild(stockButtonIcon)
  stockButtonLink.appendChild(stockButtonText)

  const stockButton = document.createElement('div')
  stockButton.setAttribute('data-qiita-team-plus', 'header-stock')
  stockButton.appendChild(stockButtonLink)

  return stockButton
}

export default addStockButtonToHeader
