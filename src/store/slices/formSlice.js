import { createSlice } from "@reduxjs/toolkit";

const formFieldsData = {
	title: "",
	subtitle: "",
	currency: "U$S",
	price: "",
	isEditing: false,
	priceIndex: [],
};

export const formSlice = createSlice({
	name: "form",
	initialState: formFieldsData,
	reducers: {
		formInitialState() {
			return formFieldsData;
		},

		formFieldInput(state, action) {
			const formField = Object.entries(action.payload)[0];
			const formInputField = formField[0];
			const formInputValue = formField[1];

			return {
				...state,
				[formInputField]: formInputValue,
			};
		},
		formEdit(state, action) {
			const { title, subtitle, currency, price, pageIndex, index } =
				action.payload;

			if (state.priceIndex.length) {
				formInitialState()
			}
			const newPriceIndex = [pageIndex, index];
			return {
				...state,
				title,
				subtitle,
				currency,
				price,
				isEditing: true,
				priceIndex: newPriceIndex,
			};
		},
	},
});

export const { formInitialState, formFieldInput, formEdit } = formSlice.actions;

export default formSlice.reducer;
