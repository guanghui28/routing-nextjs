import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Page",
};

const Home = () => {
	return (
		<div>
			<h1 className="text-red-500 text-3xl">Home Page</h1>
		</div>
	);
};

export default Home;
