"use client";
import React from "react";
import { staticFeautreStripItems } from "./staticStripItems";
import { InfiniteMovingCards } from "@/components/ui/infiniteMovingCards";

const VipStrip = () => {
	return (
		<div className="flex flex-col gap-0 ">
			<InfiniteMovingCards
				items={staticFeautreStripItems}
				direction="left"
				speed="slow"
				pauseOnHover={false}
			></InfiniteMovingCards>
		</div>
	);
};

export default VipStrip;
