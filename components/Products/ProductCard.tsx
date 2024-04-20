"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ProductSideviewSheet } from "./ProductSideViewSheet";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { useProductByid } from "@/hooks/useProductById";

type Props = { id: string };

const ProductCard = (props: Props) => {
	const {
		description,
		featuredImage,
		images,
		price,
		title,
		variants,
		loading,
	} = useProductByid(props.id);

	const [image, setImage] = useState(featuredImage);

	const handleHover = () => {
		setImage(images[2]);
	};

	const handleMouseLeave = () => {
		setImage(featuredImage);
	};

	if (loading) {
		return <LoadingCard />;
	}

	return (
		<div className=" group flex flex-col gap-1 overflow-hidden my-auto ">
			<Link href="">
				<div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
					<Image src={image} alt="product" width={247} height={330} />
				</div>
			</Link>

			<div className="flex flex-col text-left gap-1">
				<div className="text-2xl font-bold">product Name</div>
				<div className="text-lg text-muted-foreground">artist name</div>
			</div>
			<div className="text-accent group-hover:text-muted-foreground transition-all duration-200 text-2xl">
				{price}
			</div>
			<div className="flex flex-row justify-start">
				<div className="  bg-red-600 rounded-full w-7 h-7 mr-2 hover:scale-105 focus:scale-95"></div>
				<div className="  bg-blue-400 rounded-full w-7 h-7 mr-2 hover:scale-105 focus:scale-95"></div>
				<div className="  bg-yellow-300 rounded-full w-7 h-7 mr-2 hover:scale-105 focus:scale-95"></div>
				<div className="  bg-slate-300 rounded-full w-7 h-7 mr-2 hover:scale-105 focus:scale-95"></div>
			</div>
			<div className="absolute left-96 bg-red-400">
				<ProductSideviewSheet imageUrl={image} />
			</div>
		</div>
	);
};

const LoadingCard = () => {
	return (
		<div className=" group flex flex-col gap-3 backdrop-blur-sm overflow-hidden w-full  ">
			<Skeleton className="w-full h-[330px] bg-accent" />

			<div className="flex flex-col text-left gap-1">
				<Skeleton className="rounded-xl h-5 w-3/4 mr-auto" />
				<Skeleton className="rounded-xl h-5  w-1/4 mr-auto" />
			</div>
			<Skeleton className="rounded-xl h-5 bg-accent  w-1/4 mr-auto" />

			<div className="my-2 flex flex-row justify-start">
				<Skeleton className="mr-2 size-7 bg-accent-foreground rounded-full" />
				<Skeleton className="mr-2 size-7 bg-accent-foreground rounded-full" />
				<Skeleton className="mr-2 size-7 bg-accent-foreground rounded-full" />
			</div>
		</div>
	);
};

export default ProductCard;
