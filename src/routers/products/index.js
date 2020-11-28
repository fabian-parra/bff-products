const { Router } = require('express')
const { fetchProductId, fetchProductMatch } = require('./controller')

const productsByIdRoute = Router()
const productsByMatch = Router()

productsByIdRoute.get('/bff/get-products', (req, res, next) => {
  const {id} = req.query
  if(id !== undefined)
  {
    return fetchProductId(id)
           .then(data => res.status(200).send(JSON.stringify(data)))
           .catch((e) => {
            console.error(e)
            res.status(500).send('')
           })
  }
  next()
})

productsByMatch.get('/bff/get-products', (req, res, next) => {
  const {match} = req.query
  if(match !== undefined) {
    return fetchProductMatch(match)
           .then(data => res.status(200).send(JSON.stringify(data)))
           .catch((e) => {
            console.error(e)
            res.status(500).send('')
           })
  }
  next()
})

module.exports = { productsByIdRoute, productsByMatch }
