import { useState } from "react";

const defaultUserData = {
	username: "",
	email: "",
	password: ""
}

const Auth = () => {
	const [section, setSection] = useState("Login")
	const [showPassword, setShowPassword] = useState(false)
	const [data, setData] = useState({...defaultUserData})	

	const handleChange = (e) => {
		e.preventDefault()
		setData(prev => {
			return {
				...prev,
				[e.target.name]: e.target.value
			}
		})
	}

	const handleLogin = () => {

	}

	const handleRegister = () => {

	}

	const handleSectionChange = (s) => {
		setData({...defaultUserData})
		setSection(s)	
	}

	return (section === "Login")?(
		<div className="auth login">
			<h2 className="header">Login</h2>
			<form>
				<div>
					<input type="email" name="email" value={data.value} onChange={handleChange} placeholder="Email" />
				</div>
				<div>
					<input type={showPassword?"text":"password"} name="password" value={data.value} onChange={handleChange} placeholder="Password" />
				</div>
				<div>
					<input type="checkbox" checked={showPassword} onChange={e => setShowPassword(e.target.checked)}/>
					Show Password
				</div>
				<button>Login</button>
				<div>
					Do not have an account? <span onClick={() => handleSectionChange('Register')}>Register</span>
				</div>
			</form>	
		</div>
	):(
		<div className="auth register">
			<h2 className="header">Register</h2>
			<form>
				<div>
					<input type="text" name="username" value={data.username} onChange={handleChange} placeholder="Username" />
				</div>
				<div>
					<input type="email" name="email" value={data.value} onChange={handleChange} placeholder="Email" />
				</div>
				<div>
					<input type={showPassword?"text":"password"} name="password" value={data.value} onChange={handleChange} placeholder="Password" />
				</div>
				<div>
					<input type="checkbox" checked={showPassword} onChange={e => setShowPassword(e.target.checked)}/>
					Show Password
				</div>
				<button>Register</button>
				<div>
					Already have an account? <span onClick={() => handleSectionChange('Login')}>Login</span>
				</div>
			</form>	
		</div>
	)
}

export default Auth;