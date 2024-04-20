"use client";
import { instagram } from "react-icons-kit/fa/instagram";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { Icon } from "react-icons-kit";
import useMobileView from "@/hooks/useMobileView";
import useNavBar from "@/hooks/useNavbar";
import Link from "next/link";
export const IconInstagram = () => <Icon icon={instagram} size={26} />;
export const IconLinkedIn = () => <Icon icon={linkedinSquare} size={26} />;
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../ui/button";

const Navbar = () => {
	const [isNavbar, isTransparent] = useNavBar(true, true);

	return (
		<>
			{isNavbar && (
				<div
					className={`w-screen box-border flex flex-row justify-between gap-5 bg-opacity-0 lg:px-5 md:px-3 px-3 z-50 ${
						isTransparent
							? "bg-opacity-100 shadow-none "
							: "bg-opacity-100 shadow-md "
					}bg-white h-16 z-10 fixed top-8 left-0 justify-between`}
				>
					<div className="absolute top-0 left-0 flex h-full px-5">
						<button className="bg-none">
							<GiHamburgerMenu className="my-auto text-5xl" />
						</button>
					</div>
					<div className="flex flex-row gap-20 mx-auto  h-fit my-auto">
						<Link
							href="/coloured-lenses"
							className="uppercase h-fit tracking-wide text-nowrap text-sm my-auto"
						>
							coloured lenses
						</Link>
						<Link
							href="/coloured-lenses"
							className="uppercase tracking-wide text-nowrap text-sm my-auto"
						>
							make-up
						</Link>
						<Link
							href="/coloured-lenses"
							className="uppercase h-fit tracking-widest text-nowrap text-3xl my-auto font-extrabold "
						>
							Swati
						</Link>
						<Link
							href="/coloured-lenses"
							className="uppercase tracking-wide text-nowrap text-sm my-auto"
						>
							bundles and sets
						</Link>
						<Link
							href="/coloured-lenses"
							className="uppercase tracking-wide text-nowrap w-fit text-sm my-auto"
						>
							reviews
						</Link>
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
