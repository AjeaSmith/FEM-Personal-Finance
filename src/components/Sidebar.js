"use client";
import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
	BudgetIcon,
	OverviewIcon,
	PotsIcon,
	RecurringIcon,
	TransactionsIcon,
} from "./Icons";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const menu = [
		{ name: "Overview", link: "/overview", icon: OverviewIcon },
		{ name: "Transactions", link: "/transactions", icon: TransactionsIcon },
		{ name: "Budgets", link: "/budgets", icon: BudgetIcon },
		{ name: "Pots", link: "/pots", icon: PotsIcon },
		{
			name: "Recurring bills",
			link: "/recurring-bills",
			icon: RecurringIcon,
		},
	];
	return (
		<aside
			className={`bg-grey-900 h-screen py-10 text-white ${
				open ? "w-[300px]" : "w-[88px]"
			} duration-200 flex flex-col justify-between`}
		>
			<section>
				<div className={`${!open ? "flex justify-center" : "px-8"}`}>
					<Logo isOpen={open} />
				</div>
				<nav>
					<ul className="flex flex-col w-full space-y-4 my-12">
						{menu.map((item, i) => {
							const Icon = item.icon;
							return (
								<li
									key={i}
									className={`text-grey-300 text-nowrap border-l-[5px] py-4 mr-4   ${
										pathname === item.link
											? "bg-white text-grey-900 border-green rounded-r-xl"
											: "border-transparent hover:text-white"
									}`}
								>
									<Link
										href={item.link}
										className={`flex items-center ${
											!open ? "justify-center" : "space-x-4 px-8"
										}`}
									>
										<span className="block float-left">
											<Icon
												className={`${
													pathname === item.link
														? "text-green"
														: "text-grey-300"
												}`}
											/>
										</span>

										<span
											className={`text-h3 flex-1 duration-200 ${
												!open && "hidden"
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
			</section>
			<div onClick={() => setOpen(!open)}>
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
		</aside>
	);
}
