<template>
  <h1 class="text-5xl text-center font-black py-10 px-2">Explore popular brands</h1>

  <swiper
    :slides-per-view="1"
    :space-between="20"
    :pagination="{
      type: 'fraction'
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 1
      },
      '768': {
        slidesPerView: 1.05
      },
      '1024': {
        slidesPerView: 1.4
      }
    }"
    class="mySwiper px-2"
    style="overflow-y: visible"
  >
    <swiper-slide
      class="flex flex-col relative gap-6 bg-deepOrange p-4 rounded-lg md:flex-row"
      v-for="car in cars"
      :key="car.id"
    >
      <!-- Image -->
      <img :src="car.image" alt="img" class="w-1/2" />

      <!-- details -->
      <div class="flex flex-col text-white justify-evenly gap-6">
        <p class="text-left">{{ car.model }} Model</p>

        <p class="text-3xl font-black text-left">{{ car.name }}</p>

        <p class="text-left">{{ car.description }}</p>

        <div class="flex gap-6 md:flex-row md:gap-12">
          <!-- Total price -->
          <div class="">
            <p class="text-3xl font-black">${{ numLenCheck(car.price) }}</p>
            <p style="font-size: 12px">Full payment</p>
          </div>

          <!-- Payment period -->
          <div class="">
            <p class="text-3xl font-black">{{ car.paymentPeriod }} months</p>
            <p style="font-size: 12px">Max payment period</p>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex gap-6 md:flex-row md:gap-8">
          <!-- Buy -->
          <a href="#" class="bg-white py-2 px-4 rounded-full"
            ><span class="text-black text-center">Buy</span></a
          >

          <!-- Checkout -->
          <a href="#" class="bg-lightOrange py-2 px-4 rounded-full text-center"
            ><span class="text-cebter">Checkout</span></a
          >
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useCarStore } from '../../stores/cars'
import { storeToRefs } from 'pinia'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { numLenCheck } from '../../helper/numbers'

// Import Swiper styles
import 'swiper/css'

export default {
  name: 'PopularBrands',

  components: {
    Swiper,
    SwiperSlide
  },

  setup() {
    const carStore = useCarStore()

    const { cars } = storeToRefs(carStore)

    return { cars, modules: [Navigation, Pagination, Scrollbar, A11y] }
  },

  data() {
    return {
      numLenCheck
    }
  }
}
</script>

<style>
/* .swiper-pagination {
  background-color: green !important;
  color: greenyellow !important;
  z-index: 9999 !important;
  width: 30px;
  height: 30px;
} */
</style>
