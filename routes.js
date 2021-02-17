import Router from 'express'

const routes = new Router()

// Controllers (Index) =>
const IndexControllers = require('./app/controllers/IndexController')

// Index Controller (Routes) =>
routes.get('/', IndexControllers.Home)

export default routes