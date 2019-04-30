import paths from './paths'
import actions from './actions'

export default [
  {
    path: paths.editPastArticle,
    actions: [
      actions.autoEnableSyncScroll
    ]
  },
  {
    path: paths.postNewArticle,
    actions: [
      actions.autoEnableSyncScroll
    ]
  }
]
