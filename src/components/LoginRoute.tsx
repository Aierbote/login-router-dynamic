import { useContext } from "react";
import { AppContext } from "../ContextProvider";
import { ButtonLink } from "./ButtonLink";

export function LoginRoute() {
	const { toggleIsAuthenticated } = useContext(AppContext);

	<button onClick={toggleIsAuthenticated}>Click</button>;

	return (
		<>
			<ButtonLink onClick={toggleIsAuthenticated} to="/">
				LOGIN
			</ButtonLink>
		</>
	);
}
