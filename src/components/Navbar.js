"use client";
import { menu } from "@/constants/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { MinimizeIcon } from "./Icons";

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(true);
	return (
		<section
			className={`rounded-t-lg bg-grey-900 fixed bottom-0 h-[60px] p-0 w-full | md:h-[84px]  | xl:rounded-none xl:flex xl:flex-col xl:justify-between xl:py-8 xl:box-border ${
				!open ? "xl:w-[88px]" : ""
			} xl:duration-200 xl:sticky xl:top-0 xl:overflow-hidden xl:text-nowrap xl:h-screen`}
		>
			<nav>
				<div className="hidden xl:block xl:text-white xl:px-8">
					<Logo isOpen={open} />
				</div>
				<ul
					className={`pt-3 grid grid-flow-col place-items-center place-content-evenly | md:py-2 | xl:flex xl:flex-col ${
						open ? "xl:mr-6" : "xl:mr-2"
					} xl:my-14 xl:space-y-3 xl:pt-0`}
				>
					{menu.map((item, i) => {
						const Icon = item.icon;
						return (
							<li
								key={i}
								className={`h-full px-3 ${
									pathname === item.link
										? "text-grey-900 bg-white rounded-t-lg border-b-4 border-green | xl:rounded-r-lg xl:rounded-l-none xl:border-b-0 xl:border-l-8"
										: "text-grey-300 border-transparent xl:border-l-8 xl:hover:text-white"
								} xl:w-full xl:py-2`}
							>
								<Link
									href={item.link}
									className={`flex items-center p-3 md:flex-col md:gap-2 xl:flex-row xl:gap-4`}
								>
									<Icon
										className={`flex-shrink-0 ${
											pathname === item.link
												? "text-green"
												: "text-grey-300 hover:text-white"
										}`}
									/>
									<span
										className={`duration-200 text-body-12-bold flex-grow hidden | md:block | xl:text-h3  xl:block ${
											!open && "xl:hidden"
										}`}
									>
										{item.name}
									</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>

			<div className="hidden xl:block" onClick={() => setOpen(!open)}>
				<button className="flex px-8 items-center space-x-4 text-grey-300 hover:text-white">
					<MinimizeIcon open={open} />
					<h3
						className={`text-nowrap text-h3 duration-200 ${!open && "hidden"}`}
					>
						Minimize Menu
					</h3>
				</button>
			</div>
		</section>
	);
}
