const express = require('express')
const routes = express.Router()

const { login, register, ping } = require('../app/controllers/authController');

routes.post("/register", register)
routes.post('/login', login)
routes.get('/ping', ping)

module.exports = routes