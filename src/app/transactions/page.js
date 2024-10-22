import TransactionsDesk from "@/components/ui/TransactionsDesk";
import TransactionsMobile from "@/components/ui/TransactionsMobile";
import { data } from "@/lib/data";
export default async function page() {
	console.log(data);
	// TODO: Add table with all of transaction data
	// TODO: Add search bar to filter through data
	// TODO: Add dropdown for filter options
	// TODO: Add pagination
	// TODO: Make responsive
	return (
		<section>
			<h1 className="text-h1 mb-8">Transactions</h1>

			<section className="bg-white px-5 py-6 rounded-xl mb-16">
				<div>Search bar | icons for filtering</div>

				<TransactionsMobile />
				<TransactionsDesk />
			</section>
		</section>
	);
}
