"use client";

import {
	getAllProductTypes,
	getAllCollections,
	getProductsByProductType,
} from "@/helpers/queryMethods";
import { shopifyFetch } from "@/helpers/queryWrapper";
import { useProductIdsByProductType } from "@/hooks/useProductsByProductType";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

type Props = {};

const Products = (props: Props) => {
	const { productIds } = useProductIdsByProductType("False Eyelashes");

	return (
		<div className="bg-gradient-to-b from-secondary to-black py-10 px-20 flex flex-col">
			<div className="mx-auto text-6xl font-extrabold tracking-widest bg-gradient-to-tr from-white-200 to-primary text-transparent bg-clip-text uppercase pb-10">
				eye lashes
			</div>
			<div className="lg:grid lg:grid-cols-3 lg:gap-5  gap-5 ">
				{productIds.map((item, index) => {
					return <ProductCard key={index} id={item} />;
				})}

				{/* Additional divs or components can be added here */}
				<div className="col-span-3">
					{" "}
					{/* Content for the col-span-3 div */}
				</div>
			</div>
		</div>
	);
};

export default Products;
