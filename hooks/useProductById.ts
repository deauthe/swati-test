import { getProductById } from "@/helpers/queryMethods";
import { useEffect, useState } from "react";

export const useProductByid = (id: string) => {
	const [featuredImage, setFeaturedImage] = useState("");
	const [images, setImages] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0); // Assuming price is a number
	const [variants, setVariants] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const productRaw = getProductById(id);
		console.log(productRaw);
	}, [id]);

	return {
		featuredImage,
		images,
		title,
		description,
		price,
		variants,
		loading,
	};
};
