<template>
  <section class="px-2">
    <!-- Top section -->
    <div class="bg-subOrange py-12">
      <div
        class="top-section flex flex-col justify-center md:flex-row"
        style="max-width: 1200px; margin: 0 auto"
      >
        <div class="flex flex-col gap-3 md:w-1/4">
          <img src="../../assets/img/logo.png" width="150" alt="img" />

          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum temporibus
            dignissimos harum amet
          </p>

          <div class="flex gap-4">
            <a v-for="(social, i) in socials" :key="i" :href="social.url">
              <img :src="social.img" width="25" alt="img" />
            </a>
          </div>
        </div>

        <div class="md:w-1/4">
          <h1 class="py-3 text-center font-black">Navigations</h1>
          <div class="flex flex-col items-center gap-4">
            <a href="/" class="font-medium text-sm">Home</a>
            <a href="/cars" class="font-medium text-sm">Cars</a>
            <a href="/support" class="font-medium text-sm">Support</a>
            <a href="/faqs" class="font-medium text-sm">FAQs</a>
          </div>
        </div>

        <div class="md:w-1/4">
          <h1 class="py-3 text-center font-black">Legal</h1>
          <div class="flex flex-col items-center gap-4">
            <a href="/terms" class="font-medium text-sm">Terms</a>
            <a href="/conditions" class="font-medium text-sm">Conditions</a>
            <a href="/policy" class="font-medium text-sm">Policy</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Button section -->
    <div class="bg-white p-4">
      <p class="text-center">&copy; Autoworld, 2023. All rights reserved</p>
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
