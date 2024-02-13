import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { LoginRoute } from "./components/LoginRoute";
import { HomeRoute } from "./components/HomeRoute";
import { MyNavbar } from "./components/MyNavbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
// import { useState } from "react";

function DetailRoute() {
	const { idPost } = useParams();

	return (
		<div>
			<h1>Draft Post Details {idPost}</h1>
		</div>
	);
}

function App() {
	// const { isAuthenticated } = useContext(AppContext);

	return (
		<BrowserRouter>
			<MyNavbar />

			<Routes>
				<Route path="/login" element={<LoginRoute />} />

				{/* // Syntax Error : ProtectedRoute has no children like this, not directly  */}
				<Route element={<ProtectedRoute />}>
					<Route path="/" element={<HomeRoute />} />
				</Route>
				<Route element={<ProtectedRoute />}>
					<Route path="/:idPost" element={<DetailRoute />} />
				</Route>
				{/* // NO SYNTAX ERROR, but `Routes` cannot render non-`Route` elements */}
				{/* <ProtectedRoute>
					<>
						<Route path="/" element={<HomeRoute />} />
						<Route path="/:id">Detail</Route>
					</>
				</ProtectedRoute> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
