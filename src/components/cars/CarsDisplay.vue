<template>
  <div class="flex px-2">
    <div class="hidden py-8 px-2 border-r md:block md:w-1/5">
      <h1 class="text-3xl font-black py-2 text-center">Brands</h1>
      <div class="flex flex-col items-center gap-2">
        <p
          :class="`font-bold py-2 text-center cursor-pointer ${
            currBrand.length === 0 && 'text-main'
          }`"
          @click="getCars"
        >
          All
        </p>
        <div class="flex flex-col items-center gap-2" v-for="(_, i) in brands" :key="i">
          <p
            :class="`font-bold py-2 text-center cursor-pointer ${
              currBrand === brands[i] && 'text-main'
            }`"
            @click="changeBrand(brands[i])"
          >
            {{ brands[i] }}
          </p>
        </div>
      </div>
    </div>

    <AllCars :cars="cars.length > 0 ? cars : allCars" />
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
  data() {
    return {
      currBrand: '',
      cars: []
    }
  },
  setup() {
    const carStore = useCarStore()
    const brands = carStore.getBrands()
    const allCars = carStore.$state.cars
    return { brands, allCars }
  },
  methods: {
    changeBrand(brand) {
      const carStore = useCarStore()

      const allCars = carStore.$state.cars
      const carsForBrand = carStore.getCarByBrand(brand)
      const cars = carsForBrand.length > 0 ? carsForBrand : allCars
      this.currBrand = brand
      this.cars = cars
    },

    getCars() {
      const carStore = useCarStore()
      const cars = carStore.$state.cars
      this.cars = cars
      this.currBrand = ''
    }
  }
}
</script>
