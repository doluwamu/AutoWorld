<template>
  <div class="py-8 px-2 md:w-3/4 md:px-4">
    <p class="bg-lightBlue text-5xl font-bold md:p-4 text-center">
      {{ car.name }} <span class="text-blue text-2xl">({{ car.model }} model)</span>
    </p>
    <img :src="car.image" alt="img" />
    <div class="text-3xl font-black">{{ car.company }}</div>
  </div>
  <div class="md:w-1/4"></div>
</template>

<script>
import { useCarStore } from '../stores/cars'

export default {
  name: 'CarDetails',
  data() {
    return {
      car: null
    }
  },
  created() {
    const { getCarDetailsById } = useCarStore()

    return (this.car = getCarDetailsById(Number(this.$route.params.id)))
  }
}
</script>
