import { formatDate } from "@/utils/formateDate";
import { formatMoney } from "@/utils/formatMoney";
import Image from "next/image";
export default function TransactionsDesk({ data }) {
	return (
		<table className="hidden md:table w-full table-auto">
			<thead className="border-b-2 border-b-grey-100">
				<tr className="text-grey-500 text-body-12 text-left">
					<th className="font-normal">Recipient/Sender</th>
					<th className="font-normal">Category</th>
					<th className="font-normal">Transaction Date</th>
					<th className="font-normal">Amount</th>
				</tr>
			</thead>
			<tbody>
				{data.map((trans, i) => {
					const sign = Math.sign(trans.amount);
					return (
						<tr key={i} className="border-b-2 border-b-grey-100">
							<td>
								<span className="flex items-center gap-x-4 text-body-14-bold">
									<Image
										className="rounded-full"
										src={trans.avatar}
										width="40"
										height="40"
										alt={trans.name}
									/>
									{trans.name}
								</span>
							</td>
							<td className="text-body-12 text-grey-500">{trans.category}</td>
							<td className="text-body-12 text-grey-500">
								{formatDate(trans.date)}
							</td>
							<td className="text-body-14-bold">
								<span className={`${sign === 1 && "text-green"}`}>
									{sign === 1 ? (
										<>+{formatMoney(trans.amount)}</>
									) : (
										<>{formatMoney(trans.amount)}</>
									)}
								</span>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
