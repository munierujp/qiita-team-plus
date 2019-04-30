export default function () {
  const checkbox = document.getElementById('draft_item[syncScroll]')
  if (!checkbox.checked) {
    checkbox.click()
  }
}
