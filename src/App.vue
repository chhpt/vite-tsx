<template>
  <div class="justify-center flex-1">
    <div class="container pt-8 mx-auto text-center">
      <router-view />
      <button
        class="px-3 py-2 mt-5 mr-5 border border-gray-300 rounded-md shadow"
        @click="jump('/')"
      >
        Home
      </button>
      <button class="px-3 py-2 border border-gray-300 rounded-md shadow" @click="jump('/about')">
        About
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    jump(path) {
      this.$router.push(path)
    },
  },
}
</script>
