import { useContext } from "react";
import { AppContext } from "../ContextProvider";
import { Link } from "react-router-dom";

export function HomeRoute() {
	const { homeContents } = useContext(AppContext);

	return (
		<>
			{homeContents.map((url) => (
				<li>
					<Link to={url}>{url}</Link>
				</li>
			))}
		</>
	);
}
