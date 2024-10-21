import { formatMoney } from "@/utils/formatMoney";

export default function Balance({ data, title, className }) {
	return (
		<div
			className={`text-body-14 ${className} p-5 rounded-xl md:p-6 md:flex-auto`}
		>
			<p className="pb-3">{title}</p>
			<span className="text-h1">{formatMoney(data.balance.current)}</span>
		</div>
	);
}
