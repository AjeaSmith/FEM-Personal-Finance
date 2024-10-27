export default function SectionCTA({ title, buttonTitle }) {
	return (
		<section className="flex items-center justify-between mb-8">
			<h1 className="text-h1">{title}</h1>
			<button className="p-4 text-body-14-bold bg-grey-900 rounded-lg text-white">
				{buttonTitle}
			</button>
		</section>
	);
}
