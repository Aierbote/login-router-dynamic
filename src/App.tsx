import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider, AppContext } from "./ContextProvider";

function App() {
	const { isAuthenticated, toggleIsAuthenticated } = useContext(AppContext);

	console.log(isAuthenticated);
	console.log(toggleIsAuthenticated);

	return (
		<BrowserRouter>
			<ContextProvider>
				<button onClick={toggleIsAuthenticated}>Click</button>
				{!isAuthenticated ? <button>Login</button> : "puppa"}
				<Routes>
					<Route path="/">Home</Route>
					<Route path="/:id">Detail</Route>
				</Routes>
			</ContextProvider>
		</BrowserRouter>
	);
}

export default App;
