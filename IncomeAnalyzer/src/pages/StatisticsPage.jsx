import { useState } from "react";

// ─── TABLE TAB ──────────────────────────────────────────────────────────
function TableTab({ entries, onDelete }) {
	return <Placeholder name="Table with filters and data" />;
}

// ─── BAR CHART TAB ─────────────────────────────────────────────────────
function BarChartTab({ entries }) {
	return <Placeholder name="Monthly Salary Bar Chart" />;
}

// ─── LINE CHART TAB ────────────────────────────────────────────────────
function LineChartTab({ entries }) {
	return <Placeholder name="Cumulative Earnings Line Chart" />;
}

// ─── GENERAL STATS TAB ─────────────────────────────────────────────────
function GeneralStatsTab({ entries }) {
	return <Placeholder name="General Statistics & Distribution" />;
}

// ─── HELPERS ────────────────────────────────────────────────────────────
function Empty() {
	return (
		<div style={{ textAlign: "center", padding: "4rem 2rem", color: "var(--color-text3)" }}>
			<div style={{ fontSize: 40, marginBottom: "1rem" }}>📊</div>
			<div style={{ fontWeight: 600, fontSize: 15, color: "var(--color-text2)" }}>No data yet</div>
			<div style={{ fontSize: 13, marginTop: 6 }}>Add your first balance entry to see statistics.</div>
		</div>
	);
}

function Placeholder({ name }) {
	return (
		<div style={{ textAlign: "center", padding: "3rem 2rem", color: "var(--color-text3)" }}>
			<div style={{ fontSize: 24, marginBottom: "1rem" }}>🛠️</div>
			<div style={{ fontWeight: 600, fontSize: 14, color: "var(--color-text2)" }}>Coming Soon</div>
			<div style={{ fontSize: 12, marginTop: 6 }}>{name}</div>
		</div>
	);
}

// ─── STATISTICS PAGE ────────────────────────────────────────────────────
const TABS = ["Table", "Bar Chart", "Line Chart", "General Stats"];

export default function StatisticsPage({ entries = [], onDelete }) {
	const [active, setActive] = useState(0);

	if (entries.length === 0) {
		return <Empty />;
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
			{/* Header */}
			<div>
				<div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4, color: "var(--color-text)" }}>Statistics</div>
				<div style={{ fontSize: 13, color: "var(--color-text2)" }}>Deep dive into your earnings data.</div>
			</div>

			{/* Tab Container */}
			<div className="card" style={{ padding: 0, overflow: "hidden" }}>
				{/* Tab Bar */}
				<div style={{ display: "flex", borderBottom: "1px solid var(--color-border)", overflowX: "auto" }}>
					{TABS.map((tab, i) => (
						<button key={i} className={`tab-btn ${active === i ? "active" : ""}`} onClick={() => setActive(i)}>
							{tab}
						</button>
					))}
				</div>

				{/* Tab Content */}
				<div style={{ padding: "1.5rem" }}>
					{active === 0 && <TableTab entries={entries} onDelete={onDelete} />}
					{active === 1 && <BarChartTab entries={entries} />}
					{active === 2 && <LineChartTab entries={entries} />}
					{active === 3 && <GeneralStatsTab entries={entries} />}
				</div>
			</div>
		</div>
	);
}
