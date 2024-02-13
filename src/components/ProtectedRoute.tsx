// // Syntax Error : ProtectedRoute has no children like this, not directly
// function ProtectedRoute({ children }: { children: JSX.Element }) {

import { useContext } from "react";
import { AppContext } from "../ContextProvider";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
	const { isAuthenticated } = useContext(AppContext);
	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
}
