import express, { Application } from 'express'

import morgan from 'morgan'

// importing the routes file
import apiRouter from './routes/Router'
const PORT = 3000

//create the server  with express
const server: Application = express()

// HTTP request logger middleware
server.use(morgan('dev'))

// registering the api route to the server
server.use('/', apiRouter)

// initating the server
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server is UP and Running on http//:http://localhost:${PORT}`)
})

export default server
