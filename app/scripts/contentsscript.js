import { isTeamPage } from './modules'
import * as actions from './actions'
import fetchConfig from './fetchConfig'

if (isTeamPage(document)) {
  fetchConfig().then(config => {
    Object.values(actions)
      .filter(({ routes }) => routes.some(route => window.location.pathname.match(route)))
      .filter(({ key }) => config[key])
      .forEach(({ run }) => run(config))
  })
}
