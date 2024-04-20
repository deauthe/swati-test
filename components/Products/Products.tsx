"use client";

import {
	getAllProductTypes,
	getAllCollections,
	getProductsByProductType,
} from "@/helpers/queryMethods";
import { shopifyFetch } from "@/helpers/queryWrapper";
import React, { useEffect, useState } from "react";

type Props = {};

const Products = (props: Props) => {
	const [category, setcategory] = useState("lashes");
	const [featuredImage, setFeaturedImage] = useState();

	useEffect(() => {
		const data = getProductsByProductType("False Eyelashes");
	}, [category]);

	return <div>Products</div>;
};

export default Products;
