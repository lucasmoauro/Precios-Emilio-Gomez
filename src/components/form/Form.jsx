import { FormField } from "./FormField";
import { useDispatch, useSelector } from "react-redux";
import { formInitialState } from "../../store/slices/formSlice";

const inputData = [
	{
		title: "titulo",
		type: "text",
		field: "title",
	},
	{
		title: "subtitulo",
		type: "text",
		field: "subtitle",
	},
	{
		title: "moneda",
		type: "checkbox",
		field: "currency",
	},
	{
		title: "precio",
		type: "number",
		field: "price",
	},
];

export const Form = ({ setPagePrices, pagePrices }) => {
	const updatedPagePrices = [...pagePrices];
	const lastArray = pagePrices.length - 1;
	const lastArrayIndex = pagePrices[lastArray];
	const updatedPricesLastArray = pagePrices[lastArray];
	const dispatch = useDispatch();
	const form = useSelector((state) => state.form);

	const handlePriceCreate = (e) => {
		e.preventDefault();
		if (lastArray === -1) {
			setPagePrices([...pagePrices, [...pagePrices, form]]);
			dispatch(formInitialState());

		} else if (lastArrayIndex.length < 12) {
			updatedPricesLastArray.push(form);
			
			setPagePrices(updatedPagePrices);
			dispatch(formInitialState());
		} else {
			const newArray = [];

			newArray.push(form);

			setPagePrices([...pagePrices, newArray]);
			dispatch(formInitialState());
		}

		//TODO: VALIDACIONES ACA
	};

	const handleDataDelete = () => {
		dispatch(formInitialState());
	};

	return (
		<div className="w-2/3 h-2/3 rounded-md shadow-md bg-white">
			<form
				className="h-full flex flex-col justify-evenly"
				onSubmit={(e) => handlePriceCreate(e)}
			>
				{inputData.map((data) => (
					<FormField {...data} key={data.title} form={form} />
				))}

				<div className="items-center flex justify-evenly mt-2">
					<button
						className="text-red-600 cursor-pointer text-2xl px-5 py-1 rounded hover:bg-red-600/70 hover:text-white transition-all duration-300"
						onClick={handleDataDelete}
						type="button"
					>
						Borrar
					</button>
					<button
						className="bg-green-600 text-white rounded text-2xl px-5 py-1 hover:bg-green-700 transition-all duration-300"
						type="submit"
					>
						Crear
					</button>
				</div>
			</form>
		</div>
	);
};
