"use client";

import { notFound } from "next/navigation";

type ParamsType = {
	params: {
		productId: string;
		reviewId: string;
	};
};

const ReviewProduct = ({ params }: ParamsType) => {
	const randomInt = Math.floor(Math.random() * 2);
	if (randomInt === 1) {
		throw new Error("Something went wrong!");
	}

	if (parseInt(params.productId) >= 1000) {
		notFound();
	}
	return (
		<h1>
			Review {params.reviewId} to Product {params.productId}
		</h1>
	);
};

export default ReviewProduct;
