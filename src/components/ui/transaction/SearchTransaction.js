"use client";
import { data } from "@/lib/data";
import { useMemo, useState } from "react";
import TransactionsMobile from "./TransactionsMobile";
import TransactionsDesk from "./TransactionsDesk";
import {
	FilterMobileIcon,
	SearchIcon,
	SortMobileIcon,
} from "@/components/Icons";
import { categories, sort } from "@/lib/constant";
import Dropdown from "@/components/Dropdown";

export default function SearchTransaction() {
	// TODO: Responsivly show filter icons
	// TODO: Sort filter
	const [text, setText] = useState("");

	const [isOpenCategory, setIsOpenCategory] = useState(false);
	const [isOpenSort, setIsOpenSort] = useState(false);

	const [selectedCategory, setSelectedCategory] = useState("All Transactions");
	const [selectedSort, setSelectedSort] = useState("Latest");

	const filteredAndSortedData = useMemo(() => {
		return data.transactions
			.filter((val) => {
				const matchesText =
					val.name.toLowerCase().includes(text.toLowerCase()) ||
					val.date.toLowerCase().includes(text.toLowerCase()) ||
					val.amount.toString().includes(text);

				const matchesCategory =
					selectedCategory === "All Transactions" ||
					val.category === selectedCategory;

				return matchesText && matchesCategory;
			})
			.sort((a, b) => {
				switch (selectedSort) {
					case "Latest":
						return new Date(b.date) - new Date(a.date);
					case "Oldest":
						return new Date(a.date) - new Date(b.date);
					case "A to Z":
						return a.name.localeCompare(b.name);
					case "Z to A":
						return b.name.localeCompare(a.name);
					case "Highest":
						return b.amount - a.amount;
					case "Lowest":
						return a.amount - b.amount;
					default:
						return 0;
				}
			});
	}, [data.transactions, text, selectedCategory, selectedSort]);

	return (
		<section className="bg-white px-5 py-6 rounded-xl mb-16">
			<div className="flex items-center justify-between gap-x-6">
				<div className="flex flex-1 justify-between items-center border border-beige-500 px-5 py-3 rounded-lg md:flex-none">
					<input
						value={text}
						onChange={(e) => setText(e.target.value)}
						type="text"
						placeholder="Search transaction"
						className="border-none outline-none placeholder:text-beige-500"
					/>
					<SearchIcon />
				</div>
				<div className="flex items-center justify-end gap-x-6">
					<div className="hidden md:flex items-center gap-x-3">
						<Dropdown
							title="Sort by"
							data={sort}
							selected={selectedSort}
							isOpen={isOpenSort}
							setIsOpen={setIsOpenSort}
							setSelected={setSelectedSort}
						/>
						<Dropdown
							title="Category"
							data={categories}
							selected={selectedCategory}
							isOpen={isOpenCategory}
							setIsOpen={setIsOpenCategory}
							setSelected={setSelectedCategory}
						/>
					</div>
					<div className="flex justify-between items-center gap-x-4 md:hidden">
						<SortMobileIcon />
						<FilterMobileIcon />
					</div>
				</div>
			</div>

			<TransactionsMobile data={filteredAndSortedData} />
			<TransactionsDesk data={filteredAndSortedData} />
		</section>
	);
}
