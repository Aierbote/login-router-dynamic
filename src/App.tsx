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

// // Syntax Error : ProtectedRoutes has no children like this, not directly
// function ProtectedRoutes({ children }: { children: JSX.Element }) {

function ProtectedRoutes() {
	const { isAuthenticated } = useContext(AppContext);
	if (!isAuthenticated) {
		return <Navigate to="/" />;
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
				{/* // Syntax Error : ProtectedRoutes has no children like this, not directly  */}
				<Route element={<ProtectedRoutes />}>
					<Route path="/" element={<HomeRoute />} />
					<Route path="/:id">Detail</Route>
				</Route>
				{/* // NO SYNTAX ERROR, but `Routes` cannot render non-`Route` elements */}
				{/* <ProtectedRoutes>
					<>
						<Route path="/" element={<HomeRoute />} />
						<Route path="/:id">Detail</Route>
					</>
				</ProtectedRoutes> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
