<template>
  <div class="flex px-2">
    <div class="hidden w-1/5 py-8 px-2 md:block">
      <h1 class="text-3xl font-black py-2 text-center">Brands</h1>
      <div class="flex flex-col items-center gap-6" v-for="(brand, i) in brands" :key="i">
        <p class="font-bold py-3 text-center">{{ brands[i] }}</p>
      </div>
    </div>

    <AllCars />
  </div>
</template>

<script>
import { useCarStore } from '../../stores/cars'
import AllCars from './AllCars.vue'

export default {
  name: 'CarDispaly',
  components: {
    AllCars
  },
  setup() {
    const carStore = useCarStore()
    const brands = carStore.getBrands()
    return { brands }
  }
}
</script>
