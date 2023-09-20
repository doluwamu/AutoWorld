<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/app/NavBar.vue'
import Footer from './components/app/Footer.vue'
</script>

<template>
  <NavBar />

  <!-- <RouterLink to="/about">About</RouterLink> -->
  <RouterView />
  <Footer />
</template>
