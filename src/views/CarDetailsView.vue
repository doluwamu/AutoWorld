<template>
  <div class="flex flex-col md:flex-row">
    <div class="flex flex-col gap-8 py-8 px-2 md:w-3/4 md:px-4">
      <!-- Car name and make -->
      <p
        class="flex flex-col items-center justify-center p-2 gap-2 bg-lightBlue font-bold text-center sm:flex-row sm:text-2xl md:text-4xl md:p-4"
      >
        {{ car.company }} {{ car.name }}
        <span class="text-blue sm:text-xl md:text-2xl">({{ car.model }} model)</span>
      </p>

      <!-- Car logo -->
      <div class="flex justify-end">
        <img :src="car.companyLogo" alt="img" style="width: 50px; height: 50px" />
      </div>

      <!-- Current view image -->
      <div class="current-img">
        <img :src="image" alt="img" />
      </div>

      <!-- Other view images -->
      <div
        class="flex flex-col gap-6 items-center sm:items-start sm:flex-row sm:flex-wrap md:flex-nowrap"
      >
        <div
          @click="changeImgView(car.image)"
          class="flex items-center border p-2 rounded-lg w-1/2 sm:w-1/4"
        >
          <img :src="car.image" alt="img" />
        </div>

        <div
          @click="changeImgView(car.views.side)"
          class="flex items-center border p-2 rounded-lg w-1/2 sm:w-1/4"
        >
          <img :src="car.views.side" alt="img" />
        </div>

        <div class="flex items-center border p-2 rounded-lg w-1/2 sm:w-1/4">
          <img :src="car.image" alt="img" />
        </div>

        <div class="flex items-center border p-2 rounded-lg w-1/2 sm:w-1/4">
          <img :src="car.image" alt="img" />
        </div>
      </div>

      <!-- Other details -->
      <div class="flex flex-col gap-6 border rounded-lg">
        <div class="font-black border-b p-4 sm:text-3xl">Make: {{ car.company }}</div>

        <div class="font-bold border-b p-4 sm:text-3xl">
          Description:
          <p class="py-2 text-base font-medium text-justify">{{ car.description }}</p>
        </div>

        <div class="text-main font-bold border-b p-4 sm:text-2xl">
          Price: ${{ numLenCheck(car.price) }}
        </div>

        <div class="flex flex-col gap-4 border-b p-4">
          <p class="font-black sm:text-3xl">Details:</p>

          <ol v-for="(_, i) in car.details" :key="i" class="mx-4">
            <li class="list-disc">{{ car.details[i] }}</li>
          </ol>
        </div>

        <div class="flex flex-col gap-6 p-4 sm:flex-row">
          <a
            class="button bg-blue text-white text-center p-2 rounded-lg md:w-1/6"
            href="tel:+00000000000"
            >Contact seller</a
          >
          <a class="button bg-main text-white text-center p-2 rounded-lg md:w-1/6" href="#"
            >Report Scam</a
          >
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-8 py-12 px-2 md:w-1/5">
      <p class="font-bold text-2xl py-12 text-center md:text-left md:py-0">Related products</p>

      <p v-if="cars.length < 1">No related product</p>

      <div class="flex flex-col" v-for="(car, i) in cars" :key="i">
        <a :href="`/car/${car.id}?make=${car.company}&name=${car.name}`">
          <img :src="car.image" alt="img" />
        </a>
        <p class="text-xl font-bold">{{ car.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { numLenCheck } from '../helper/numbers'
import { useCarStore } from '../stores/cars'
import { RouterLink } from 'vue-router'
// import { reloadScreen } from '../helper/load'

export default {
  name: 'CarDetails',
  data() {
    return {
      car: null,
      image: null,
      cars: [],
      numLenCheck
    }
  },

  created() {
    const { getCarDetailsById, cars } = useCarStore()

    const carDetails = getCarDetailsById(Number(this.$route.params.id))

    const relatedCars = cars.filter(
      (car) => car.id !== carDetails.id && car.company === carDetails.company
    )

    this.car = carDetails
    this.image = carDetails.image
    this.cars = relatedCars
  },

  methods: {
    changeImgView(imgUrl) {
      // console.log(getCurrentInstance().data.image)
      return (this.image = imgUrl)
    },

    reloadScreen(car) {
      this.$router.push({
        name: 'carDetails',
        params: { id: car.id },
        query: { make: car.company, name: car.name }
      })
      // window.location.
    }
  }
}
</script>
