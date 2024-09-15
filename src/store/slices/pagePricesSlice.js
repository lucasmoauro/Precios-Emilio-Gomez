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
			const { etiquetas, ...payload } = action.payload;
			const numberOfTimes = Number(etiquetas);
			const lastArray = state.length - 1;

			const newArr = [];

			const newState = lastArray >= 0 ? [...state[lastArray]] : [];

			for (let i = 0; i < numberOfTimes; i++) {
				if (newState.length && newState.length < 10) {
					newState.push(payload);
				} else {
					newArr.push(payload);
				}
			}

			return [
				...state.slice(0, lastArray),
				newState,
				...(newArr.length ? [newArr] : []),
			];
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

			state[priceIndex[0]].splice(priceIndex[1], 1, action.payload);
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
	priceDelete,
	priceEdit,
	filterEmptyPage,
} = pagePricesSlice.actions;

export default pagePricesSlice.reducer;
