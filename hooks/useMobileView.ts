"use client";
import { useEffect, useState } from "react";

const useMobileView = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			setIsMobile(width <= 768);
		};

		window.addEventListener("resize", handleResize); //runs whenever resize
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return isMobile;
};

export default useMobileView;
