<template>
  <section class="">
    <!-- Top section -->
    <div class="bg-subOrange py-12 px-4">
      <div
        class="top-section gap-8 justify-between flex flex-wrap justify-center"
        style="max-width: 1200px; margin: 0 auto"
      >
        <div class="flex flex-col gap-4 sm:w-1/4">
          <a href="/">
            <img src="../../assets/img/logo.png" width="130" alt="img" />
          </a>

          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum temporibus
            dignissimos harum amet
          </p>

          <div class="flex gap-4">
            <a v-for="(social, i) in socials" :key="i" :href="social.url">
              <img :src="social.img" width="22" alt="img" />
            </a>
          </div>
        </div>

        <div class="py-3 sm:w-1/4 md:py-0">
          <h1 class="py-3 font-black">Navigations</h1>
          <div class="flex flex-col gap-4">
            <a href="/" class="font-semibold text-xs">Home</a>
            <a href="/cars" class="font-semibold text-xs">Cars</a>
            <a href="/support" class="font-semibold text-xs">Support</a>
            <a href="/faqs" class="font-semibold text-xs">FAQs</a>
          </div>
        </div>

        <div class="py-3 sm:w-1/4 md:py-0">
          <h1 class="py-3 font-black">Legal</h1>
          <div class="flex flex-col gap-4">
            <a href="/terms" class="font-semibold text-xs">Terms</a>
            <a href="/conditions" class="font-semibold text-xs">Conditions</a>
            <a href="/policy" class="font-semibold text-xs">Policy</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Button section -->
    <div class="bg-white p-4">
      <p class="text-center text-sm">&copy; Autoworld, 2023. All rights reserved</p>
    </div>
  </section>
</template>

<script>
import socials from '../../data/socials'

export default {
  name: 'Footer',
  data() {
    return {
      socials
    }
  }
}
</script>
