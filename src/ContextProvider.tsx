import { ReactNode, createContext, useState } from "react";

interface MyContext {
	isAuthenticated: boolean;
	homeContents: Array<string>;
	// singleDetail: {
	// 	title: string;
	// 	body: string;
	// };
	toggleIsAuthenticated: () => void;
}

// MyContext{
//   isAuthenticated: true | false
//   homeContents: [
//     link1: ".adaf"
//     link2: ".asdaff"
//     ...
//   ],
//   singleDetail: { title}
// }

export const AppContext = createContext<MyContext>({
	isAuthenticated: false,
	homeContents: [],
	// singleDetail: {
	// 	title: "",
	// 	body: "",
	// },
	toggleIsAuthenticated: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const [homeContents, setHomeContents] = useState<Array<string>>([
		"1",
		"2",
		"3",
	]);

	function toggleIsAuthenticated() {
		console.log("isAuthenticated", isAuthenticated);
		setIsAuthenticated(!isAuthenticated);
	}

	return (
		<AppContext.Provider
			value={{
				isAuthenticated,
				toggleIsAuthenticated,
				homeContents,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
