"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ProductSideviewSheet } from "./ProductSideViewSheet";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { useProductByid } from "@/hooks/useProductById";
import { Button } from "../ui/button";

type Props = { id: string };

const ProductCard = (props: Props) => {
	const {
		description,
		featuredImage,
		images,
		priceRange,
		title,
		variants,
		loading,
		productType,
	} = useProductByid(props.id);
	const [image, setImage] = useState();

	useEffect(() => {
		setImage(featuredImage);
		console.log("feautured image :", featuredImage);
	}, [featuredImage]);

	const handleHover = () => {
		setImage(featuredImage);
	};

	const handleMouseLeave = () => {
		setImage(featuredImage);
	};

	if (loading) {
		return <LoadingCard />;
	}

	return (
		<div className=" group flex flex-col gap-1 overflow-hidden my-auto mx-auto w-96  bg-gradient-to-b from-white-100/[0.6] to-white-100  p-5 shadow-lg">
			<div className="relative top-0 right-0 ml-auto ">
				{featuredImage && (
					<ProductSideviewSheet
						featuredImage={featuredImage}
						description={description}
						productType={productType || ""}
						title={title || ""}
					/>
				)}
			</div>
			<Link href="">
				<div
					onMouseEnter={handleHover}
					onMouseLeave={handleMouseLeave}
					className=" w-fit mx-auto h-fit overflow-hidden  my-auto flex flex-col 
				"
				>
					{featuredImage && (
						<Image
							onLoad={(e) => {
								console.log(e.target);
							}}
							src={featuredImage}
							alt="product"
							width={300}
							height={300}
							className="mx-auto my-auto object-contain"
						/>
					)}
				</div>
			</Link>

			<div className="flex flex-col text-left gap-1 mx-auto text-black">
				<div className="text-2xl font-bold uppercase text-wrap mx-auto">
					{title}
				</div>
				<div className="text-xs text-black mx-auto">{productType}</div>
			</div>

			<div className="flex flex-row justify-between mt-5">
				<Button className="shadow-md bg-gradient-to-r from-primary to-secondary text-white-100 rounded-none px-4 uppercase hover:from-black hover:to-secondary transition-all duration-100 hover:scale-105">
					Add to cart
				</Button>

				<Button
					variant={"outline"}
					className="shadow-md bg-white text-black rounded-none px-4 uppercase  hover:scale-105"
				>
					wishlist
				</Button>
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
