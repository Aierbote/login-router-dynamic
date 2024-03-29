import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { LoginRoute } from "./components/LoginRoute";
import { HomeRoute } from "./components/HomeRoute";
import { MyNavbar } from "./components/MyNavbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useEffect, useState } from "react";
// import { useState } from "react";

function useFetch(idPost?: string) {
	// const initPostData = !!localStorage.getItem("postData")
	// 	? JSON.parse(localStorage.getItem("postData") as string)
	// 	: null;

	interface PostDataType {
		userId: string;
		id: string;
		title: string;
		body: string;
	}

	interface CommentDataType {
		postId: string;
		id: string;
		name: string;
		email: string;
		body: string;
	}

	const [postData, setPostData] = useState<PostDataType>({
		userId: "",
		id: "",
		title: "",
		body: "",
	});
	const [commentsData, setCommentsData] = useState<Array<CommentDataType>>([
		{
			postId: "",
			id: "",
			name: "",
			email: "",
			body: "",
		},
	]);

	const getPostDetails = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${idPost}`
			);
			const data = await response.json();

			setPostData(data);
			console.log("data", data);
		} catch (err: any) {
			console.error(`Something Wrong with fetching a post with idPost: ${err}`);
		}
	};

	const getPostCommentsDetails = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/comments`
			);
			const data = await response.json();

			const filteredComments = data.filter(
				(comment: CommentDataType) => "" + comment.postId === idPost // NOTE : postId is int in API, while idPost is string
			);

			setCommentsData(filteredComments);
		} catch (err) {
			console.error(`Something Wrong with fetching all comments': ${err}`);
		}
	};

	useEffect(() => {
		getPostDetails();
		getPostCommentsDetails();
	}, []);

	return { postData, commentsData };
}

function DetailRoute() {
	const { idPost } = useParams();
	const { postData, commentsData } = useFetch(idPost as string);

	return (
		<div>
			<div className="post-card">
				<h1>Draft Post Details {idPost}</h1>
				<h3>{postData.title.toUpperCase()}</h3>
				<p>{postData.body}</p>
			</div>
			<div className="comments-list">
				<h3>Comments</h3>
				<ul>
					{commentsData.map((comment) => (
						<li key={comment.id}>
							<h4>{comment.email}</h4>
							<p>{comment.body}</p>
						</li>
					))}
				</ul>
			</div>
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
