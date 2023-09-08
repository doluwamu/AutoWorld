<template>
  <section class="py-20">
    <h1 class="text-4xl text-center font-black py-10">Top sellers</h1>

    <div class="flex flex-col flex-wrap gap-20 justify-center px-2 sm:flex-row">
      <div
        class="car-card flex flex-col gap-6 sm:w-1/3"
        v-if="cars.length > 0"
        v-for="car in cars"
        :key="car.id"
      >
        <!-- top -->
        <div class="">
          <div class="flex justify-between items-center">
            <p
              class="car-company-model w-1/2 text-blue font-black bg-lightBlue text-center py-4 px-2"
            >
              {{ car.company }} <span class="text-black font-medium">{{ car.model }} model</span>
            </p>

            <div
              class="flex items-center gap-1 justify-center bg-main text-center font-bold text-white rounded-lg py-1 px-3 w-1/2"
              style="max-width: 60px"
            >
              <img src="../../assets/img/home/star.png" alt="img" width="20" />
              <span>
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
      </div>

      <!-- Extra card -->
      <div class="flex flex-col p-0 sm:w-1/3" style="height: 0" v-if="cars.length > 0"></div>

      <!-- No cars found -->
      <div class="font-bold text-center" v-if="cars.length < 1">No cars found</div>
    </div>
  </section>
</template>

<script>
import { useCarStore } from '../../stores/cars'
import { numLenCheck } from '../../helper/numbers'
import { storeToRefs } from 'pinia'

export default {
  name: 'Cars',
  setup() {
    const carStore = useCarStore()

    const { cars } = storeToRefs(carStore)

    return { cars }
  },

  data() {
    return {
      numLenCheck
    }
  }
}
</script>

<style>
.car-card {
  border-radius: 20px;
  overflow: hidden;
}

.car-company-model {
  border-bottom-right-radius: 20px;
}
</style>
