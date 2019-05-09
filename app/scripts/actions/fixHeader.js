export default function () {
  const headers = getHeaderElements()
  headers.forEach(header => {
    header.style.position = 'sticky'
    header.style.top = '0'
    header.style.zIndex = '999'
  })
}

function getHeaderElements () {
  return Array.from(document.getElementsByClassName('headerContainer'))
}
