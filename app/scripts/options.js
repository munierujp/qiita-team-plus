import Vue from 'vue'
import {
  createObjectFromEntries,
  fetchConfig,
  Storage
} from './modules'
import * as actions from './actions'
import { AppCheckbox } from './components'

document.addEventListener('DOMContentLoaded', () => {
  fetchConfig().then(config => {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      data: () => ({
        status: '',
        actions: createObjectFromEntries(Object.values(actions)
          .map(({ key, value, name }) => [key, {
            key,
            value: config[key],
            name
          }]))
      }),
      computed: {
        config () {
          return createObjectFromEntries(Object.values(this.actions)
            .map(({ key, value }) => [key, value]))
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
