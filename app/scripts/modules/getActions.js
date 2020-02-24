import routes from './routes'

function getActions (path) {
  return routes
    .filter(route => path.match(route.path))
    .flatMap(route => route.actions)
}

export default getActions
