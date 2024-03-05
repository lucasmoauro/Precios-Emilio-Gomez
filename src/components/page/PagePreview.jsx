import { PagePrice } from "./PagePrice";

export const PagePreview = ({ pagePrices }) => {
	return (
		<div className="bg-[#353535] flex-1 h-full overflow-y-scroll">
			<div className="bg-[#cdcdcd] h-[95%] w-8/12 m-auto my-3 flex flex-wrap gap-2 justify-center py-2">
				{pagePrices.map((price, i) => (
					<PagePrice key={i} {...price} />
				))}
			</div>
		</div>
	);
};
