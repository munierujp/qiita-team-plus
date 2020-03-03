import { HeaderElement } from './elements'

class CommonPage {
  constructor (document) {
    this.document = document
  }

  getMetadata () {
    const script = this.document.querySelector('[data-component-name="HeaderContainer"]')
    return JSON.parse(script.textContent)
  }

  getCurrentUserId () {
    const metadata = this.getMetadata()
    return metadata.user.url_name
  }

  getHeaderElement () {
    return HeaderElement.from(this.document)
  }
}

export default CommonPage
