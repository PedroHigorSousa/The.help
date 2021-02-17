import express from 'express'

import routes from './routes'

class App {
    constructor() {
        this.app = express()

        this.middlewares()
        this.templateEngine()
        this.routes()
    }

    middlewares() {
        this.app.use('/static', express.static('public'))
    }

    routes() {
        this.app.use(routes)
    }

    templateEngine() {
        this.app.set('view engine', 'pug')
    }
}

export default new App().app