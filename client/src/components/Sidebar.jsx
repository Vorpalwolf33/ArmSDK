import { options } from "../utils/SidebarUtils";
import { toast } from 'react-toastify';

const Sidebar = () => {
	

	return (
		<div className="sidebar d-flex flex-column justify-content-start">
			{
				options && Array.isArray(options) && options.map((option, index) => {
					return (	
						<div key={index} className="option position-relative">
							<div className="name position-absolute top-0">{option.name}</div>
							<option.icon />
						</div>
					)
				})
			}
		</div>
	)
}

export default Sidebar;