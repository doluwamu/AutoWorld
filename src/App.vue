<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/app/NavBar.vue'
</script>

<template>
  <NavBar />

  <!-- <RouterLink to="/about">About</RouterLink> -->
  <RouterView />
</template>
