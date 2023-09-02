// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import cars from '../data/cars'

export const useCarStore = defineStore('carStore', {
  state: () => ({
    cars
  })
})
