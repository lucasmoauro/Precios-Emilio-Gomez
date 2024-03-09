import { useDispatch } from "react-redux";
import { formFieldInput } from "../../store/slices/formSlice";

export const FormField = ({ title, type, field, form }) => {
	const dispatch = useDispatch();

	const handleFieldChange = (e, currency) => {
		if (!currency) {
			dispatch(formFieldInput({ [e.target.name]: e.target.value }));
		} else {
			dispatch(formFieldInput({ [e.target.name]: currency }));
		}
	};

	if (field !== "currency") {
		return (
			<div className="flex justify-center">
				<div className="flex flex-col w-3/4">
					<label htmlFor={title} className="text-2xl capitalize mb-1">
						{title}
					</label>
					<input
						type={type}
						name={field}
						min={0}
						max={99999}
						id={title}
						value={form[field]}
						className="text-xl pl-2 py-2 rounded shadow-md border focus:outline"
						onChange={(e) => handleFieldChange(e)}
					/>
				</div>
			</div>
		);
	} else if (field === "currency") {
		return (
			<div className="flex justify-center w-full ">
				<div className="flex flex-1 flex-col items-center justify-center w-3/4">
					<span className="capitalize text-xl w-3/4">{title}</span>
					<div className="justify-evenly w-1/2 flex">
						<label
							htmlFor="dolar"
							className={`text-xl ${
								form.currency === "U$S"
									? "bg-blue-500 text-white"
									: "border-blue-500 border-2"
							} py-2 px-6 rounded cursor-pointer shadow-md transition-[background] duration-100`}
						>
							U$S
							<input
								type="radio"
								id="dolar"
								className="hidden"
								name="currency"
								onChange={(e) => handleFieldChange(e, "U$S")}
							/>
						</label>
						<label
							htmlFor="pesos"
							className={`text-xl ${
								form.currency === "$"
									? "bg-blue-500 text-white"
									: "border-blue-500 border-2 "
							} py-2 px-8 rounded cursor-pointer shadow-md transition-[background] duration-100`}
						>
							$
							<input
								type="radio"
								id="pesos"
								className="hidden"
								name="currency"
								onChange={(e) => handleFieldChange(e, "$")}
							/>
						</label>
					</div>
				</div>
			</div>
		);
	}
};
