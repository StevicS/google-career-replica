<template>
  <header :class="['w-full', 'text-sm', headerClassHeight]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <a
          class="flex h-full items-center whitespace-nowrap text-xl"
          :href="url"
          >{{ company }}</a
        >
        <nav class="ml-12 w-full">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItems in menuItems"
              :key="menuItems"
              class="ml-9 h-full first:ml-0"
            >
              <a href="" class="flex h-full items-center py-2.5">{{
                menuItems
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center whitespace-nowrap">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else @click="loginUser" text="Sign in" />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'
import ProfileImage from '@/components/ProfileImage.vue'
import TheSubnav from '@/components/TheSubnav.vue'

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav
  },
  data() {
    return {
      company: 'Bobo Careers',
      url: 'https://careers.google.com/',
      menuItems: [
        'Teams',
        'Locations',
        'Life at Bobo Corp',
        'How we hire',
        'Students',
        'Jobs'
      ],
      isLoggedIn: false
    }
  },
  computed: {
    headerClassHeight() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn
      }
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    }
  }
}
</script>
