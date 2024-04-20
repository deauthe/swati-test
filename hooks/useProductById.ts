import { getProductById } from "@/helpers/queryMethods";
import { useEffect, useState } from "react";

export const useProductByid = (id: string) => {
	const [featuredImage, setFeaturedImage] = useState();
	const [images, setImages] = useState([{}]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [priceRange, setPriceRange] = useState(0); // Assuming price is a number
	const [variants, setVariants] = useState([]);
	const [loading, setLoading] = useState(true);
	const [productType, setProductType] = useState();

	const fetchProduct = async () => {
		const productRaw = await getProductById(id);
		console.log("this is the raw product:", productRaw);
		//@ts-ignore
		const product = productRaw?.body?.node;
		console.log("this is the final product:", product);

		const featuredImage = product?.featuredImage.url;
		const title = product?.title;
		const description = product?.description;
		const images = product?.images?.nodes;
		const priceRange = product?.priceRange;
		const productType = product?.productType;
		const variants = product?.variants?.nodes;
		setFeaturedImage(featuredImage);
		setDescription(description);
		setImages(images);
		setTitle(title);
		setPriceRange(priceRange);
		setProductType(productType);
		setVariants(variants);
		console.log("fields:", featuredImage, title);
		if (!product || !featuredImage) {
			return;
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	return {
		featuredImage,
		images,
		title,
		description,
		priceRange,
		variants,
		loading,
		productType,
	};
};
