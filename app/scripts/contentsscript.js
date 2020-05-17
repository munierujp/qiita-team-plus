import {
  fetchConfig,
  isTeamPage
} from './modules'
import * as actions from './actions'

if (isTeamPage(document)) {
  fetchConfig().then(config => {
    Object.values(actions)
      .filter(({ routes }) => routes.some(route => window.location.pathname.match(route)))
      .filter(({ key }) => config[key])
      .forEach(({ run }) => run(config))
  })
}
