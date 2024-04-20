import { getProductsByProductTypeQuery } from "@/helpers/graphqlQueries";
import {
	getProductById,
	getProductsByProductType,
} from "@/helpers/queryMethods";
import { useEffect, useState } from "react";

export const useProductIdsByProductType = (productType: string) => {
	const [productIds, setProductIds] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchProducts = async () => {
		const rawProducts = await getProductsByProductType(productType);
		console.log("this is the raw products:", rawProducts);
		//@ts-ignore

		const productIdsArray = rawProducts.map(
			(item: { node: { [key: string]: string } }, index: number) => {
				return item?.node?.id;
			}
		);
		console.log("this is the final products:", productIdsArray);
		setProductIds(productIdsArray);
		setLoading(false);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return {
		productIds,
		loading,
		productType,
	};
};
