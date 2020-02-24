import Storage from './Storage'
import defaultConfig from './defaultConfig'

function fetchConfigOrDefault (key) {
  return Storage.fetch(key)
    .then(items => {
      const item = items[key]
      if (item !== undefined) {
        return item
      } else {
        return defaultConfig[key]
      }
    })
}

export default fetchConfigOrDefault
