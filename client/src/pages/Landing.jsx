import Titlebar from "../components/Titlebar"
import Sidebar from '../components/Sidebar';
import WorkArea from "../components/WorkArea";

const LandingPage = () => {
	return (
		<div className="landing">
			<Titlebar />
			<div className="d-flex flex-row justify-content-start" style={{height: "calc(100vh - var(--titlebar-height) - 2px)"}}>
				<Sidebar />
				<WorkArea />
			</div>
		</div>
	)
}

export default LandingPage