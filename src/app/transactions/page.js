import SearchTransaction from "@/components/ui/transaction/SearchTransaction";
export default async function page() {
	// TODO: Add search bar to filter through data
	// TODO: Add dropdown for filter options
	// TODO: Add pagination
	// TODO is there a way to read data from file within browser & server?
	return (
		<section>
			<h1 className="text-h1 mb-8">Transactions</h1>
			<SearchTransaction />
		</section>
	);
}
