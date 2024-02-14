import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { LoginRoute } from "./components/LoginRoute";
import { HomeRoute } from "./components/HomeRoute";
import { MyNavbar } from "./components/MyNavbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useEffect, useState } from "react";
// import { useState } from "react";

function usePostFetch(idPost: string) {
	// const initPostData = !!localStorage.getItem("postData")
	// 	? JSON.parse(localStorage.getItem("postData") as string)
	// 	: null;

	const [postData, setPostData] = useState<{
		userId: string;
		id: string;
		title: string;
		body: string;
	}>({ userId: "", id: "", title: "", body: "" });

	const getSingleDetail = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${idPost}`
			);
			const data = await response.json();

			setPostData(data);
			console.log("data", data);
		} catch (err: any) {
			console.error(`Something Wrong: ${err}`);
		}
	};

	useEffect(() => {
		getSingleDetail();
	}, []);

	return [postData];
}

function DetailRoute() {
	const { idPost } = useParams();
	const [postData] = usePostFetch(idPost as string);

	return (
		<div>
			<h1>Draft Post Details {idPost}</h1>
			<h3>{postData.title.toUpperCase()}</h3>
			<p>{postData.body}</p>
		</div>
	);
}

function App() {
	// const { isAuthenticated } = useContext(AppContext);

	return (
		<BrowserRouter>
			<MyNavbar />

			<Routes>
				<Route path="/login" element={<LoginRoute />} />

				{/* // Syntax Error : ProtectedRoute has no children like this, not directly  */}
				<Route element={<ProtectedRoute />}>
					<Route path="/" element={<HomeRoute />} />
				</Route>
				<Route element={<ProtectedRoute />}>
					<Route path="/:idPost" element={<DetailRoute />} />
				</Route>
				{/* // NO SYNTAX ERROR, but `Routes` cannot render non-`Route` elements */}
				{/* <ProtectedRoute>
					<>
						<Route path="/" element={<HomeRoute />} />
						<Route path="/:id">Detail</Route>
					</>
				</ProtectedRoute> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
