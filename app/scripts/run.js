import actions from './actions'
import fetchConfig from './fetchConfig'

function run () {
  return fetchConfig().then(config => {
    Object.values(actions)
      .filter(({ routes }) => routes.some(route => window.location.pathname.match(route)))
      .filter(({ key }) => config[key])
      .forEach(({ run }) => run(config))
  })
}

export default run
