import autoEnableSyncScroll from '../actions/autoEnableSyncScroll'
import fixHeader from '../actions/fixHeader'

export default {
  autoEnableSyncScroll: {
    key: 'auto_enable_sync_scroll',
    name: '同時スクロールを自動的に有効化',
    run: autoEnableSyncScroll
  },
  fixHeader: {
    key: 'fix_header',
    name: 'ヘッダーを固定',
    run: fixHeader
  }
}
