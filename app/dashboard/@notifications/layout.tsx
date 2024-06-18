import Card from "@/app/_component/card";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Card>
			<nav>
				<div>
					<Link href="/dashboard/setting">Setting ➡️</Link>
				</div>
				<div className="">
					<Link href="/dashboard/message">Message ➡️</Link>
				</div>
				<div>
					<Link href="/dashboard">Home ➡️</Link>
				</div>
			</nav>
			<div>{children}</div>
		</Card>
	);
};

export default layout;
