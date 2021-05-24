<template>
  <div class="w-full flex justify-center">
    <input type="text" placeholder="Enter Pokemon here" class="mt-10 p-2 border-blue-500 border-2" />
  </div>
  <div class="mt-10 p-4 flex flex-wrap justify-center">
    <div
      class="ml-4 text-2x text-blue-200"
      v-for="(pokemon, index) in pokemons"
      :key="index"
    >{{pokemon.name}}</div>
  </div>
  <!-- <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>-->
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'Dashboard',
  setup () {

    const state = reactive({
      pokemons: [],
      urlIdLookup: {}
    })

    fetch('https://pokeapi.co/api/v2/pokemon?offset=0')
      .then((res) => res.json())
      .then((data) => {
        state.pokemons = data.results
        state.urlIdLookup = data.results.reduce((accumulator, current, index) =>
          accumulator = { ...accumulator, [current.name]: index + 1 }, {})
      })

    return { ...toRefs(state) }
  }
}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
