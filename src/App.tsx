import { BrowserRouter } from "react-router-dom";
import Master from "./components/Master";
import Menu from "./components/Menu";

function App() {
	return (
		<>
			<BrowserRouter>
				<Menu />
				<Master />
			</BrowserRouter>
		</>
	);
}

export default App;
