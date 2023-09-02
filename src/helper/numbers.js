const numLenCheck = (num = 150000) => {
  if (typeof num !== 'number') return 'Not a number'

  if (num.toString().length === 5) {
    const numString = num.toString()
    return numString.slice(0, 2) + 'K'
  }

  if (num.toString().length > 4 && num.toString().length < 7) {
    const numString = num.toString()
    return numString.slice(0, 3) + 'K'
  }

  return num
}

export { numLenCheck }
