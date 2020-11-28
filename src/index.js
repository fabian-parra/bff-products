const express = require('express')
const cors = require('cors')
const {productsByIdRoute, productsByMatch} = require('./routers/products')
const app = express()

app.use(cors())
app.use(productsByIdRoute)
app.use(productsByMatch)

const server = app.listen(process.env.PORT || 8080, () => console.log("Server Up"))

const shutDown = () => {
  server.close(() => {
    console.log('Closed out remaining connections')
    process.exit(0)
  })

  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down')
    process.exit(1)
  }, 10000)
}

process.on('SIGTERM', shutDown)
process.on('SIGINT', shutDown)

