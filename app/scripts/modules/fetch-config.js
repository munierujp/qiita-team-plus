import { Storage } from './'
import defaultConfig from '../defaultConfig'

export default function () {
  return Storage.fetch(defaultConfig)
}
