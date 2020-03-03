import isTeamPage from './isTeamPage'
import actions from './actions'
import fetchConfigOrDefault from './fetchConfigOrDefault'

if (isTeamPage(document)) {
  console.log('Qiita Team Plusを実行します。')
  Object.values(actions)
    .filter(({ routes }) => routes.some(route => window.location.pathname.match(route)))
    .forEach(action => {
      fetchConfigOrDefault(action.key)
        .then(enabled => {
          if (enabled) {
            console.log(`アクション「${action.name}」を実行します。`)
            action.run()
          }
        })
    })
}
