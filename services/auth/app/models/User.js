const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	}
})

UserSchema.pre('save', async function(next) {
	const user = this

	if(user.isNew) {
		try {
			const salt = await bcrypt.genSalt(10)
			user.password = await bcrypt.hash(user.password, salt)
			next()
		}
		catch(err) {
			return Promise.reject(err)
		}
	}

	else next()
})

UserSchema.methods.generateToken = function() {
	const user = this

	const tokenData = {
		_id: user._id,
		role: user.role
	}

	const secretKey = process.env.AUTH_SECRET_KEY
	return jwt.sign(tokenData, secretKey, {expiresIn: '1d'})
}

UserSchema.methods.authUser = function(password) {
	const user = this
	return bcrypt.compare(password, user.password)
		.then(() => Promise.resolve(user))
		.catch(err => Promise.reject(err))
}

UserSchema.statics.findByCredentials = function({email, username}) {
	const User = this
	if(email) return User.findOne({email})
	else if(username) return User.findOne({username})
	else return Promise.reject({message: "Please enter valid credentials"})
}

UserSchema.statics.findByToken = function(token) {
	const User = this
	const data = jwt.verify(token, process.env.AUTH_SECRET_KEY)
	return User.findOne({_id: data._id})
}

const User = mongoose.model("User", UserSchema)

module.exports = User;