import Val from '@munierujp/val'
import fetchConfigOrDefault from './fetchConfigOrDefault'
import routes from './routes'

export default function () {
  const actions = findActions(window.location)
  actions.forEach(action => {
    fetchConfigOrDefault(action.key).then(enabled => {
      if (enabled) {
        console.log(`アクション「${action.name}」を実行します。`)
        action.run()
      }
    })
  })
}

function findActions (location) {
  return Val.of(location)
    .map(location => location.pathname)
    .map(path => routes.filter(route => path.match(route.path)))
    .map(routes => routes.flatMap(route => route.actions))
    .or([])
}
