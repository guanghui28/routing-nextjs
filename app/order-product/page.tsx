"use client";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
	const router = useRouter();
	const handleClick = () => {
		router.replace("/thank");
	};

	return (
		<>
			<h1>Order Product</h1>
			<button onClick={handleClick} className="text-green-500">
				Place order ➡️
			</button>
		</>
	);
};

export default OrderProduct;
