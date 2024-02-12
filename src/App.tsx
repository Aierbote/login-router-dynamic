import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	useState();

	return (
		<BrowserRouter>
			{/* {!isAuthenticated ? <button>Login</button> : null} */}
			<Routes>
				<Route path="/">Home</Route>
				<Route path="/:id">Detail</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
