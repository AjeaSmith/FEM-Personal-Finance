import SectionTitle from "../SectionTitle";

export default function Recurring() {
	return (
		<div className="bg-white rounded-xl py-6 px-5 mb-16 xl:mb-0 xl:pb-0">
			<SectionTitle
				link="/recurring-bills"
				title="Recurring Bills"
				linkTitle="See Details"
			/>
			<ul className="flex flex-col gap-3">
				<li className="flex justify-between text-grey-500 bg-beige-100 rounded-lg py-5 px-4 border-l-4 border-green">
					<span>Paid Bills</span>
					<span className="text-body-14-bold">$190.00</span>
				</li>
				<li className="flex justify-between text-grey-500 bg-beige-100 rounded-lg border-l-4 py-5 px-4 border-yellow">
					<span>Total Upcoming</span>
					<span className="text-body-14-bold">$194.98</span>
				</li>
				<li className="flex justify-between text-grey-500 bg-beige-100 rounded-lg border-l-4 py-5 px-4 border-cyan">
					<span>Due Soon</span>
					<span className="text-body-14-bold">$59.98</span>
				</li>
			</ul>
		</div>
	);
}
