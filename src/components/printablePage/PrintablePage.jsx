export const PrintablePage = ({ pageData }) => {
	return (
		<>
			{pageData.map((data, i) => (
				<div
					className="border-2 border-black min-h-[10.5rem] max-h-[10rem] w-5/12"
					key={i}
				>
					<div className="min-h-[3.5rem] flex items-center justify-center">
						<span className="text-3xl uppercase font-bold">{data.title}</span>
					</div>

					<div className="text-3xl text-white bg-black min-h-[7rem] flex flex-col items-center justify-center font-bold">
						<div className="">
							<span className="uppercase">{data.subtitle}</span>
						</div>
						<div className="mt-3">
							<span className="uppercase">
								{" "}
								{data.currency} {data.price}
							</span>
						</div>
					</div>
				</div>
			))}
		</>
	);
};
