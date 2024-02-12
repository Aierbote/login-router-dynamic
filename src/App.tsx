import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider, AppContext } from "./ContextProvider";

function App() {
	const { isAuthenticated, toggleIsAuthenticated } = useContext(AppContext);

	// DEBUG : no syntax error, yet `toggleIsAuthenticated()` is not working.
	console.log(isAuthenticated);
	console.log(toggleIsAuthenticated);

	return (
		<BrowserRouter>
			<ContextProvider>
				<button
					onClick={() => {
						console.log("Testing this click");
						toggleIsAuthenticated();
					}}
				>
					Click
				</button>
				{!isAuthenticated ? <button>Login</button> : "Let's see the `/home`"}
				<Routes>
					<Route path="/">Home</Route>
					<Route path="/:id">Detail</Route>
				</Routes>
			</ContextProvider>
		</BrowserRouter>
	);
}

export default App;
