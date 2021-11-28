<template>
  <div class="justify-center flex-1">
    <div class="container pt-8 mx-auto text-center">
      <router-view />
      <button class="px-3 py-2 mt-5 border border-gray-300 rounded-md shadow" @click="jump('/')">
        Home
      </button>
      <button
        class="px-3 py-2 mx-3 border border-gray-300 rounded-md shadow"
        @click="jump('/about')"
      >
        About
      </button>
      <button class="px-3 py-2 border border-gray-300 rounded-md shadow" @click="jump('/todo')"> 
        Todo
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    jump(path) {
      this.$router.push(path)
    },
  },
})
</script>
