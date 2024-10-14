import { BudgetIcon, OverviewIcon, PotsIcon, RecurringIcon, TransactionsIcon } from "@/components/Icons";

export const menu = [
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
