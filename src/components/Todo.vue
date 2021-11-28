<template>
  <div class="todo">
    <section class="todoapp">
      <header class="header">
        <a-typography-title>todos</a-typography-title>
        <a-input
          autofocus
          v-model:value="newTodo"
          class="max-w-xl my-3"
          autocomplete="off"
          placeholder="What needs to be done?"
          @press-enter="addTodo"
        />
      </header>
      <section class="max-w-xl mx-auto my-3">
        <ul class="todo-list">
          <li v-for="todo in filteredTodos" :key="todo.id" class="underline">
            {{ todo.text }}
          </li>
        </ul>
      </section>
      <a-radio-group v-model="visibility" @change="handleChange">
        <a-radio-button value="all">all</a-radio-button>
        <a-radio-button value="finished">finished</a-radio-button>
        <a-radio-button value="unfinished">unfinished</a-radio-button>
      </a-radio-group>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useTodos, storeToRefs } from '@/stores'

export default defineComponent({
  setup() {
    const newTodo = ref('defaultVs')
    const visibility = ref('all')
    const store = useTodos()

    const addTodo = () => {
      store.addTodo(newTodo.value)
    }

    const { filteredTodos } = storeToRefs(store)

    const handleChange = (e) => {
      store.filter = visibility.value
    }

    return {
      newTodo,
      addTodo,
      visibility,
      handleChange,
      filteredTodos,
    }
  },
})
</script>
