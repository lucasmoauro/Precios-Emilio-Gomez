import { useRef } from "react";
import { useSelector } from "react-redux";
import { PagePreview, Form, PrintablePage } from "./components";
import { FaPrint } from "react-icons/fa";
import ReactToPrint from "react-to-print";
function App() {
	const ref = useRef();

	const pagePrices = useSelector((state) => state.pagePrices);

	return (
		<div className="flex h-screen relative overflow-hidden">
			{/* form */}
			<div className="flex-1 h-full flex flex-col justify-center items-center bg-[#e4e4e4] z-30">
				<Form pagePrices={pagePrices} />
			</div>

			<div className="bg-[#353535] flex-1 h-full overflow-y-scroll flex flex-col">
				{pagePrices.map((page, i) => (
					<PagePreview page={page} key={i} pageIndex={i} />
				))}

				{!(pagePrices.length - 1 === -1) && (
					<div className="relative opacity-100 transition-all">
						<ReactToPrint
							bodyClass="print-agreement"
							content={() => ref.current}
							trigger={() => (
								<button className="fixed bg-white right-10 bottom-20 h-14 w-14 rounded-full flex items-center justify-center hover:bg-gray-300">
									<FaPrint />
								</button>
							)}
						/>
					</div>
				)}
			</div>

			<div
				ref={ref}
				className="w-full mt-6 gap-14 flex flex-wrap justify-center absolute -z-50"
			>
				{pagePrices.map((pageData, i) => (
					<PrintablePage key={i} pageData={pageData} />
				))}
			</div>
		</div>
	);
}

export default App;
