import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./ContextProvider";

function App() {
	const { isAuthenticated, toggleIsAuthenticated } = useContext(AppContext);

	return (
		<BrowserRouter>
			<button onClick={toggleIsAuthenticated}>Click</button>
			{!isAuthenticated ? <button>Login</button> : "Let's see the `/home`"}
			<Routes>
				<Route path="/">Home</Route>
				<Route path="/:id">Detail</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
