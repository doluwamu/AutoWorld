<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavBar'
}
</script>

<template>
  <div
    class="flex justify-evenly items-center flex-wrap py-6 sticky top-0 bg-white md:flex-nowrap"
    style="max-width: 1400px; margin: 0 auto"
  >
    <img src="../../assets/img/logo.png" alt="img" style="width: 120px; height: 30px" />

    <div class="flex gap-6 nav-links">
      <RouterLink to="/home" class="font-bold">Home</RouterLink>
      <RouterLink to="/cars" class="font-bold">Cars</RouterLink>
      <RouterLink to="/services" class="font-bold">Services</RouterLink>
      <RouterLink to="/supports" class="font-bold">Supports</RouterLink>
      <RouterLink to="/faqs" class="font-bold">FAQs</RouterLink>
    </div>

    <div class="auth-buttons flex gap-6">
      <a href="/signup" class="button py-2 px-4 bg-black rounded-lg">
        <span class="text-white">Get started</span>
      </a>

      <a href="/login" class="button py-2 px-4 bg-main rounded-lg">
        <span class="text-white">Login</span>
      </a>
    </div>
  </div>
</template>
