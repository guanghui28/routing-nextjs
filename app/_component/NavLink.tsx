"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ href: "/blog", label: "Blog" },
	{ href: "/products", label: "Products" },
	{ href: "/about", label: "About" },
];

const NavLink = () => {
	const pathname = usePathname();
	return (
		<nav className="bg-slate-200 h-40">
			<ul>
				{links.map((link) => (
					<li
						key={link.href}
						className={`my-2 font-bold p-2 rounded-sm w-full ${
							pathname === link.href ? "text-slate-50 bg-slate-700" : ""
						}`}
					>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavLink;
