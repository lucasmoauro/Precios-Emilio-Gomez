export const PagePrice = ({ title, subtitle, currency, price }) => {
	return (
		<div className="border-2 border-black w-2/5 h-1/6">
			<div className="h-2/6 text-center">
				<span className="text-xl uppercase font-bold">{title}</span>
			</div>

			<div className="text-xl text-white bg-black h-4/6 flex flex-col text-center font-bold">
				<div className="">
					<span className="uppercase">{subtitle}</span>
				</div>
				<div className="mt-2">
					<span className="uppercase">
						{currency} {price}
					</span>
				</div>
			</div>
		</div>
	);
};
