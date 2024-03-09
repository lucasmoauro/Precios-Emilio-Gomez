import { useState } from "react";
import { FormField } from "./FormField";

const inputData = [
	{
		title: "titulo",
		field: "title",
	},
	{
		title: "subtitulo",
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

const formFieldsData = {
	title: "",
	subtitle: "",
	currency: "U$S",
	price: "",
};

export const Form = ({ setPagePrices, pagePrices }) => {
	const [form, setForm] = useState(formFieldsData);
	const updatedPagePrices = [...pagePrices];
	const lastArray = pagePrices.length - 1;
	const lastArrayIndex = pagePrices[lastArray];
	const updatedPricesLastArray = pagePrices[lastArray];

	const handlePriceCreate = (e) => {
		e.preventDefault();
		if (lastArray === -1) {
			setPagePrices([...pagePrices, [...pagePrices, form]]);
			setForm(formFieldsData);
		} else if (lastArrayIndex.length < 12) {
			updatedPricesLastArray.push(form);

			setPagePrices(updatedPagePrices);
			setForm(formFieldsData);
		} else {
			const newArray = [];

			newArray.push(form);

			setPagePrices([...pagePrices, newArray]);
			setForm(formFieldsData);
		}

		//TODO: VALIDACIONES ACA
	};

	const handleDataDelete = () => {
		setForm(formFieldsData);
	};

	return (
		<div className="w-2/3 h-2/3 rounded-md shadow-md bg-white">
			<form
				className="h-full flex flex-col justify-evenly"
				onSubmit={(e) => handlePriceCreate(e)}
			>
				{inputData.map((data) => (
					<FormField {...data} key={data.title} setForm={setForm} form={form} />
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
