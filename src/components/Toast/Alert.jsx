import { toast, Zoom } from "react-toastify";
export const alert = (message, type) => {
	toast[type](message, {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
		transition: Zoom,
	});
};
