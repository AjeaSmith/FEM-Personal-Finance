import Balance from "@/components/ui/Balance";
import Budget from "@/components/ui/Budget";
import Pots from "@/components/ui/Pots";
import Recurring from "@/components/ui/Recurring";
import { data } from "../../lib/data";
import Transaction from "@/components/ui/overview/Transaction";

export default async function page() {
	return (
		<section>
			<h1 className="text-h1 pb-8">Overview</h1>

			<section className="mb-8 flex flex-col justify-between gap-y-6 md:flex-row md:items-baseline md:gap-x-6">
				<Balance
					data={data}
					title="Current Balance"
					className="bg-grey-900 text-white"
				/>
				<Balance
					data={data}
					title="Expenses"
					className="bg-white text-grey-900"
				/>
				<Balance
					data={data}
					title="Income"
					className="bg-white text-grey-900"
				/>
			</section>

			<section className="xl:grid xl:grid-flow-col xl:gap-6">
				<div>
					<Pots data={data} />
					<Transaction />
				</div>

				<div className="grid">
					<Budget data={data} />
					<Recurring />
				</div>
			</section>
		</section>
	);
}
