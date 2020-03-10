import isTeamPage from './isTeamPage'
import run from './run'

if (isTeamPage(document)) {
  run().catch(e => console.error(e))
}
