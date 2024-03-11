import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import pagePricesReducer from "./slices/pagePricesSlice";
export default configureStore({
	reducer: {
		form: formReducer,
		pagePrices: pagePricesReducer,
	},
});
