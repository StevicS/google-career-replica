<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <input
          type="text"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "JobSearchForm",
};
</script>
