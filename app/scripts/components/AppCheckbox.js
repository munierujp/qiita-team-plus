const template = `
<label>
  <input
    type="checkbox"
    v-model="computedValue">
  <span>{{ label }}</span>
</label>`

export default {
  template,
  props: {
    value: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    computedValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
