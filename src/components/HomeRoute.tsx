import { useContext } from "react";
import { AppContext } from "../ContextProvider";
import { Link } from "react-router-dom";

export function HomeRoute() {
	const { homeContents } = useContext(AppContext);

	return (
		<>
			{homeContents.map((uri) => (
				<li key={uri}>
					<Link to={uri}>{uri}</Link>
				</li>
			))}
		</>
	);
}
