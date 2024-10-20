import { formatMoney } from "@/utils/formatMoney";
import Image from "next/image";

export default function BudgetChart({ data }) {
	return (
		<div className="mt-7 mb-4">
			<Image
				className="w-[240px] h-[240px] mx-auto"
				src="/assets/images/Chart.png"
				alt="budget chart"
				width={240}
				height={240}
			/>
			{/* ---- Budget List goes here ---- */}
			<section className="grid grid-cols-2 gap-4 mt-4">
				{data.budgets.map((budget, i) => (
					<div className="flex" key={i}>
						<div
							style={{ borderColor: budget.theme }}
							className="border-l-4 rounded-t-xl rounded-b-xl mr-4"
						/>
						<p className="flex flex-col">
							<span className="mb-1">{budget.category}</span>
							<span className="text-body-14-bold text-grey-900">
								{formatMoney(budget.maximum)}
							</span>
						</p>
					</div>
				))}
			</section>
		</div>
	);
}