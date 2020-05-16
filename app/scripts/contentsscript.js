import { isTeamPage } from './modules'
import run from './run'

if (isTeamPage(document)) {
  run().catch(e => console.error(e))
}
