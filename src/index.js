import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'

class App {
  constructor () {
    this.express = express()
    this.setupMiddlewares()
    this.setupRoutes()
  }

  setupMiddlewares () {
    this.express.use(express.json())
    this.express.disable('x-powered-by')
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(express.json())
    this.express.use(cors())
  }

  setupRoutes () {
    routes(this.express)
  }

  get expressInstance () {
    return this.express
  }
}


const app = new App()
app.expressInstance.listen(3000, () => {
  console.log('>> Server is running!')
})
