export default function StatisticsPage({ entries = [], onDelete }) {
	if (entries.length === 0) {
		return (
			<div style={{ textAlign: "center", padding: "2rem 0", color: "var(--color-text3)" }}>
				<div style={{ fontSize: 28, marginBottom: "0.5rem" }}>📊</div>
				<p>No data yet</p>
			</div>
		);
	}

	return (
		<div>
			<h2 style={{ color: "var(--color-text)", marginBottom: "1.5rem", fontSize: 24 }}>All Entries</h2>
			{[...entries].reverse().map((entry) => (
				<div
					key={entry.id}
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						padding: "1rem",
						background: "var(--color-surface)",
						border: "1px solid var(--color-border)",
						borderRadius: "12px",
						marginBottom: "0.75rem",
					}}
				>
					<div>
						<p style={{ color: "var(--color-text)", fontWeight: 500 }}>{entry.date}</p>
						<p style={{ color: "var(--color-text2)", fontSize: 12 }}>Balance: ${entry.balance.toFixed(2)}</p>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
						<span
							style={{
								color: entry.dailyProfit > 0 ? "var(--color-green)" : "var(--color-text2)",
								fontWeight: 600,
							}}
						>
							{entry.dailyProfit > 0 ? "+" : ""}${entry.dailyProfit.toFixed(2)}
						</span>
						<button
							onClick={() => onDelete(entry.id)}
							style={{
								border: "none",
								background: "transparent",
								color: "var(--color-text2)",
								cursor: "pointer",
								fontSize: 16,
							}}
						>
							🗑️
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
