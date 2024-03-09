import { createSlice } from "@reduxjs/toolkit";

const formFieldsData = {
	title: "",
	subtitle: "",
	currency: "U$S",
	price: "",
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
	},
});

export const { formInitialState, formFieldInput } = formSlice.actions;

export default formSlice.reducer;
