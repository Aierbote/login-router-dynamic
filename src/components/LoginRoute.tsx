import { useContext } from "react";
import { AppContext } from "../ContextProvider";

export function LoginRoute() {
	const { toggleIsAuthenticated } = useContext(AppContext);

	<button onClick={toggleIsAuthenticated}>Click</button>;

	return (
		<>
			<button onClick={toggleIsAuthenticated}>Login...</button>
		</>
	);
}
