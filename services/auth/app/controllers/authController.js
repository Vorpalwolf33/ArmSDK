const User = require('../models/User');

module.exports.register = (req, res) => {
	const {username, email, password} = req.body

	if(username && email && password) {
		const newUser = new User({username, email, password})
		newUser.save()
			.then((userdata) => {
				res.json({success: true, message: "User Registered Successfully"})
			})
			.catch(err => {
				const {message} = err
				if(message.includes("duplicate key error")) {
					const index = message.indexOf("{")
					const key = message.slice(index + 2, -1).split(":")[0]
					switch(key) {
						case 'email':
							res.status(400).json({success: false, message: "Email already in use", duplicateKey: "email"})
							break;
						case 'username':
							res.status(400).json({success: false, message: "Username already taken", duplicateKey: "username"})
						default: break;
					}
				} else 
					res.status(500).json({success: false, message: "Internal Server Error, Please try again aftre some time"})
			})
	}
}

module.exports.login = (req, res) => {
	const {email, username, password} = req.body
	User.findByCredentials({email, username})
		.then((user) => user.authUser(password))
		.then(async (user) => {
			const token = await user.generateToken()
			res.set("Authorization", "Bearer " + token)
			res.json({
				success: true,
				email: user.email,
				username: user.username
			})
		})
		.catch((err) => {
			console.log(err)
			res.status(401).json({success: false, message: "Invalid Email / Username / Password"})
		})
}

module.exports.ping = (req, res) => res.json("Auth Ping back")