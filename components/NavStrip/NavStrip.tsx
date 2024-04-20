"use client";
import useNavBar from "@/hooks/useNavbar";
import Link from "next/link";
import SelectCountry from "./selectCountry";
import { FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import PersonalizeDropdown from "./Personalize";

const NavStrip = () => {
	const [isNavStrip, isTransparent] = useNavBar(true, true);

	return (
		<>
			{isNavStrip && (
				<div
					className={`w-screen box-border flex flex-row justify-between gap-5 bg-opacity-0 lg:px-5 md:px-3 px-3 z-50 ${
						isTransparent
							? "bg-opacity-100 shadow-none "
							: "bg-opacity-100 shadow-md "
					}bg-black h-8 z-10 fixed top-0 left-0 justify-between text-white/[0.7]`}
				>
					{/* left  */}
					<div className="my-auto">
						<SelectCountry />
					</div>

					{/* middle  */}
					<div className="my-auto flex">
						<div className="my-auto tracking-widest uppercase text-xs px-3 p-1">
							free delivery on orders above 2 pairs
						</div>
					</div>

					{/* right  */}
					<div className="flex flex-row gap-3 my-auto ">
						<div className="h-full flex my-auto">
							<PersonalizeDropdown />
						</div>
						<div className="h-full flex my-auto gap-2">
							<FcLike className="my-auto" />
							<div className="my-auto text-xs ">1</div>
						</div>
						<div className="h-full flex my-auto gap-2">
							<FaShoppingCart className="my-auto" />
							<div className="my-auto text-xs">1</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default NavStrip;
