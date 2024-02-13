import { useContext } from "react";
import { AppContext } from "../ContextProvider";
import { Link } from "react-router-dom";

export function LoginRoute() {
	const { toggleIsAuthenticated } = useContext(AppContext);

	<button onClick={toggleIsAuthenticated}>Click</button>;

	return (
		<>
			<button onClick={toggleIsAuthenticated}>
				<Link to="/">Login...</Link>
			</button>
		</>
	);
}
