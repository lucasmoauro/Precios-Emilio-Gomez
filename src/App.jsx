import { useState } from "react";
import { PagePreview, Form } from "./components";

function App() {
	const [pagePrices, setPagePrices] = useState([]);
	return (
		<div className="flex h-screen">
			{/* form */}
			<div className="flex-1 h-full flex flex-col justify-center items-center bg-gray-300/30">
				<Form setPagePrices={setPagePrices} pagePrices={pagePrices} />
			</div>
			{/* A4 */}
			<PagePreview setPagePrices={setPagePrices} pagePrices={pagePrices} />
		</div>
	);
}

export default App;
