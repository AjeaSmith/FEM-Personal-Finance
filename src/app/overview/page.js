import { formatMoney } from "@/utils/formatMoney";
import { promises as fs } from "fs";
export default async function page() {
	const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
	const data = JSON.parse(file);

	// TODO: Make Responsive (layout tab/mob/desk)
	return (
		<section className="p-4 md:p-10">
			<h1 className="text-h1 pb-8">Overview</h1>

			<section className="mb-8 md:flex md:justify-between md:items-baseline md:gap-6">

				<div className="text-body-14 bg-grey-900 text-white p-5 rounded-xl md:p-6 md:flex-auto">
					<p className="pb-3">Current Balance</p>
					<span className="text-h1">{formatMoney(data.balance.current)}</span>
				</div>

				<div className="my-3 text-body-14 bg-white text-grey-900 p-5 rounded-xl md:p-6 md:flex-auto md:my-0">
					<p className="pb-3 text-grey-500">Income</p>
					<span className="text-h1">{formatMoney(data.balance.income)}</span>
				</div>

				<div className="text-body-14 bg-white text-grey-900 p-5 rounded-xl md:flex-auto md:p-6">
					<p className="pb-3 text-gray-500">Expenses</p>
					<span className="text-h1">{formatMoney(data.balance.expenses)}</span>
				</div>
                
			</section>

			<section>
				<div>
					{/* Pots */}
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
						beatae suscipit quo minima dolor numquam, quam vero blanditiis nemo
						provident illum consequatur harum rerum facilis?
					</div>
					{/* transactions */}
					<div>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
						explicabo molestias soluta fugit! Debitis quod maxime nemo sed
						quisquam eum reiciendis ratione sint explicabo neque!
					</div>
				</div>
				{/* ------------------- */}
				<div>
					{/* budgets */}
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
						beatae suscipit quo minima dolor numquam, quam vero blanditiis nemo
						provident illum consequatur harum rerum facilis?
					</div>
					{/* recurring bills */}
					<div>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
						explicabo molestias soluta fugit! Debitis quod maxime nemo sed
						quisquam eum reiciendis ratione sint explicabo neque!
					</div>
				</div>
			</section>
		</section>
	);
}
