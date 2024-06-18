import React from "react";
import wonders from "./wonder";
import Image from "next/image";
import Link from "next/link";

const PhotoFeed = () => {
	return (
		<main className="container mx-auto">
			<h1 className="text-center text-3xl font-bold my-4">
				New Wonders of the world
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{wonders.map((wonder) => (
					<Link
						href={`/photo-feed/${wonder.id}`}
						key={wonder.id}
						scroll={false}
					>
						<Image
							src={wonder.src}
							alt={wonder.name}
							className="aspect-square w-full object-cover"
							quality={60}
							priority
						/>
					</Link>
				))}
			</div>
		</main>
	);
};

export default PhotoFeed;
