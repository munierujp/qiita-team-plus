import getActions from './getActions'
import fetchConfigOrDefault from './fetchConfigOrDefault'

export default function () {
  const actions = getActions(window.location.pathname)
  actions.forEach(action => {
    fetchConfigOrDefault(action.key)
      .then(enabled => {
        if (enabled) {
          console.log(`アクション「${action.name}」を実行します。`)
          action.run()
        }
      })
  })
}
