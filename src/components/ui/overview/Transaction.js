import SectionTitle from "@/components/SectionTitle";
import { data } from "@/lib/data";
import { formatDate } from "@/utils/formateDate";
import { formatMoney } from "@/utils/formatMoney";
import Image from "next/image";

export default function Transaction() {
	<div className="bg-white py-6 px-5 rounded-xl mt-4">
		<SectionTitle
			link="/transactions"
			title="Transactions"
			linkTitle="View All"
		/>
		<ul>
			{data.transactions.slice(0, 5).map((trans, i) => {
				const sign = Math.sign(trans.amount);
				return (
					<li
						id="transactions"
						key={i}
						className="border-b-2 border-grey-100 flex justify-between py-6"
					>
						<span className="text-body-14-bold flex items-center gap-3">
							<Image
								className="rounded-full w-8 h-8"
								src={trans.avatar}
								alt="user"
								width={32}
								height={32}
							/>
							{trans.name}
						</span>
						<p className="flex flex-col items-end gap-2">
							<span
								className={`text-body-14-bold ${sign === 1 && "text-green"}`}
							>
								{sign === 1 ? (
									<>+{formatMoney(trans.amount)}</>
								) : (
									<>{formatMoney(trans.amount)}</>
								)}
							</span>

							<span className="text-grey-500 text-body-12">
								{formatDate(trans.date)}
							</span>
						</p>
					</li>
				);
			})}
		</ul>
	</div>;
}
