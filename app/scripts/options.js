import Vue from 'vue'
import Storage from './modules/Storage'
import defaultConfig from './modules/defaultConfig'
import actions from './modules/actions'
import AppCheckbox from './components/AppCheckbox'

document.addEventListener('DOMContentLoaded', () => {
  Storage.fetch(defaultConfig).then(config => {
    const toData = ({ key, name }) => ({
      key,
      value: config[key],
      name
    })

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      data: () => ({
        status: '',
        actions: {
          addStockButtonToHeader: toData(actions.addStockButtonToHeader),
          autoEnableSyncScroll: toData(actions.autoEnableSyncScroll),
          fixHeader: toData(actions.fixHeader)
        }
      }),
      computed: {
        config () {
          const config = {}
          Object.values(this.actions).forEach(action => {
            config[action.key] = action.value
          })
          return config
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
