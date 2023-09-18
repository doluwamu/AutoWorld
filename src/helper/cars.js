export const getBrands = (cars) => {
  let brands = []

  cars.map((car, i) => {
    if (brands.includes(car.company)) return
    return brands.push(car.company)
  })

  return brands
}
