import isTeamPage from './modules/isTeamPage'
import runActions from './modules/runActions'

if (isTeamPage(document)) {
  console.log('Qiita:Team Plusを実行します。')
  runActions()
}
