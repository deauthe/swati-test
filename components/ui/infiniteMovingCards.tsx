"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons/lib";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		title: string;
		strokeOnly: boolean;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative  w-full overflow-hidden  mx-auto bg-mutedBackground",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item, idx) => {
					return (
						<li
							className={`w-fit flex relative rounded-2xl flex-shrink-0  px-8  bg-transparent font-oswald  h-full ${
								item.strokeOnly
									? "text-transparent text-shadow-outline font-extralight"
									: " text-primary font-bold"
							}`}
							key={idx}
						>
							<div className=" w-fit my-auto flex h-full ">
								<div className="relative z-20 flex flex-row items-center mb-auto justify-center ">
									<span className="flex flex-row gap-5 my-auto">
										<div className=" leading-[1.6]   text-lg text-center justify-end flex-col flex mx-auto ">
											{item.title}
										</div>
									</span>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
