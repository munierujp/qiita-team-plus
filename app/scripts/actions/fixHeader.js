import getHeaderElements from '../modules/getHeaderElements'

export default function () {
  const headers = getHeaderElements()
  headers.forEach(header => {
    header.style.position = 'sticky'
    header.style.top = '0'
    header.style.zIndex = '999'
  })
}
