import TitlebarDropdown from "./TitlebarDropdown";
import { options, userOptions } from "../utils/TitlebarUtils";
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import { toast, ToastContainer } from "react-toastify";

const Titlebar = () => {
	const handleClick = (option) => {
		switch(option.name) {
			case 'File': 
			
				break;
			case 'View': 
				
				break;
			case 'Download': 
				toast('Preparing to download code!!')
				break;
			default: break;
		}
	}

	return (
		<div className="titlebar d-flex flex-row justify-content-start">
			<div className="logo">
				<Logo />
			</div>
			<div className="options d-flex flex-row justify-content-start flex-grow-1">
				{
					options && Array.isArray(options) && options.map((option, index) => {
						return option.options && Array.isArray(option.options) ? (
							<TitlebarDropdown {...option} key={index}/>
						):(
							<div className="option" key={index} onClick={() => handleClick(option)}>
								{option.name}
							</div>
						)
					})
				}
			</div>
			<div className="user-options">
				<TitlebarDropdown {...userOptions}/>
			</div>
			<ToastContainer />
		</div>
	)
}

export default Titlebar;