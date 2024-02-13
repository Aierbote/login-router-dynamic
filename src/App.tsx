import { ReactElement, useContext } from "react";
import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
} from "react-router-dom";
import { AppContext } from "./ContextProvider";
import { LoginRoute } from "./components/LoginRoute";
import { HomeRoute } from "./components/HomeRoute";
import { MyNavbar } from "./components/MyNavbar";

// // Syntax Error : ProtectedRoute has no children like this, not directly
// function ProtectedRoute({ children }: { children: JSX.Element }) {

function ProtectedRoute() {
	const { isAuthenticated } = useContext(AppContext);
	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
}

function App() {
	const { isAuthenticated } = useContext(AppContext);

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
					<Route path="/:id">Detail</Route>
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
