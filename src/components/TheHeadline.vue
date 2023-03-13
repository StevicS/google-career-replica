<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your job in BOBO corp.</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/nextElementInList'

export default {
  name: 'TheHeadline',
  data() {
    return {
      action: 'Build',
      interval: null
    }
  },
  computed: {
    actionClasses() {
      return {
        // build: this.action === 'Build',
        // create: this.action === 'Create',
        // design: this.action === 'Design',
        // code: this.action === 'Code',
        [this.action.toLowerCase()]: true
      }
    }
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ['Build', 'Create', 'Design', 'Code']
        // const currentActionIndex = actions.indexOf(this.action)
        // const nextActionIndex = (currentActionIndex + 1) % 4
        // const nextAction = actions[nextActionIndex]

        this.action = nextElementInList(actions, this.action)
      }, 3000)
    }
  },
  created() {
    this.changeTitle()
  }
}
</script>

<style scoped>
h1 {
  position: relative;
  overflow: hidden;
}

.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
