function getMetadata () {
  const script = document.querySelector('[data-component-name="HeaderContainer"]')
  const scriptBody = script.textContent
  return JSON.parse(scriptBody)
}

export default getMetadata
