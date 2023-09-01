<script>
import values from '../../data/values'

export default {
  name: 'Values',
  data() {
    return {
      values
    }
  }
}
</script>

<template>
  <section
    class="flex flex-col justify-center gap-6 pb-10 px-4 md:flex-row md:px-10"
    style="margin-top: -40px"
  >
    <div
      v-for="value in values"
      class="card flex flex-col gap-6 items-center bg-white rounded-lg px-4 py-6"
    >
      <img :src="value.image" alt="img" class="rounded-full" style="width: 150px; height: 150px" />
      <p class="text-3xl font-black text-center">{{ value.title }}</p>
      <p class="text-center">{{ value.description }}</p>
      <a href="#">
        <span class="text-main text-center">Learn more</span>
      </a>
    </div>
  </section>
</template>

<style>
.card {
  box-shadow: 0 0 15px 0.5px #dedede;
}
</style>
