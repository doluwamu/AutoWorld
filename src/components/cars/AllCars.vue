<template>
  <div class="block md:h-screen md:pb-8 md:overflow-auto md:w-4/5">
    <h1 class="pt-6 pb-12 text-3xl text-center font-bold">Cars</h1>
    <div class="flex flex-col gap-11 justify-evenly flex-wrap md:flex-row">
      <div
        class="car-card flex flex-col gap-8 md:w-1/3 lg:w-1/4"
        v-if="cars.length > 0"
        v-for="car in cars"
        :key="car.id"
      >
        <a :href="`/car/${car.id}?make=${car.company}&name=${car.name}`">
          <!-- top -->
          <div class="">
            <div class="flex justify-between items-center">
              <p
                class="car-company-model w-1/2 text-blue font-black bg-lightBlue text-center py-4 px-2"
              >
                {{ car.company }} <span class="text-black font-medium">{{ car.model }} model</span>
              </p>

              <div
                class="flex items-center gap-1 justify-center bg-main text-center font-bold text-white rounded-lg p-2 w-1/2"
                style="max-width: 60px"
              >
                <img src="../../assets/img/home/star.png" alt="img" width="15" />
                <span class="text-xs">
                  {{ car.rating }}
                </span>
              </div>
            </div>
          </div>

          <!-- center -->
          <img :src="car.image" alt="img" width="500" />

          <!-- buttom -->
          <div class="flex justify-between items-center px-2">
            <p class="font-black text-2xl">{{ car.name }}</p>

            <p class="font-black text-blue">${{ numLenCheck(car.price) }}</p>
          </div>
        </a>
      </div>

      <!-- Extra card -->
      <div
        class="flex flex-col p-0 md:w-1/3 lg:w-1/4"
        style="height: 0"
        v-if="cars.length > 0"
      ></div>
      <div
        class="flex flex-col p-0 md:w-1/3 lg:w-1/4"
        style="height: 0"
        v-if="cars.length > 0"
      ></div>
    </div>
  </div>
</template>

<script>
import { useCarStore } from '../../stores/cars'
import { numLenCheck } from '../../helper/numbers'

export default {
  name: 'AllCars',
  props: ['currBrand', 'cars'],
  data() {
    return {
      //   cars: this.cars,
      numLenCheck
    }
  },
  mounted() {
    const carStore = useCarStore()
    // return { cars, numLenCheck }
  },
  methods: {
    // getCarsByBrand(b) {
    //   const carStore = useCarStore()
    //   const cars = carStore.getCarByBrand(b)
    //   console.log(cars)
    //   this.cars = cars
    // }
  }
}
</script>
