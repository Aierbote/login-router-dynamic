import { useContext } from "react";
import { AppContext } from "../ContextProvider";
import { NavLink } from "react-router-dom";
import { ButtonLink } from "./ButtonLink";

export function MyNavbar() {
	const { isAuthenticated, toggleIsAuthenticated } = useContext(AppContext);

	return (
		<nav>
			<div>
				<NavLink to="/">Home</NavLink>
			</div>
			<div>
				{isAuthenticated ? (
					<ButtonLink to="/login" onClick={toggleIsAuthenticated}>
						LOGOUT
					</ButtonLink>
				) : (
					<button disabled={!isAuthenticated}>Logged Out</button>
				)}
			</div>
		</nav>
	);
}
