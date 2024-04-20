"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const HeroBanner = () => {
	return (
		<div className="w-screen relative ">
			<Carousel className="w-full">
				<CarouselContent className="w-full h-[800px] overflow-hidden">
					<CarouselItem className="bg-accent">
						{/* // @eslint-disable-next-line @next/next/no-img-element */}
						<Image
							src={"/bannerImage.jpg"}
							alt="haha"
							width={2000}
							height={2000}
							className="object-cover"
						/>
					</CarouselItem>
					<CarouselItem className="bg-accent w-full">
						{/* // @eslint-disable-next-line @next/next/no-img-element */}
						<Image
							src={"/bannerImage.jpg"}
							alt="haha"
							width={1000}
							height={1000}
							className="object-cover ml-auto"
						/>
					</CarouselItem>
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default HeroBanner;
