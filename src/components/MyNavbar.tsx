import { useContext } from "react";
import { AppContext } from "../ContextProvider";
import { NavLink } from "react-router-dom";

export function MyNavbar() {
	const { isAuthenticated, toggleIsAuthenticated } = useContext(AppContext);

	return (
		<nav>
			<div>
				<NavLink to="/">Home</NavLink>
			</div>
			<div>
				<NavLink to="/login" onClick={toggleIsAuthenticated}>
					Log Out
				</NavLink>
			</div>
		</nav>
	);
}