import SearchTransaction from "@/components/ui/transaction/SearchTransaction";
export default async function page() {
	// TODO: Add pagination
	return (
		<section>
			<h1 className="text-h1 mb-8">Transactions</h1>
			<SearchTransaction />
		</section>
	);
}
