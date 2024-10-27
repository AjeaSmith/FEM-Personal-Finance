import SectionCTA from "@/components/ui/SectionCTA";
import { data } from "@/lib/data";
import { formatMoney } from "@/utils/formatMoney";
import Image from "next/image";

export default function page() {
	// TODO: Budget section
	// TODO: Budget summary sections
	// TODO: Add/Edit/Delete popup modals
	return (
		<section>
			<SectionCTA title="Budgets" buttonTitle="+ Add New Budget" />

			<div className="budget-wrapper">
				<div className="bg-white px-6 pt-6 pb-0 rounded-lg">
					<Image
						className="mx-auto py-8"
						src="/assets/images/Chart.png"
						alt="budget chart"
						width={240}
						height={240}
						priority="true"
					/>
					<div>
						<h2 className="text-h2 mb-6">Spending Summary</h2>
						<ul>
							{data.budgets.map((budget, i) => {
								return (
									<li
										key={i}
										className="text-grey-500 border-b border-grey-100 last-of-type:border-none"
										style={{}}
									>
										<div className="flex space-x-4 py-4">
											<div
												className="border-4 rounded-t-lg rounded-b-lg"
												style={{ borderColor: budget.theme }}
											/>
											<div className="flex flex-1 items-center justify-between">
												<p className="text-body-14">{budget.category}</p>
												<span className="text-body-12">
													<span className="text-grey-900 text-h3 mr-2">
														{formatMoney(budget.amount)}
													</span>
													of {formatMoney(budget.maximum)}
												</span>
											</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div>{/* Other content */}</div>
			</div>
		</section>
	);
}
