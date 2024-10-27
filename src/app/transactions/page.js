import TransactionList from "@/components/ui/transaction/TransactionList";
export default async function page() {
	return (
		<section>
			<h1 className="text-h1 mb-8">Transactions</h1>
			<TransactionList />
		</section>
	);
}
