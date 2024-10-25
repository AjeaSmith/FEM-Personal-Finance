import { formatDate } from "@/utils/formateDate";
import { formatMoney } from "@/utils/formatMoney";
import Image from "next/image";
export default function TransactionsMobile({ data }) {
	return (
		<div className="bg-white py-6 rounded-xl mt-4 md:hidden">
			<ul>
				{data.map((trans, i) => {
					const sign = Math.sign(trans.amount);
					return (
						<li
							id="transactions"
							key={i}
							className="border-b-2 border-grey-100 flex justify-between py-4"
						>
							<div className="flex items-center gap-3">
								<Image
									className="rounded-full w-8 h-8"
									src={trans.avatar}
									alt="user"
									width={32}
									height={32}
								/>
								<p className="flex flex-col gap-y-1">
									<span className="text-body-14-bold">{trans.name}</span>
									<span className="text-grey-500 text-body-12">
										{trans.category}
									</span>
								</p>
							</div>
							<p className="flex flex-col items-end gap-1">
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
		</div>
	);
}
