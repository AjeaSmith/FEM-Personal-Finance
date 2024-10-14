"use client";
import { menu } from "@/constants/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(true);
	return (
		<section
			className={`rounded-t-lg bg-grey-900 fixed bottom-0 h-[60px] p-0 w-full | md:h-[84px]  | xl:rounded-none xl:flex xl:flex-col xl:justify-between xl:py-8 xl:box-border ${
				!open ? "xl:w-[88px]" : "xl:w-[300px]"
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
					<svg
						className={`${!open && "rotate-180 duration-300"}`}
						fill="none"
						height="20"
						viewBox="0 0 20 20"
						width="20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="m14.0001 5.26002v8.99998c0 .1989-.079.3897-.2197.5304-.1406.1406-.3314.2196-.5303.2196h-2.25v3.75c.0001.1484-.0438.2936-.1262.417-.0824.1235-.1996.2197-.3367.2765s-.288.0717-.4336.0427c-.14554-.029-.27923-.1005-.38412-.2056l-9.000003-9c-.069733-.0696-.125052-.1523-.162795-.2434-.037743-.09102-.05717-.18862-.05717-.28718s.019427-.19615.05717-.2872.093062-.17377.162795-.24342l9.000003-9.000004c.10489-.105009.23858-.1765346.38412-.2055224.1456-.02898777.2965-.0141343.4336.0426801.1371.0568143.2543.1530353.3367.2764803s.1263.268565.1262.416987v3.749999h2.25c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033zm2.25-.75c-.1989 0-.3897.07902-.5303.21967-.1407.14065-.2197.33142-.2197.53033v8.99998c0 .1989.079.3897.2197.5304.1406.1406.3314.2196.5303.2196s.3897-.079.5303-.2196c.1407-.1407.2197-.3315.2197-.5304v-8.99998c0-.19891-.079-.38968-.2197-.53033-.1406-.14065-.3314-.21967-.5303-.21967zm3 0c-.1989 0-.3897.07902-.5303.21967-.1407.14065-.2197.33142-.2197.53033v8.99998c0 .1989.079.3897.2197.5304.1406.1406.3314.2196.5303.2196s.3897-.079.5303-.2196c.1407-.1407.2197-.3315.2197-.5304v-8.99998c0-.19891-.079-.38968-.2197-.53033-.1406-.14065-.3314-.21967-.5303-.21967z"
							fill="#b3b3b3"
						/>
					</svg>
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
