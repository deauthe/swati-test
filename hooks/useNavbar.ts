"use client";

import { useEffect, useState } from "react";
import useScroll from "./useScroll";

const useNavBar = (
	navBar: boolean,
	transparent: boolean
): [boolean, boolean] => {
	const { direction, position } = useScroll();
	const [showNavBar, setShowNavBar] = useState(navBar);
	const [isTransparent, setTransparent] = useState(transparent);

	useEffect(() => {
		if (direction === "UP" || position === "TOP" || direction === "NONE") {
			if (position === "TOP") {
				setTransparent(true);
			}
			setShowNavBar(true);
		} else {
			setShowNavBar(false);
		}

		return () => {
			setTransparent(false);
			setShowNavBar(true);
		};
	}, [direction, position]);

	useEffect(() => {}, [showNavBar]);
	return [showNavBar, isTransparent];
};

export default useNavBar;
