import { FormField } from "./FormField";
import { useDispatch, useSelector } from "react-redux";
import { formInitialState } from "../../store/slices/formSlice";
import { newPrice, priceEdit } from "../../store/slices/pagePricesSlice";
import { inputData } from "./inputData";
import { alert } from "../Toast/Alert";
import { useState } from "react";

export const Form = () => {
	const dispatch = useDispatch();
	const form = useSelector((state) => state.form);
	const [isFocused, setIsFocused] = useState(true);

	const handlePriceCreate = (e) => {
		e.preventDefault();
		const { title, subtitle, price, isEditing } = form;

		if (!title || !subtitle || !price) {
			alert("No puede haber campos vacios", "error");
			return;
		}

		if (isEditing) {
			dispatch(priceEdit(form));
		} else {
			dispatch(newPrice(form));
		}

		dispatch(formInitialState());
		setIsFocused(true);
	};

	const handleDataDelete = () => {
		dispatch(formInitialState());
	};

	return (
		<div className="w-2/3 rounded-md shadow-md bg-white py-2">
			<form
				className="h-full flex flex-col justify-evenly"
				onSubmit={(e) => handlePriceCreate(e)}
			>
				{inputData.map((data) => (
					<FormField
						{...data}
						key={data.title}
						form={form}
						isFocused={isFocused}
						setIsFocused={setIsFocused}
					/>
				))}

				<div className="items-center flex justify-evenly mt-2 py-2">
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
