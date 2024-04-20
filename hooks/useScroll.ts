"use client";

import { useEffect, useState } from "react";

type ScrollDirection = "UP" | "DOWN" | "NONE";
type ScrollPosition = "TOP" | "BOTTOM" | "MIDDLE" | "NONE";

interface ScrollInfo {
	direction: ScrollDirection;
	position: ScrollPosition;
}

const useScroll = (): ScrollInfo => {
	const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
		direction: "NONE",
		position: "TOP",
	});

	useEffect(() => {
		let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
		let ticking = false;

		const handleScroll = () => {
			const currentScrollTop =
				window.scrollY || document.documentElement.scrollTop;

			if (!ticking) {
				window.requestAnimationFrame(() => {
					const scrollDirection =
						currentScrollTop > lastScrollTop ? "DOWN" : "UP";
					const scrollPosition =
						currentScrollTop === 0
							? "TOP"
							: currentScrollTop + window.innerHeight >=
							  document.documentElement.scrollHeight
							? "BOTTOM"
							: "MIDDLE";

					setScrollInfo({
						direction: scrollDirection,
						position: scrollPosition,
					});

					lastScrollTop = currentScrollTop;
					ticking = false;
				});

				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return scrollInfo;
};

export default useScroll;
