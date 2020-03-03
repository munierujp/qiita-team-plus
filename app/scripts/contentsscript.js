import isTeamPage from './isTeamPage'
import actions from './actions'
import fetchConfigOrDefault from './fetchConfigOrDefault'

if (isTeamPage(document)) {
  Object.values(actions)
    .filter(({ routes }) => routes.some(route => window.location.pathname.match(route)))
    .forEach(action => {
      fetchConfigOrDefault(action.key)
        .then(enabled => {
          if (enabled) {
            action.run()
          }
        })
    })
}
