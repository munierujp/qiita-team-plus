import paths from './paths'
import actions from './actions'

export default [
  {
    path: paths.all,
    actions: [
      actions.addStockButtonToHeader,
      actions.fixHeader
    ]
  },
  {
    path: paths.article,
    actions: [
      actions.addOldArticleAlert
    ]
  },
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
