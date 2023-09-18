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
    },
    getBrands() {
      let brands = []

      this.cars.map((car, i) => {
        if (brands.includes(car.company)) return
        return brands.push(car.company)
      })

      return brands
    },
    getCarByBrand(brand) {
      return this.cars.filter((car) => car.company === brand)
    }
  }
})
