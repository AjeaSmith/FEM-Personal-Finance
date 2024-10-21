import Balance from "@/components/ui/Balance";
import Budget from "@/components/ui/Budget";
import Pots from "@/components/ui/Pots";
import Recurring from "@/components/ui/Recurring";
import Transactions from "@/components/ui/Transactions";
import { promises as fs } from "fs";

export default async function page() {
	const file = await fs.readFile(process.cwd() + "/src/data.json", "utf8");
	const data = JSON.parse(file);

	return (
		<section className="p-4 md:p-10">
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
					<Transactions data={data} />
				</div>
				{/* ------------------- */}
				<div className="grid">
					<Budget data={data} />
					<Recurring />
				</div>
			</section>
		</section>
	);
}
