import Storage from './Storage'
import defaultConfig from './defaultConfig'

function fetchConfig () {
  return Storage.fetch(defaultConfig)
}

export default fetchConfig
