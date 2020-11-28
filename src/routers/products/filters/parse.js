const parseResponse = ({id, brand, description, image, price, discount, discountPercent, currency}) => ({
  id,
  brand,
  description,
  image,
  price,
  discount,
  discountPercent,
  currency
})

module.exports = { parseResponse }
