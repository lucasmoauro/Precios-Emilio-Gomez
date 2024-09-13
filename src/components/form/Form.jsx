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
import { useState } from "react";


{/*
	//!modificar espacio entre etiquetas para que pueda imprimir 2 o mas hojas
	//!agregar funcion que permita agregar mas etiquetas (while o for)  */}
export const Form = () => {
	const dispatch = useDispatch();
	const form = useSelector((state) => state.form);
	const pagePrices = useSelector((state) => state.pagePrices);
	const [isFocused, setIsFocused] = useState(true);
	const lastArray = pagePrices.length - 1;
	const lastArrayIndex = pagePrices[lastArray];

	const handlePriceCreate = (e) => {
		e.preventDefault();
		const { title, subtitle, price, isEditing } = form;

		if (!title || !subtitle || !price) {
			alert("No puede haber campos vacios", "error");
			return;
		}
		if (isEditing) {
			dispatch(priceEdit(form));
		} else if (lastArray === -1) {
			dispatch(newPrice(form));
		} else if (lastArrayIndex.length < 10) {
			dispatch(firstPagePrice(form));
		} else {
			dispatch(newPagePrice(form));
		}
		dispatch(formInitialState());
		setIsFocused(true);
	};

	const handleDataDelete = () => {
		dispatch(formInitialState());
	};

	return (
		<div className="w-2/3 h-2/3 rounded-md shadow-md bg-white py-2">
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


				{/* <div className=" bg-red-600 h-4 w-[100%]"> */}
				{/* div de cantidad de etiquetas */}
					{/* <div></div> */}
				{/* </div> */}

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
