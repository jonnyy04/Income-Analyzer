import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import StatisticsPage from "./pages/StatisticsPage";
import { createEntry } from "./utils/helpers";
import { useEntries } from "./hooks/useEntries";

function App() {
	const { entries, addEntry, deleteEntry } = useEntries();
	const [page, setPage] = useState("dashboard");
	const [dark, setDark] = useState(false);

	function handleAddEntry(balance) {
		const newEntry = createEntry(entries, parseFloat(balance));
		addEntry(newEntry);
	}

	function toggleDark() {
		setDark(!dark);
	}

	return (
		<div style={{ display: "flex", minHeight: "100vh", background: "var(--color-bg)" }}>
			<Sidebar page={page} setPage={setPage} dark={dark} toggleDark={toggleDark} entryCount={entries.length} />

			<main style={{ flex: 1, padding: "2rem", maxWidth: 900, overflowX: "hidden" }}>
				{page === "dashboard" && <DashboardPage entries={entries} onAdd={handleAddEntry} />}
				{page === "statistics" && <StatisticsPage entries={entries} onDelete={deleteEntry} />}
			</main>
		</div>
	);
}

export default App;
