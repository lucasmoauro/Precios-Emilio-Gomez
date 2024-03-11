import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export const PagePrice = ({
	title,
	subtitle,
	currency,
	price,
	handlePriceDelete,
	handleEditPrice,
	index,
}) => {
	const [focus, setFocus] = useState(false);
	const handleFocus = (status) => {
		setFocus(status);
	};

	return (
		<div
			className="w-5/12 min-h-[8rem] max-h-[8rem] flex flex-col justify-end relative"
			onMouseEnter={() => handleFocus(true)}
			onMouseLeave={() => handleFocus(false)}
		>
			<div
				className={`border-2 border-black w-full min-h-[7rem] max-h-[7rem] ${
					focus ? "scale-105" : "scale-100"
				} cursor-pointer transition duration-200`}
				onClick={() =>
					handleEditPrice({ title, subtitle, currency, price, index })
				}
			>
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

			<div
				className={`bg-red-600 hover:bg-red-700 absolute top-0 -right-2 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer scale-105 ${
					!focus ? "opacity-0" : "opacity-100"
				} transition-[opacity] duration-200`}
				onMouseEnter={() => handleFocus(true)}
				onClick={() => handlePriceDelete(index)}
			>
				<FaTimes className="text-white" />
			</div>
		</div>
	);
};
