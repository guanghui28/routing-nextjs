import { Metadata } from "next";

type ParamsType = {
	params: {
		productId: string;
	};
};

export const generateMetadata = async ({
	params,
}: ParamsType): Promise<Metadata> => {
	const title = await new Promise((resolve) => {
		setTimeout(() => resolve(`Iphone ${params.productId}`), 100);
	});

	return {
		title: `Product ${title}`,
	};
};

const ProductDetail = async ({ params }: ParamsType) => {
	await new Promise((resolve) => setTimeout(() => resolve(""), 1000));
	return <h1>Detail about Product {params.productId}</h1>;
};

export default ProductDetail;
