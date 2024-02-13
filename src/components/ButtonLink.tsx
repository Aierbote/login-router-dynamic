import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
	onClick: () => void;
	children: ReactNode;
	to: string;
	disabled?: boolean;
}

export function ButtonLink({ onClick, children, to }: Props) {
	return (
		<button onClick={onClick}>
			<Link to={to}>{children}</Link>
		</button>
	);
}
