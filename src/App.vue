<script setup lang="js">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import NavBar from './components/app/NavBar.vue'
import Footer from './components/app/Footer.vue'
import Aos from 'aos'

onMounted(() => {
  Aos.init({
    offset: 200,
    duration: 1000,
    easing: 'ease-in-sine',
    delay: 20,
    once: true
  })
})
</script>

<template>
  <NavBar />
  <!-- <RouterLink to="/about">About</RouterLink> -->
  <RouterView />
  <Footer />
</template>
