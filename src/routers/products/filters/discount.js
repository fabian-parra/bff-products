const countCharacters = (accum, char) => {
  if(accum[char] === undefined) {
      accum[char] = 1
  } else {
      accum[char] = accum[char] + 1
  }
  return accum
}

const calculateDiscount = data => {
  const repeatedLetters = data.description
                              .toLowerCase()
                              .split('')
                              .filter(char => char !== ' ')
                              .reduce(countCharacters, {})

  const discountPercentPartial = (Object.keys(repeatedLetters)
                                        .map(letter => repeatedLetters[letter] > 1 ? letter : null)
                                        .filter(item => item !== null).length * 10) / 100

  if((discountPercentPartial*data.price) <= (data.price*0.5)) {
    return {
      ...data,
      discount: discountPercentPartial*data.price,
      discountPercent: discountPercentPartial*100
    }
  } else {
    return {
      ...data,
      discount: data.price*0.5,
      discountPercent: 50
    }
  }

}

module.exports = { calculateDiscount }
