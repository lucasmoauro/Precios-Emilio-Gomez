import { useRef, useState } from "react";
import { PagePreview, Form, PrintablePage } from "./components";
import { FaPrint } from "react-icons/fa";
import ReactToPrint from "react-to-print";
function App() {
	const [pagePrices, setPagePrices] = useState([]);
	const ref = useRef();
	return (
		<div className="flex h-screen relative overflow-hidden">
			{/* form */}
			<div className="flex-1 h-full flex flex-col justify-center items-center bg-[#e4e4e4] z-30">
				<Form setPagePrices={setPagePrices} pagePrices={pagePrices} />
			</div>

			<div className="bg-[#353535] flex-1 h-full overflow-y-scroll flex flex-col">
				{pagePrices.map((page, i) => (
					<PagePreview setPagePrices={setPagePrices} page={page} key={i} />
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
				className="w-full p-2 mt-6 gap-6 flex flex-wrap justify-center absolute -z-50"
			>
				{pagePrices.map((pageData, i) => (
					<PrintablePage key={i} pageData={pageData} />
				))}
			</div>
		</div>
	);
}

export default App;
