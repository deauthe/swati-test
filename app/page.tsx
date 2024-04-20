import HeroBanner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import FeatureSection from "@/components/Features/FeatureSection";
import Products from "@/components/Products/Products";
import VipStrip from "@/components/VipStrip/VipStrip";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<VipStrip />
			<HeroBanner />
			<Contact />
			<FeatureSection />
			<FeaturedProduct />
			<Products />
		</main>
	);
}
