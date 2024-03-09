import { createSlice } from "@reduxjs/toolkit";

const pagePricesData = [];

export const pagePricesSlice = createSlice({
	name: "pagePrices",
	initialState: pagePricesData,
	reducers: {
		pagePricesInitialState() {
			return pagePricesData;
		},

		
	},
});

export const { pagePricesInitialState } = pagePricesSlice.actions;

export default pagePricesSlice.reducer;
