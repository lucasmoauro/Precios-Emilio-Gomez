const lista = [
	{
		titulo: "Titulo",
		subtitulo: "subtitulo",
		moneda: "Moneda",
		precio: "precio",
	},
	{
		titulo: "Titulo",
		subtitulo: "subtitulo",
		moneda: "Moneda",
		precio: "precio",
	},
	{
		titulo: "Titulo",
		subtitulo: "subtitulo",
		moneda: "Moneda",
		precio: "precio",
	},
	{
		titulo: "Titulo",
		subtitulo: "subtitulo",
		moneda: "Moneda",
		precio: "precio",
	},
	{
		titulo: "Titulo",
		subtitulo: "subtitulo",
		moneda: "Moneda",
		precio: "precio",
	},
];

export const List = () => {
	return (
		<div className="flex-1 flex justify-center overflow-y-scroll bg-[#cdcdcd]">
			<div className="my-2 w-11/12">
				<h1 className="ml-5 mt-2 mb-3 text-2xl">Hoja 1</h1>

				<div className="bg-gray-500 w-11/12 min-h-[60%] m-auto">
					{lista.map((item, i) => (
						<div
							key={i}
							className="odd:bg-blue-600 even:bg-red-800 h-10 flex justify-evenly cursor-pointer hover:even:bg-red-950 hover:odd:bg-blue-950"
						>
							<span>{item.titulo}</span>
							<span>{item.subtitulo}</span>
							<span>{item.moneda}</span>
							<span>{item.precio}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
