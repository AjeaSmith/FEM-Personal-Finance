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
import PaginationControls from "./PaginationControls";

export default function TransactionList() {
	const [text, setText] = useState("");

	const [isOpenCategory, setIsOpenCategory] = useState(false);
	const [isOpenSort, setIsOpenSort] = useState(false);

	const [selectedCategory, setSelectedCategory] = useState("All Transactions");
	const [selectedSort, setSelectedSort] = useState("Latest");

	// Calculate pagination
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	// Filter and sort options for transactions
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

	// Get data for the current page
	const paginatedData = useMemo(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		return filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage);
	}, [currentPage, filteredAndSortedData]);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	return (
		<section className="bg-white px-5 py-6 rounded-xl mb-12 xl:mb-0">
			<div className="flex items-center justify-between gap-x-6 md:mb-5">
				<div className="flex flex-1 justify-between items-center border border-beige-500 px-5 py-3 rounded-lg md:flex-none md:w-[32%]">
					<input
						value={text}
						onChange={(e) => setText(e.target.value)}
						type="text"
						placeholder="Search transaction"
						className="w-full border-none outline-none placeholder:text-beige-500"
					/>
					<SearchIcon />
				</div>
				<div className="flex items-center justify-end gap-x-6">
					<div className="flex items-center gap-x-3 md:gap-x-4">
						<Dropdown
							title="Sort by"
							data={sort}
							selected={selectedSort}
							isOpen={isOpenSort}
							setIsOpen={setIsOpenSort}
							setSelected={setSelectedSort}
						>
							<SortMobileIcon
								isOpenSort={isOpenSort}
								setIsOpenSort={setIsOpenSort}
							/>
						</Dropdown>
						<Dropdown
							title="Category"
							data={categories}
							selected={selectedCategory}
							isOpen={isOpenCategory}
							setIsOpen={setIsOpenCategory}
							setSelected={setSelectedCategory}
						>
							<FilterMobileIcon
								isOpenCategory={isOpenCategory}
								setIsOpenCategory={setIsOpenCategory}
							/>
						</Dropdown>
					</div>
				</div>
			</div>

			<TransactionsMobile data={paginatedData} />
			<TransactionsDesk data={paginatedData} />

			<PaginationControls
				totalItems={filteredAndSortedData.length}
				itemsPerPage={itemsPerPage}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</section>
	);
}
