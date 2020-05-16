import { HeaderElement } from './elements'

export default class {
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
    const element = this.document.querySelector('.headerContainer')
    return new HeaderElement(element)
  }
}
