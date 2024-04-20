"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

import React, { useState } from "react";

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

const PersonalizeDropdown = (props: Props) => {
	const [language, setlanguage] = useState<string | undefined>();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="tracking-widest uppercase text-xs px-3 p-1 my-auto flex flex-row gap-3  w-fit ">
				{"personalize"}
				<IoIosArrowDown className="text-white my-auto" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-black text-white uppercase rounded-none border-none">
				{languages.map((item, index) => {
					return (
						<DropdownMenuItem
							textValue=""
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

export default PersonalizeDropdown;
