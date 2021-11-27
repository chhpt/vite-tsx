import { defineComponent, ref } from 'vue'

const HelloWorld = defineComponent({
  props: {
    msg: String,
  },
  setup() {
    const count = ref(0)

    return {
      count,
    }
  },
  methods: {
    increment() {
      this.count++
    },
  },
  render() {
    const { count, increment } = this

    return (
      <div class="prose mx-auto">
        <h1>Hello Vue 3 + Vite + Tailwind CSS</h1>
        <button class="px-3 py-2 border border-gray-300 rounded-md shadow" onClick={increment}>
          count is: {count}
        </button>
        <p>
          Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
        </p>

        <a href="https://github.com/chhpt/react-vite" target="_blank">
          <p class="text-sm text-gray-700">vite-ts-tailwind-starter</p>
        </a>
      </div>
    )
  },
})

export default HelloWorld
