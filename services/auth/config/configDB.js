const mongoose = require('mongoose')

const configDB = () => {
	mongoose.Promise = global.Promise
	const URI = process.env.MONGO_URI
	if(process.env.MONGO_URI) return mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
	else return Promise.reject("Error while connecting to database")
}

module.exports = configDB