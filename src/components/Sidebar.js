"use client";
// import { motion, useAnimationControls } from "framer-motion";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Logo from "./Logo";
// import {
// 	BudgetIcon,
// 	OverviewIcon,
// 	PlotsIcon,
// 	RecurringIcon,
// 	TransactionsIcon,
// } from "./Icons";

// const containerVariants = {
// 	close: {
// 		width: "5.5rem",
// 		transition: {
// 			type: "spring",
// 			damping: 20,
// 			duration: 0.5,
// 		},
// 	},
// 	open: {
// 		width: "18.75rem",
// 		transition: {
// 			type: "spring",
// 			damping: 20,
// 			duration: 0.1,
// 		},
// 	},
// };

// const svgVariants = {
// 	close: {
// 		rotate: 180,
// 	},
// 	open: {
// 		rotate: 360,
// 	},
// };

// const Sidebar = () => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const containerControls = useAnimationControls();
// 	const svgControls = useAnimationControls();

// 	useEffect(() => {
// 		if (isOpen) {
// 			containerControls.start("open");
// 			svgControls.start("open");
// 		} else {
// 			containerControls.start("close");
// 			svgControls.start("close");
// 		}
// 	}, [isOpen]);

// 	const handleOpenClose = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	return (
// 		<>
// 			<motion.nav
// 				variants={containerVariants}
// 				animate={containerControls}
// 				initial="close"
// 				className="bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600"
// 			>
// 				<div className="flex flex-row w-full justify-between place-items-center">
// 					<div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full" />
// 					<button
// 						className="p-1 rounded-full flex"
// 						onClick={() => handleOpenClose()}
// 					>
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							fill="none"
// 							viewBox="0 0 24 24"
// 							strokeWidth={1}
// 							stroke="currentColor"
// 							className="w-8 h-8 stroke-neutral-200"
// 						>
// 							<motion.path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								variants={svgVariants}
// 								animate={svgControls}
// 								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
// 								transition={{
// 									duration: 0.5,
// 									ease: "easeInOut",
// 								}}
// 							/>
// 						</svg>
// 					</button>
// 				</div>
// 				<div className="flex flex-col gap-3">
// 					<NavigationLink name="Dashboard">
// 						<OverviewIcon />
// 						{/* <ChartBarIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" /> */}
// 					</NavigationLink>
// 					<NavigationLink name="Projects">
// 						{/* <Square2StackIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" /> */}
// 					</NavigationLink>
// 					<NavigationLink name="Tasks">
// 						{/* <DocumentCheckIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" /> */}
// 					</NavigationLink>
// 					<NavigationLink name="Reporting">
// 						{/* <ChartPieIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" /> */}
// 					</NavigationLink>
// 					<NavigationLink name="Users">
// 						{/* <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" /> */}
// 					</NavigationLink>
// 				</div>
// 			</motion.nav>
// 		</>
// 		// <motion.nav
// 		// 	variants={containerVariants}
// 		// 	animate={containerControls}
// 		// 	initial="close"
// 		// 	className="hidden text-white bg-neutral-900 flex-col z-10 gap-20 px-8 absolute top-0 left-0 h-full shadow shadow-neutral-600 xl:flex"
// 		// >
// 		// 	<section className="h-screen flex flex-col justify-between my-10">
// 		// 		<div>
// 		// 			<Logo isOpen={isOpen} />
// 		// 			<div className={`flex flex-col gap-3 my-12`}>
// 		// 				<NavigationLink name="Overview" link="overview">
// 		// 					<OverviewIcon />
// 		// 				</NavigationLink>
// 		// 				<NavigationLink
// 		// 					name="Transactions"
// 		// 					link="transactions"
// 		// 					isOpen={isOpen}
// 		// 				>
// 		// 					<TransactionsIcon />
// 		// 				</NavigationLink>
// 		// 				<NavigationLink name="Budgets" link="budgets" isOpen={isOpen}>
// 		// 					<BudgetIcon />
// 		// 				</NavigationLink>
// 		// 				<NavigationLink name="Plot" link="plot" isOpen={isOpen}>
// 		// 					<PlotsIcon />
// 		// 				</NavigationLink>
// 		// 				<NavigationLink
// 		// 					name="Recurring Bills"
// 		// 					link="recurring-bills"
// 		// 					isOpen={isOpen}
// 		// 				>
// 		// 					<RecurringIcon />
// 		// 				</NavigationLink>
// 		// 			</div>
// 		// 		</div>

// 		// 		<button
// 		// 			className="p-1 rounded-full flex space-x-5 items-center"
// 		// 			onClick={() => handleOpenClose()}
// 		// 		>
// 		// 			<svg
// 		// 				fill="none"
// 		// 				height="20"
// 		// 				viewBox="0 0 20 20"
// 		// 				width="20"
// 		// 				xmlns="http://www.w3.org/2000/svg"
// 		// 			>
// 		// 				<motion.path
// 		// 					variants={svgVariants}
// 		// 					animate={svgControls}
// 		// 					transition={{
// 		// 						duration: 0.5,
// 		// 						ease: "easeInOut",
// 		// 					}}
// 		// 					d="m14.0001 5.26002v8.99998c0 .1989-.079.3897-.2197.5304-.1406.1406-.3314.2196-.5303.2196h-2.25v3.75c.0001.1484-.0438.2936-.1262.417-.0824.1235-.1996.2197-.3367.2765s-.288.0717-.4336.0427c-.14554-.029-.27923-.1005-.38412-.2056l-9.000003-9c-.069733-.0696-.125052-.1523-.162795-.2434-.037743-.09102-.05717-.18862-.05717-.28718s.019427-.19615.05717-.2872.093062-.17377.162795-.24342l9.000003-9.000004c.10489-.105009.23858-.1765346.38412-.2055224.1456-.02898777.2965-.0141343.4336.0426801.1371.0568143.2543.1530353.3367.2764803s.1263.268565.1262.416987v3.749999h2.25c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033zm2.25-.75c-.1989 0-.3897.07902-.5303.21967-.1407.14065-.2197.33142-.2197.53033v8.99998c0 .1989.079.3897.2197.5304.1406.1406.3314.2196.5303.2196s.3897-.079.5303-.2196c.1407-.1407.2197-.3315.2197-.5304v-8.99998c0-.19891-.079-.38968-.2197-.53033-.1406-.14065-.3314-.21967-.5303-.21967zm3 0c-.1989 0-.3897.07902-.5303.21967-.1407.14065-.2197.33142-.2197.53033v8.99998c0 .1989.079.3897.2197.5304.1406.1406.3314.2196.5303.2196s.3897-.079.5303-.2196c.1407-.1407.2197-.3315.2197-.5304v-8.99998c0-.19891-.079-.38968-.2197-.53033-.1406-.14065-.3314-.21967-.5303-.21967z"
// 		// 					fill="#b3b3b3"
// 		// 				/>
// 		// 			</svg>
// 		// 			<p className={`${!isOpen ? "hidden" : "block"}`}>Minimize Menu</p>
// 		// 		</button>
// 		// 	</section>
// 		// </motion.nav>
// 	);
// };
// const NavigationLink = ({ children, name, link, isOpen }) => {
// 	return (
// 		<Link
// 			href="#"
// 			className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
// 		>
// 			{children}
// 			<p className="text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide">
// 				{name}
// 			</p>
// 			{/* <p
// 				className={`${
// 					!isOpen
// 						? "hidden"
// 						: "block text-inherit overflow-clip whitespace-nowrap tracking-wide"
// 				}`}
// 			>
// 				{name}
// 			</p> */}
// 		</Link>
// 	);
// };
// export default Sidebar;
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
	const [open, setOpen] = useState(true);
	const [menu] = useState([
		{ name: "Overview", link: "/overview", icon: OverviewIcon },
		{ name: "Transactions", link: "/transactions", icon: TransactionsIcon },
		{ name: "Budgets", link: "/budgets", icon: BudgetIcon },
		{ name: "Pots", link: "/pots", icon: PotsIcon },
		{
			name: "Recurring bills",
			link: "/recurring-bills",
			icon: RecurringIcon,
		},
	]);
	return (
		<aside
			className={`bg-grey-900 h-screen py-10 text-white ${
				open ? "w-[300px]" : "w-[88px]"
			} duration-300 flex flex-col justify-between`}
		>
			<section>
				<div className={`${!open ? "flex justify-center" : "px-8"}`}>
					<Logo isOpen={open} />
				</div>
				<nav>
					<ul className="flex flex-col w-full space-y-4 my-10">
						{menu.map((item, i) => {
							const Icon = item.icon;
							return (
								<li key={i} className="text-nowrap py-4 border-2 border-green">
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
				<button className="flex items-center space-x-4 text-grey-300 hover:text-white">
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
					<h3 className={`text-h3 duration-300 ${!open && "scale-0"}`}>
						Minimize Menu
					</h3>
				</button>
			</div>
		</aside>
	);
}
