import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GrView } from "react-icons/gr";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

type Props = {
	featuredImage: string;
	title: string;
	description: string;
	productType: string;
};

export function ProductSideviewSheet(props: Props) {
	const { featuredImage, title, description, productType } = props;

	return (
		<Sheet>
			<SheetTrigger asChild className="bg-transparent ">
				<Button
					variant="outline"
					className="rounded-none bg-transparent px-4 text-black uppercase text-sm border-black/[0.1] shadow-md hover:shadow-none  hover:scale-105 bg-white/[0.6] font-extralight tracking-wider"
				>
					details
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="mx-auto text-3xl uppercase font-bold">
						{title}
					</SheetTitle>
					<SheetDescription className="mx-auto text-xs text-center px-5">
						{description}
					</SheetDescription>
				</SheetHeader>
				<div className="">
					<div className="">
						<Image
							src={featuredImage}
							alt="rpod"
							width={200}
							height={200}
							className="mx-auto"
						></Image>
					</div>
					<SheetDescription className="mx-auto text-xs text-center px-5 tracking-widest uppercase">
						{productType}
					</SheetDescription>
				</div>
				<SheetFooter>
					{/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
