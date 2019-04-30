import paths from './paths'
import actions from './actions'

export default [
  {
    path: paths.editArticle,
    actions: [
      actions.autoEnableSyncScroll
    ]
  }
]
