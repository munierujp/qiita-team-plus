import Vue from 'vue'
import Storage from './modules/Storage'
import defaultConfig from './modules/defaultConfig'
import actions from './modules/actions'
import AppCheckbox from './components/AppCheckbox'

const {
  addStockButtonToHeader,
  autoEnableSyncScroll,
  fixHeader
} = actions

document.addEventListener('DOMContentLoaded', () => {
  Storage.fetch(defaultConfig).then(config => {
    const toData = action => ({
      value: config[action.key],
      label: action.name
    })

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      data: () => ({
        status: '',
        addStockButtonToHeader: toData(addStockButtonToHeader),
        autoEnableSyncScroll: toData(autoEnableSyncScroll),
        fixHeader: toData(fixHeader)
      }),
      computed: {
        config () {
          return {
            [addStockButtonToHeader.key]: this.addStockButtonToHeader.value,
            [autoEnableSyncScroll.key]: this.autoEnableSyncScroll.value,
            [fixHeader.key]: this.fixHeader.value
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
      },
      components: {
        AppCheckbox
      }
    })
  })
})
