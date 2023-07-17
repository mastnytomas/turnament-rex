import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

const Master = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
			</Routes>
		</>
	);
};

export default Master;
