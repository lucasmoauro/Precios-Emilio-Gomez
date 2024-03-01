import { PagePreview, Form, List } from "./components";

function App() {
	return (
		<div className="flex h-screen">
			{/* form */}
			<div className="flex-1 h-full flex flex-col">
				<Form />

				{/* HOJA 1 */}
				<List />
			</div>
			{/* A4 */}
			<PagePreview />
		</div>
	);
}

export default App;
