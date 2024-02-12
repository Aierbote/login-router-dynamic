import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./ContextProvider";
import { LoginRoute } from "./components/LoginRoute";
import { HomeRoute } from "./components/HomeRoute";

function App() {
	const { isAuthenticated } = useContext(AppContext);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginRoute />} />
				<Route path="/" element={<HomeRoute />} />
				<Route path="/:id">Detail</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
