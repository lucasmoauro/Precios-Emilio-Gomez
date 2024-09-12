import { useDispatch } from "react-redux";
import { formFieldInput } from "../../store/slices/formSlice";
import { useRef, useState } from "react";

export const FormField = ({
	title,
	type,
	field,
	form,
	isFocused,
	setIsFocused,
}) => {
	const dispatch = useDispatch();
	const [letters, setLetters] = useState(0);
	const inputRef = useRef();

	const handleFieldChange = (e, currency) => {
		setIsFocused(false);
		if (!currency && e.target.value.length > 18) {
			return;
		}
		if (!currency) {
			dispatch(formFieldInput({ [e.target.name]: e.target.value }));
			setLetters(e.target.value.length);
		} else {
			dispatch(formFieldInput({ currency: currency }));
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
						ref={inputRef}
						autoFocus={
							(field === "title" && isFocused && inputRef.current?.focus()) ||
							field === "title"
						}
						type={type}
						name={field}
						min={0}
						max={99999}
						id={title}
						value={form[field]}
						className="text-xl pl-2 py-2 rounded shadow-md border focus:outline"
						onChange={(e) => handleFieldChange(e)}
					/>
					<span className="text-sm flex self-end">{letters}/18</span>
				</div>
			</div>
		);
	} else if (field === "currency") {
		return (
			<div className="flex justify-center w-full ">
				<div className="flex flex-1 flex-col items-center justify-center w-3/4">
					<span className="capitalize text-xl w-3/4">{title}</span>
					<div className="justify-evenly w-1/2 flex">
						<span
							id="U$S"
							className={`text-xl ${
								form.currency === "U$S"
									? "bg-blue-500 text-white"
									: "border-blue-500 border-2"
							} py-2 px-6 rounded cursor-pointer shadow-md transition-[background] duration-100`}
							onClick={(e) => handleFieldChange(e, "U$S")}
						>
							U$S
						</span>

						<span
							className={`text-xl ${
								form.currency === "$"
									? "bg-blue-500 text-white"
									: "border-blue-500 border-2 "
							} py-2 px-8 rounded cursor-pointer shadow-md transition-[background] duration-100`}
							onClick={(e) => handleFieldChange(e, "$")}
							id="$"
						>
							$
						</span>
					</div>
				</div>
			</div>
		);
	}
};
