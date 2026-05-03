import Icon from "./Icon";

export default function Sidebar({ page, setPage }) {
	return (
		<aside
			style={{
				width: 220,
				background: "var(--color-surface)",
				borderRight: "1px solid var(--color-border)",
				padding: "1.5rem 1rem",
				display: "flex",
				flexDirection: "column",
				gap: 4,
				position: "sticky",
				top: 0,
				height: "100vh",
				flexShrink: 0,
				boxShadow: "2px 0 8px rgba(0,0,0,0.04)",
			}}
		>
			{/* Logo */}
			<div style={{ padding: "0 8px", marginBottom: "1.5rem" }}>
				<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
					<div
						style={{
							width: 34,
							height: 34,
							borderRadius: 9,
							background: "var(--color-blue)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Icon name="chart" size={17} strokeWidth={2.5} />
					</div>
					<div>
						<div style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em", color: "var(--color-text)" }}>SalaryTrack</div>
						<div
							style={{
								fontSize: 10,
								color: "var(--color-text3)",
								textTransform: "uppercase",
								letterSpacing: "0.08em",
							}}
						>
							v1.0
						</div>
					</div>
				</div>
			</div>

			{/* Nav label */}
			<div
				style={{
					fontSize: 10,
					textTransform: "uppercase",
					letterSpacing: "0.08em",
					color: "var(--color-text3)",
					fontWeight: 600,
					padding: "0 8px",
					marginBottom: 4,
				}}
			>
				Navigation
			</div>

			<button
				style={{
					display: "flex",
					alignItems: "center",
					gap: 8,
					padding: "10px 16px",
					borderRadius: 8,
					cursor: "pointer",
					fontSize: 14,
					fontWeight: 500,
					transition: "all 0.2s",
					border: "none",
					background: page === "dashboard" ? "var(--color-blue)" : "transparent",
					color: page === "dashboard" ? "white" : "var(--color-text2)",
					fontFamily: "DM Sans, sans-serif",
				}}
				onClick={() => setPage("dashboard")}
			>
				<Icon name="dashboard" size={16} />
				Dashboard
			</button>
			<button
				style={{
					display: "flex",
					alignItems: "center",
					gap: 8,
					padding: "10px 16px",
					borderRadius: 8,
					cursor: "pointer",
					fontSize: 14,
					fontWeight: 500,
					transition: "all 0.2s",
					border: "none",
					background: page === "statistics" ? "var(--color-blue)" : "transparent",
					color: page === "statistics" ? "white" : "var(--color-text2)",
					fontFamily: "DM Sans, sans-serif",
				}}
				onClick={() => setPage("statistics")}
			>
				<Icon name="stats" size={16} />
				Statistics
			</button>

			{/* Footer */}
			<div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--color-border)" }}>
				<div style={{ fontSize: 10, color: "var(--color-text3)", textAlign: "center" }}>{new Date().getFullYear()}</div>
			</div>
		</aside>
	);
}
