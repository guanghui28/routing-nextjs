"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
	return (
		<div>
			<p className="text-red-500">{error.message}</p>
			<button onClick={reset} className="bg-blue-500 text-white">
				Try Again
			</button>
		</div>
	);
};

export default Error;
