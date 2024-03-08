import { PagePrice } from "./PagePrice";

export const PagePreview = ({ page }) => {
	return (
		<div className="bg-[#e4e4e4] min-h-[50rem] w-8/12 m-auto my-3 flex flex-wrap gap-2 justify-center py-2">
			{page.map((pageData, i) => (
				<PagePrice key={i} {...pageData} />
			))}
		</div>
	);
};
