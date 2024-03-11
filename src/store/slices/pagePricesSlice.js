import { createSlice } from "@reduxjs/toolkit";

const pagePricesData = [];

export const pagePricesSlice = createSlice({
	name: "pagePrices",
	initialState: pagePricesData,
	reducers: {
		pagePricesInitialState() {
			return pagePricesData;
		},
		newPrice(state, action) {
			return [...state, [...state, action.payload]];
		},
		firstPagePrice(state, action) {
			const lastArray = state.length - 1;
			const newState = state[lastArray];
			newState.push(action.payload);
		},

		newPagePrice(state, action) {
			const newArray = [];

			newArray.push(action.payload);

			return [...state, newArray];
		},
		priceDelete(state, action) {
			const { pageIndex, index } = action.payload;
			const newPagePrices = state[pageIndex].slice();

			newPagePrices.splice(index, 1);

			return [
				...state.slice(0, pageIndex),
				newPagePrices,
				...state.slice(pageIndex + 1),
			];
		},
		priceEdit(state, action) {
			const { priceIndex } = action.payload;

			const newPagePrices = state[priceIndex[0]].toSpliced(
				priceIndex[1],
				1,
				action.payload
			);

			return [
				...state.slice(0, priceIndex[0]),
				newPagePrices,
				...state.slice(priceIndex[0] + 1),
			];
		},

		filterEmptyPage(state) {
			const stateCopy = [...state];

			const cleanedState = stateCopy.filter((arr) => arr.length > 0);

			return cleanedState;
		},
	},
});

export const {
	pagePricesInitialState,
	newPrice,
	firstPagePrice,
	newPagePrice,
	priceDelete,
	priceEdit,
	filterEmptyPage,
} = pagePricesSlice.actions;

export default pagePricesSlice.reducer;
