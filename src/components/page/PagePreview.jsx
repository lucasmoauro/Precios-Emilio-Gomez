import { useDispatch } from "react-redux";
import { PagePrice } from "./PagePrice";
import {
	filterEmptyPage,
	priceDelete,
} from "../../store/slices/pagePricesSlice";
import { useEffect } from "react";
import { formEdit } from "../../store/slices/formSlice";

export const PagePreview = ({ page, pageIndex }) => {
	const dispatch = useDispatch();
	const handlePriceDelete = (index) => {
		dispatch(priceDelete({ pageIndex, index }));
	};

	const handleEditPrice = ({
		title,
		subtitle,
		currency,
		price,
		index,
	}) => {
		dispatch(
			formEdit({
				title,
				subtitle,
				currency,
				price,
				pageIndex,
				index,
			})
		);
	};

	useEffect(() => {
		if (!page.length) {
			dispatch(filterEmptyPage());
		}
	}, [page, dispatch]);

	return (
		<div className="bg-[#e4e4e4] min-h-[53rem] w-9/12 m-auto my-3 flex flex-wrap gap-3 justify-center py-2">
			{page.map((pageData, i) => (
				<PagePrice
					key={i}
					{...pageData}
					index={i}
					handlePriceDelete={handlePriceDelete}
					handleEditPrice={handleEditPrice}
				/>
			))}
		</div>
	);
};
