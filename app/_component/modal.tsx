"use client";
import { useCallback, useRef, MouseEventHandler, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
	const overlay = useRef(null);
	const wrapper = useRef(null);
	const router = useRouter();

	const onDismiss = useCallback(() => {
		router.back();
	}, [router]);

	const handleClick: MouseEventHandler = useCallback(
		(e) => {
			if (e.target === overlay.current || e.target === wrapper.current) {
				if (onDismiss) onDismiss();
			}
		},
		[onDismiss]
	);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") onDismiss();
		},
		[onDismiss]
	);

	useEffect(() => {
		document.addEventListener("keydown", onKeyDown);

		return () => document.removeEventListener("keydown", onKeyDown);
	}, [onKeyDown]);

	return (
		<div
			className="fixed z-10 inset-0 bg-black/60 p-10"
			ref={overlay}
			onClick={handleClick}
		>
			<div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-2/5 p-6"
				ref={wrapper}
			>
				{children}
			</div>
		</div>
	);
}
