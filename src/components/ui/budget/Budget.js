import SectionTitle from "@/components/SectionTitle";
import BudgetChart from "./BudgetChart";


export default function Budget({ data }) {
	return (
		<div className="bg-white rounded-xl py-6 px-5 my-6 xl:mt-0 xl:pb-4">
			<SectionTitle link="/budgets" title="Budgets" linkTitle="See Details" />
			<BudgetChart data={data} />
		</div>
	);
}
