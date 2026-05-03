import { useState } from "react";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";

function App() {
	const [entries, setEntries] = useState([]);

	function handleAddEntry(newEntry) {
		setEntries([...entries, newEntry]);
	}

	return (
		<main>
			<DashboardPage entries={entries} onAdd={handleAddEntry} />
		</main>
	);
}

export default App;
