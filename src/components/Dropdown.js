"use client";

import { DropdownIcon } from "./Icons";

export default function Dropdown({
	title,
	data,
	setIsOpen,
	isOpen,
	selected,
	setSelected,
}) {
	const toggleDropdown = () => setIsOpen(!isOpen);

	const handleSelect = (choice) => {
		setSelected(choice);
		setIsOpen(false);
	};

	return (
		<>
			<p className="text-body-14 text-grey-500">{title}</p>
			<div className="relative text-left inline-block">
				<div>
					<button
						onClick={toggleDropdown}
						className="inline-flex items-center w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 md:gap-x-1"
					>
						{selected}
						<DropdownIcon open={isOpen} />
					</button>
				</div>

				{isOpen && (
					<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="py-1">
							{data.map((item) => (
								<button
									key={item}
									onClick={() => handleSelect(item)}
									className={`block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 ${
										selected === item ? "font-bold" : ""
									}`}
								>
									{item}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
