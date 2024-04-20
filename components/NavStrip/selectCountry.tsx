import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type Props = {};

const languages = [
	"English",
	"Spanish",
	"French",
	"German",
	"Chinese",
	"Japanese",
	"Arabic",
	"Russian",
	"Portuguese",
	"Italian",
];

const SelectCountry = (props: Props) => {
	const [language, setlanguage] = useState<string | undefined>();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="tracking-widest uppercase text-xs px-3 p-1 flex flex-row gap-3">
				{language || "select language"}
				<IoIosArrowDown className="text-white my-auto" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-black text-white uppercase rounded-none border-none">
				{languages.map((item, index) => {
					return (
						<DropdownMenuItem
							key={index}
							className="hover:bg-white/[0.3] hover:text-black p-1 px-2 text-center"
						>
							{item}
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default SelectCountry;
