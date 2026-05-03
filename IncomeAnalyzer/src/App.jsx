import { useState } from "react";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";

function App() {
	const [entries, setEntries] = useState([]);

	function handleAddEntry(newEntry) {
		setEntries([...entries, newEntry]);
	}

	return (
		<main style={{ maxWidth: "70%", margin: "0 auto", padding: "2rem 0" }}>
			<DashboardPage entries={entries} onAdd={handleAddEntry} />
		</main>
	);
}

export default App;
