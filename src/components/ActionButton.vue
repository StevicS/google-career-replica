<template>
  <button :class="ButtonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      }
    }
  },
  computed: {
    ButtonClass() {
      return {
        [this.type]: true
      }
    }
  }
}
</script>

<style scoped>
button {
  @apply rounded bg-brand-blue-1 px-5 py-3 font-medium text-white;
}
.primary {
  @apply border-0 text-white hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>
