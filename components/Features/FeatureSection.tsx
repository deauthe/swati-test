import Image from "next/image";
import React from "react";
import { SiTicktick } from "react-icons/si";

type Props = {};

const FeatureSection = (props: Props) => {
	return (
		<div className="h-[750px] w-full flex bg-secondary px-44">
			<div className="grid grid-cols-2 gap-10 my-auto mx-auto ">
				<div className="overflow-hidden">
					<Image
						src="/products.png"
						alt="makeup"
						height={1000}
						width={1000}
						className="object-contain"
					/>
				</div>
				<div className="flex flex-col gap-3 text-white">
					<div className="text-3xl uppercase text-primary font-semibold tracking-widest">
						get vip access
					</div>
					<div className="uppercase text-7xl text-primary font-bold">
						Singles Day
					</div>
					<div className="text-lg text-white">
						{
							"our favourite day of the year is coming up and you don't want to miss this one. Sign Up and get:"
						}
					</div>
					<div className="flex flex-col gap-12 mt-6">
						<div className="flex gap-5">
							<SiTicktick className="text-primary text-5xl my-auto" />

							<div className="flex flex-col">
								<div className="font-semibold text-lg">
									Exclusive Vip Access
								</div>
								<div className="font-light text-lg text-white/[0.8]">
									Shop your favourites before they sell out
								</div>
							</div>
						</div>
						<div className="flex gap-5">
							<SiTicktick className="text-primary text-5xl my-auto" />

							<div className="flex flex-col">
								<div className="font-semibold text-lg">
									exclusive vip access
								</div>
								<div className="font-light text-lg text-white/[0.8]">
									Shop your favourites before they sell out
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeatureSection;
