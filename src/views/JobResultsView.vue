<template>
  <h1 class="text-6xl font-bold">Jobs page</h1>
  <button>go to home page</button>
</template>
<script>
export default {
  name: "JobResultsView",
  computed: {
    experiment() {
      console.log(this.$router);
      return "irrelevant";
    },
  },
};
</script>
