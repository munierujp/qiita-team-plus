import Vue from 'vue'
import Storage from './modules/Storage'
import defaultConfig from './modules/defaultConfig'

document.addEventListener('DOMContentLoaded', () => {
  Storage.fetch(defaultConfig).then(config => {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      data: () => ({
        status: '',
        auto_enable_sync_scroll: config.auto_enable_sync_scroll,
        fix_header: config.fix_header
      }),
      computed: {
        config () {
          return {
            auto_enable_sync_scroll: this.auto_enable_sync_scroll,
            fix_header: this.fix_header
          }
        }
      },
      methods: {
        onUpdate () {
          this.status = ''
        },
        save () {
          Storage.update(this.config).then(() => {
            this.status = '保存しました。'
          })
        }
      }
    })
  })
})
