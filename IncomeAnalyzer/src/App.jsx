import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import StatisticsPage from "./pages/StatisticsPage";
import { createEntry } from "./utils/helpers";

function App() {
	const [entries, setEntries] = useState([]);
	const [page, setPage] = useState("dashboard");

	function handleAddEntry(balance) {
		const newEntry = createEntry(entries, parseFloat(balance));
		setEntries([...entries, newEntry]);
	}

	function handleDeleteEntry(id) {
		setEntries(entries.filter((e) => e.id !== id));
	}

	return (
		<div style={{ display: "flex", minHeight: "100vh", background: "var(--color-bg)" }}>
			<Sidebar page={page} setPage={setPage} />

			<main style={{ flex: 1, padding: "2rem", maxWidth: 900, overflowX: "hidden" }}>
				{page === "dashboard" && <DashboardPage entries={entries} onAdd={handleAddEntry} />}
				{page === "statistics" && <StatisticsPage entries={entries} onDelete={handleDeleteEntry} />}
			</main>
		</div>
	);
}

export default App;
