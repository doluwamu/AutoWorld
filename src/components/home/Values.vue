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
    class="flex flex-col justify-center gap-6 pb-10 px-4 sm:flex-wrap sm:flex-row md:flex-nowrap md:px-6"
    data-aos="fade-up"
    style="margin-top: -40px"
  >
    <div
      v-for="value in values"
      :key="value.id"
      class="card flex flex-col gap-6 items-center bg-white rounded-lg px-4 py-6 sm:w-1/3"
    >
      <img :src="value.image" alt="img" class="rounded-full" style="width: 150px; height: 150px" />
      <p class="text-3xl font-black text-center">{{ value.title }}</p>
      <p class="text-center">{{ value.description }}</p>
      <a href="#">
        <span class="text-main text-center">Learn more</span>
      </a>
    </div>

    <div
      class="card flex flex-col gap-6 items-center bg-white rounded-lg px-4 sm:w-1/3 md:hidden"
      style="height: 0"
    ></div>
  </section>
</template>

<style>
.card {
  box-shadow: 0 0 15px 0.5px #dedede;
}
</style>
