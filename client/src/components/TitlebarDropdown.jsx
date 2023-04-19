import { useState } from 'react';

const TitlebarDropdown = ({name, options}) => {
	const [showDropdown, setShowDropdown] = useState(false)
	
	const handleBgClick = (e) => {
		e.preventDefault()
		e.stopPropagation()
		setShowDropdown(false)
	}

	return (
		<div className="titlebar-dropdown position-relative">
			<div onClick={() => setShowDropdown(prev => !prev)} className="name">
				{/* {typeof(name) === 'string' && name} */}
				{name}
			</div>
			{
				showDropdown && (
					<div className="bg position-fixed top-0 left-0 z-index-1" onClick={handleBgClick}></div>
				)
			}
			{
				showDropdown && (
					<div className="dropdown-container position-absolute d-flex flex-column justify-content-start top-0" onMouseLeave={() => setShowDropdown(false)}>
						{
							options && Array.isArray(options) && options.map((option, index) => {
								return (
									<div className="option" key={index}>
										{option.name}
									</div>
								)
							})
						}
					</div>
				)
			}
		</div>
	)
}

export default TitlebarDropdown