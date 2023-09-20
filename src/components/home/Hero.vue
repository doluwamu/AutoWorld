<script>
import Typed from 'typed.js'
import { ref } from 'vue'

export default {
  name: 'Hero',

  data() {
    return {
      typed: null
    }
  },

  setup() {
    const email = ref('')

    const handleSubmit = () => {
      // console.log(email.value)
      return
    }

    return { email, handleSubmit }
  },

  mounted() {
    this.typed = new Typed(this.$refs.provs, {
      strings: ['Sell', 'Buy', 'Ship'],
      typeSpeed: 200,
      backSpeed: 200,
      loop: true
    })
  },

  unmounted() {
    this.typed.destroy()
  }
}
</script>

<template>
  <section class="hero flex flex-col-reverse py-20 px-6 bg-subOrange md:flex-row">
    <div
      class="flex flex-col justify-center items-center gap-6 px-2 pt-12 md:items-start md:pt-2 md:px-8 md:w-1/2"
      data-aos="zoom-in"
    >
      <form
        @submit.prevent="handleSubmit"
        class="flex gap-2 w-3/4 justify-center md:flex-row md:w-fit"
      >
        <input
          type="text"
          placeholder="Enter email..."
          class="sub-input p-3 rounded-lg outline-none"
          v-model="email"
          style="font-size: 12px; width: 220px !important"
          required
        />
        <input
          type="submit"
          value="Subscribe"
          class="py-3 px-4 bg-main rounded-lg text-white font-black cursor-pointer"
          style="font-size: 12px"
        />
      </form>

      <div class="flex flex-col gap-2">
        <h1 class="text-5xl font-black text-center md:text-left">
          We <span ref="provs" class="text-main"></span>
        </h1>
        <p class="text-3xl font-black text-center md:text-left">
          Get the best deal for your next car
        </p>
      </div>

      <p class="text-center md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum temporibus
        dignissimos harum amet delectus magnam molestiae, quia dolorum doloribus dolore
      </p>

      <a href="/signup" class="button py-2 px-4 bg-black rounded-lg" style="width: 120px">
        <span class="text-white">Get started</span>
      </a>
    </div>

    <div class="flex flex-col items-center justify-center gap-6 md:w-1/2" data-aos="fade-up">
      <img src="../../assets/img/hero-img.png" alt="img" />
    </div>
  </section>
</template>

<style>
.sub-input {
  box-shadow: 0 0 10px 0.5px #dedede;
}

.typed-cursor {
  color: hsl(18, 99%, 49%);
}
</style>
