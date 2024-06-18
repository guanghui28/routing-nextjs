import { Metadata } from "next";
import "./index.css";
import NavLink from "./_component/NavLink";

export const metadata: Metadata = {
	title: {
		default: "Learn Nextjs",
		template: "%s | GuangHui",
	},
	description: "Learning Nextjs",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="min-h-screen">
				<header className="bg-blue-400 font-bold p-4">
					<p className="text-center">Header</p>
				</header>
				<div className="flex gap-5">
					<NavLink />
					{children}
				</div>
				<footer className="bg-gray-400 font-bold p-4 mt-auto">
					<p className="text-center">Footer</p>
				</footer>
			</body>
		</html>
	);
}
