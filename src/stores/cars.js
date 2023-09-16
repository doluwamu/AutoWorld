// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import cars from '../data/cars'

export const useCarStore = defineStore('carStore', {
  state: () => ({
    cars,
    car: null
  }),
  actions: {
    getCarDetailsById(carId) {
      const car = cars.find((car) => car.id === carId)
      return (this.car = car)
    }
  }
})
