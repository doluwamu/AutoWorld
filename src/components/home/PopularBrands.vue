<template>
  <div data-aos="fade-up">
    <h1 class="text-4xl text-center font-black pt-20 pb-10 px-2 md:text-5xl">
      Explore popular brands
    </h1>

    <Swiper
      :slides-per-view="1.5"
      :space-between="1"
      :breakpoints="{
        '250': {
          slidesPerView: 2.5
        },
        '400': {
          slidesPerView: 3.5
        },
        '640': {
          slidesPerView: 4.5
        },
        '768': {
          slidesPerView: 5.5
        },
        '1024': {
          slidesPerView: 6
        }
      }"
      class="py-8"
      style="max-width: 1000px; margin: 0 auto"
    >
      <SwiperSlide>
        <div
          @click="filterCarsBrand('Toyota')"
          class="car-brand flex flex-col items-center cursor-pointer"
          style="max-width: 100%"
        >
          <p class="font-black text-center">Toyota</p>
          <CarBrand :show="brand === 'Toyota' ? true : false" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          @click="filterCarsBrand('Lamborghini')"
          class="car-brand flex flex-col items-center cursor-pointer"
          style="max-width: 100%"
        >
          <p class="font-black text-center">Lamborghini</p>
          <CarBrand :show="brand === 'Lamborghini' ? true : false" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          @click="filterCarsBrand('Benz')"
          class="car-brand flex flex-col items-center cursor-pointer"
          style="max-width: 100%"
        >
          <p class="font-black text-center">Benz</p>
          <CarBrand :show="brand === 'Benz' ? true : false" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          @click="filterCarsBrand('BMW')"
          class="car-brand flex flex-col items-center cursor-pointer"
          style="max-width: 100%"
        >
          <p class="font-black text-center">BMW</p>
          <CarBrand :show="brand === 'BMW' ? true : false" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          @click="filterCarsBrand('Ferrari')"
          class="car-brand flex flex-col items-center cursor-pointer"
          style="max-width: 100%"
        >
          <p class="font-black text-center">Ferrari</p>
          <CarBrand :show="brand === 'Ferrari' ? true : false" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          @click="filterCarsBrand('Bugatti')"
          class="car-brand flex flex-col items-center cursor-pointer"
          style="max-width: 100%"
        >
          <p class="font-black text-center">Bugatti</p>
          <CarBrand :show="brand === 'Bugatti' ? true : false" />
        </div>
      </SwiperSlide>
    </Swiper>

    <Swiper
      :slides-per-view="1"
      :space-between="20"
      :pagination="{
        type: 'fraction',
        el: '.swiper-pagination'
      }"
      :navigation="true"
      :breakpoints="{
        '640': {
          slidesPerView: 1
        },
        '768': {
          slidesPerView: 1.03
        },
        '1024': {
          slidesPerView: 1.4
        }
      }"
      class="px-2"
      style="overflow-y: visible"
      ref="mySwiper"
    >
      <SwiperSlide
        class="flex flex-col relative gap-6 bg-white p-4 rounded-lg md:flex-row"
        style="box-shadow: 0 0 15px 0.9px rgb(227, 227, 227)"
        v-for="car in vehicles"
        :key="car.id"
      >
        <!-- Image -->
        <img :src="car.image" alt="img" class="w-1/2" style="max-height: 300px" />

        <!-- details -->
        <div class="flex flex-col text-black justify-evenly gap-6">
          <p class="text-left">{{ car.model }} Model</p>

          <p class="text-4xl font-black text-left text-main">{{ car.name }}</p>

          <p class="text-left">{{ car.description }}</p>

          <div class="flex gap-6 md:flex-row md:gap-12">
            <!-- Total price -->
            <div class="">
              <p class="text-2xl text-center font-black">${{ numLenCheck(car.price) }}</p>
              <p class="text-center" style="font-size: 12px">Full payment</p>
            </div>

            <!-- Payment period -->
            <div class="">
              <p class="text-2xl text-center font-black">{{ car.paymentPeriod }} months</p>
              <p class="text-center" style="font-size: 12px">Max payment period</p>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex gap-6 md:flex-row md:gap-8">
            <!-- Buy -->
            <a
              href="#"
              class="bg-white py-2 px-4 rounded-full"
              style="box-shadow: 0 0 6px 0.9px rgb(221, 221, 221)"
              ><span class="text-black text-center">Buy</span></a
            >

            <!-- Checkout -->
            <a
              :href="`/car/${car.id}?make=${car.company}&name=${car.name}`"
              class="bg-lightOrange py-2 px-4 rounded-full text-center"
              ><span class="text-white">Checkout</span></a
            >
          </div>
        </div>
      </SwiperSlide>
      <div class="swiper-pagination py-2" style="top: 100%"></div>
    </Swiper>

    <p v-if="vehicles.length === 0" class="text-center" style="color: red">Out of stock</p>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useCarStore } from '../../stores/cars'
import { storeToRefs } from 'pinia'
import CarBrand from '../app/CarBrand.vue'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import SwiperCore from 'swiper'

import { numLenCheck } from '../../helper/numbers'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

SwiperCore.use([Navigation, Pagination])

export default {
  name: 'PopularBrands',

  components: {
    Swiper,
    SwiperSlide,
    CarBrand
  },

  data() {
    return {
      numLenCheck,
      brand: 'Lamborghini',
      vehicles: []
    }
  },

  methods: {
    filterCarsBrand(brand = 'Lamborghini') {
      this.brand = brand
      //   console.log(this.brand)

      this.filterCar(brand)
    },

    filterCar(brand) {
      const carsToFilter = this.cars.filter((car) => car.company === brand)

      this.vehicles = carsToFilter
      console.log(carsToFilter)
      //   console.log(this.vehicles)
    }
  },

  setup() {
    const carStore = useCarStore()

    const { cars } = storeToRefs(carStore)

    return { cars, modules: [Navigation, Pagination, Scrollbar, A11y] }
  },

  mounted() {
    const carsToFilter = this.cars.filter((car) => car.company === this.brand)

    this.vehicles = carsToFilter
  }
}
</script>

<style>
.swiper-button-prev:after,
.swiper-button-next:after {
  color: #fff;
  font-size: 10px;
  font-weight: 900;
}

.swiper-button-next,
.swiper-button-prev {
  background-color: black !important;
  height: 30px;
  width: 30px;
  border-radius: 100%;
}

/* .swiper-pagination {
  background-color: green !important;
  color: greenyellow !important;
  z-index: 9999 !important;
  width: 30px;
  height: 30px;
} */
</style>
