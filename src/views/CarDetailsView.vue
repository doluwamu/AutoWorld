<template>
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

    <!-- Other details -->
    <div class="flex flex-col gap-6 border rounded-lg">
      <div class="text-3xl font-black border-b p-4">Make: {{ car.company }}</div>
      <div class="text-3xl font-bold border-b p-4">
        Description:
        <p class="py-2 text-base font-medium text-justify">{{ car.description }}</p>
      </div>
      <div class="text-2xl text-main font-bold border-b p-4">
        Price: ${{ numLenCheck(car.price) }}
      </div>
    </div>
  </div>
  <div class="md:w-1/4"></div>
</template>

<script>
import { numLenCheck } from '../helper/numbers'
import { useCarStore } from '../stores/cars'

export default {
  name: 'CarDetails',
  data() {
    return {
      car: null,
      image: null,
      numLenCheck
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
