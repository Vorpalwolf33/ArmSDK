require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./config/routes')
const configDB = require('./config/configDB');

configDB()
	.then(() => {
		console.log("Successfully connected to database")

		const app = express()
		app.use(express.json())
		app.use(cors())
		app.use('/auth', routes)
		
		const PORT = process.env.AUTH_PORT?process.env.AUTH_PORT:5000
		
		app.listen(PORT, () => {
			console.log("Starting auth server on port: ", PORT)
		})
	})
	.catch(err => console.log(err))
