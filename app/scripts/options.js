import Vue from 'vue'
import Storage from './modules/Storage'
import defaultConfig from './modules/defaultConfig'

document.addEventListener('DOMContentLoaded', () => {
  Storage.fetch(defaultConfig).then(config => {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      data: () => ({
        status: ''
      }),
      computed: {
        config () {
          return {
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
