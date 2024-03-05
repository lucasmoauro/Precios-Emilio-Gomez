export const FormField = ({ title, type, field, setForm, form }) => {
	if (field !== "currency") {
		return (
			<div className="flex justify-center">
				<div className="flex flex-col w-3/4">
					<label htmlFor={title} className="text-2xl capitalize mb-1">
						{title}
					</label>
					<input
						type={type || "text"}
						name={field}
						min={0}
						max={99999}
						id={title}
						value={form[field]}
						className="text-xl pl-2 py-2 rounded shadow-md border focus:outline"
						onChange={(e) =>
							setForm({ ...form, [e.target.name]: e.target.value })
						}
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
								onChange={(e) => setForm({ ...form, [e.target.name]: "U$S" })}
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
								onChange={(e) => setForm({ ...form, [e.target.name]: "$" })}
							/>
						</label>
					</div>
				</div>
			</div>
		);
	}
};
