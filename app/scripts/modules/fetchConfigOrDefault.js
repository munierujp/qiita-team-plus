import Val from '@js-commons/val'
import Storage from './Storage'
import defaultConfig from './defaultConfig'

export default function (key) {
  return Storage.fetch(key).then(items => {
    return Val.of(items[key]).or(defaultConfig[key])
  })
}
