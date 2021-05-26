export const routes = [
  {
    path: '/',
    name: 'PokemonPicker',
    component: () => import('../components/PokemonPicker.vue'),
  },
  {
    path: '/pokemon/:slug',
    name: 'Pokemon',
    component: () => import('../components/Pokemon.vue'),
  },
]
