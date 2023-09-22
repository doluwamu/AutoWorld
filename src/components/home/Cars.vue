<template>
  <section id="tcars" class="pb-20 pt-4" data-aos="fade-up">
    <h1 class="text-4xl text-center font-black py-10">Top sellers</h1>

    <div class="flex flex-col flex-wrap gap-6 justify-evenly px-2 sm:flex-row">
      <div
        class="car-card flex flex-col gap-6 md:w-1/3 lg:w-1/4"
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

      <!-- No cars found -->
      <div class="font-bold text-center" v-if="cars.length < 1">No cars found</div>
    </div>

    <div class="full-inventory-btn flex items-center justify-center">
      <a
        href="/cars"
        class="button bg-main text-center text-white rounded-lg py-2 px-4 md:text-2xl font-bold"
        >View full inventory</a
      >
    </div>
  </section>
</template>

<script>
import { useCarStore } from '../../stores/cars'
import { numLenCheck } from '../../helper/numbers'
// import { RouterLink } from 'vue-router'

export default {
  name: 'Cars',
  data() {
    return {
      numLenCheck,
      cars: []
    }
  },
  mounted() {
    const carStore = useCarStore()

    const cars = carStore.$state.cars

    const carToShow = cars.filter((car) => car.rating >= 4.6)

    this.cars = carToShow.slice(0, 6)
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
