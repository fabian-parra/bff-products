const axios = require('axios').default
const { calculateDiscount } = require('../filters/discount')
const { addCurrency } = require('../filters/currency')
const { parseResponse } = require('../filters/parse')

const HOST = 'ms.product.com'
const PORT = process.env.MS_PORT || '8081'
const URL = `http://${HOST}:${PORT}/products`

const fetchProductId = id => axios.get(`${URL}/${id}`)
  .then(response => response.data)
  .then(calculateDiscount)
  .then(addCurrency)
  .then(parseResponse)

const fetchProductMatch = search => axios.get(`${URL}?match=${search}`)
  .then(response => response.data)
  .then(data => data.map(calculateDiscount))
  .then(data => data.map(addCurrency))
  .then(data => data.map(parseResponse))

module.exports = { fetchProductId, fetchProductMatch }
