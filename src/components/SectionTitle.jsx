import Link from "next/link";

function SectionTitle({ title, linkTitle, link }) {
	return (
		<div className="flex justify-between mb-5">
			<span className="text-h2">{title}</span>
			<Link
				href={link}
				className="flex items-center text-grey-500 text-body-14"
			>
				{linkTitle}{" "}
				<svg
					className="ml-4"
					fill="none"
					height="11"
					viewBox="0 0 6 11"
					width="6"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="m.853506.146465 5.000004 5.000005c.04648.04643.08336.10158.10853.16228.02516.06069.03811.12576.03811.19147 0 .0657-.01295.13077-.03811.19147-.02517.06069-.06205.11584-.10853.16228l-5.000004 5.00003c-.069927.07-.159054.1177-.256097.137-.097042.0193-.197637.0094-.289048-.0285-.091412-.0378-.16953-.102-.2244652-.1843-.0549354-.0823-.08421767-.179-.08413981-.278l-.00000043-9.999984c-.00007788-.098949.02920444-.195695.08413984-.277992.0549356-.082297.1330536-.1464431.2244646-.1843193.091412-.03787611.192007-.04777907.289049-.02845381.097042.01932521.186169.06700801.256097.13701411z"
						fill="#696868"
					/>
				</svg>
			</Link>
		</div>
	);
}

export default SectionTitle;
