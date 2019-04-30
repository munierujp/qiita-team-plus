import isTeamPage from './modules/isTeamPage'
import runActions from './modules/runActions'

if (isTeamPage(document)) {
  console.log('Start Qiita:Team Plus')
  runActions()
}
