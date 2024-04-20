import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {};

const Contact = (props: Props) => {
	return (
		<div className="py-20 bg-primary flex flex-col gap-5">
			<div className="flex flex-col gap-0">
				<div className="mx-auto w-fit uppercase font-bold  text-2xl tracking-[0.3em]">
					vip access singles day
				</div>
				<div className="mx-auto w-fit text-lg tracking-wide">
					sign up and get early access to our singles day
				</div>
			</div>

			<div className="mx-auto flex flex-row px-5 justify-center gap-5 w-full">
				<Input
					type="email"
					placeholder="enter your email address to apply"
					className="my-auto rounded-none active:border-none w-5/12 text-center py-5"
				/>
				<Button className="bg-black text-primary my-auto uppercase rounded-none hover:text-black text-2xl px-20 py-5">
					Apply Now!
				</Button>
			</div>
		</div>
	);
};

export default Contact;
