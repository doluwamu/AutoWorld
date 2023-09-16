<template>
  <div class="flex flex-col gap-8 py-8 px-2 md:w-3/4 md:px-4">
    <p
      class="flex items-center justify-center gap-2 bg-lightBlue text-5xl font-bold text-center md:p-4"
    >
      {{ car.name }} <span class="text-blue text-2xl">({{ car.model }} model)</span>
    </p>

    <div class="current-img">
      <img :src="image" alt="img" />
    </div>

    <div class="flex flex-col gap-6 sm:flex-row sm:flex-wrap md:flex-nowrap">
      <div @click="changeImgView(car.image)" class="flex items-center border p-2 rounded-lg w-1/4">
        <img :src="car.image" alt="img" />
      </div>

      <div
        @click="changeImgView(car.views.side)"
        class="flex items-center border p-2 rounded-lg w-1/4"
      >
        <img :src="car.views.side" alt="img" />
      </div>

      <div class="flex items-center border p-2 rounded-lg w-1/4">
        <img :src="car.image" alt="img" />
      </div>

      <div class="flex items-center border p-2 rounded-lg w-1/4">
        <img :src="car.image" alt="img" />
      </div>
    </div>

    <div class="text-3xl font-black">Make: {{ car.company }}</div>
    <div class="text-3xl font-bold">
      Description:
      <p class="py-2 text-2xl font-light text-justify">{{ car.description }}</p>
    </div>
  </div>
  <div class="md:w-1/4"></div>
</template>

<script>
import { getCurrentInstance } from 'vue'
import { useCarStore } from '../stores/cars'

export default {
  name: 'CarDetails',
  data() {
    return {
      car: null,
      image: null
    }
  },

  created() {
    const { getCarDetailsById } = useCarStore()

    const carDetails = getCarDetailsById(Number(this.$route.params.id))

    this.car = carDetails
    this.image = carDetails.image
  },

  methods: {
    changeImgView(imgUrl) {
      // console.log(getCurrentInstance().data.image)
      return (this.image = imgUrl)
    }
  }
}
</script>
