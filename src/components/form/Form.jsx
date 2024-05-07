import { FormField } from "./FormField";
import { useDispatch, useSelector } from "react-redux";
import { formInitialState } from "../../store/slices/formSlice";
import {
	firstPagePrice,
	newPagePrice,
	newPrice,
	priceEdit,
} from "../../store/slices/pagePricesSlice";
import { inputData } from "./inputData";
import { alert } from "../Toast/Alert";

export const Form = () => {
	const dispatch = useDispatch();
	const form = useSelector((state) => state.form);
	const pagePrices = useSelector((state) => state.pagePrices);

	const lastArray = pagePrices.length - 1;
	const lastArrayIndex = pagePrices[lastArray];

	const handlePriceCreate = (e) => {
		e.preventDefault();
		const { title, subtitle, price, isEditing } = form;

		if (!title || !subtitle || !price) {
			//TODO: AGREGAR ALERTA ACA
			alert("No puede haber campos vacios", "error");
			return;
		}
		//TODO: VALIDACIONES ACA
		if (isEditing) {
			dispatch(priceEdit(form));
		} else if (lastArray === -1) {
			dispatch(newPrice(form));
		} else if (lastArrayIndex.length < 12) {
			dispatch(firstPagePrice(form));
		} else {
			dispatch(newPagePrice(form));
		}
		dispatch(formInitialState());
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
						{form.isEditing ? "Editar" : "Crear"}
					</button>
				</div>
			</form>
		</div>
	);
};
