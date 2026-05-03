import AddEntry from "../components/AddEntry";
import StatCard from "../components/StatCard";
import { MONTHS, fmt } from "../utils/helpers";

export default function DashboardPage() {
	const now = new Date();
	const curMonth = now.getMonth() + 1;
	const curYear = now.getFullYear();

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
			{/* Header */}
			<div>
				<div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4, color: "var(--color-text)" }}>Dashboard</div>
				<div style={{ fontSize: 13, color: "var(--color-text2)" }}>{now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
			</div>

			{/* Add entry */}
			<AddEntry />

			{/* Stat cards */}
			<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
				<StatCard label="Monthly Salary" value={`$${fmt(5250)}`} sub={`${MONTHS[curMonth - 1]} ${curYear}`} color="blue" icon="🏆" />
				<StatCard label="Current Balance" value={`$${fmt(12500)}`} sub="Last recorded" color="green" icon="💰" />
				<StatCard label="Daily Average" value={`$${fmt(262.5)}`} sub="This month" color="purple" icon="📈" />
				<StatCard label="Worked Days" value="20" sub="Profitable days" color="amber" icon="📅" />
			</div>

			{/* Recent entries */}
			<div className="card">
				<div style={{ fontWeight: 600, fontSize: 14, marginBottom: "1rem", color: "var(--color-text)" }}>Recent Entries</div>
				<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							padding: "10px 12px",
							borderRadius: 8,
							background: "var(--color-surface2)",
							borderLeft: "3px solid var(--color-green)",
						}}
					>
						<div>
							<div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)" }}>May 3, 2026</div>
							<div className="mono" style={{ fontSize: 11, color: "var(--color-text3)" }}>
								$12,500.00 balance
							</div>
						</div>
						<span className="mono" style={{ fontWeight: 700, fontSize: 13, color: "var(--color-green)" }}>
							+$250.00
						</span>
					</div>

					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							padding: "10px 12px",
							borderRadius: 8,
							background: "var(--color-surface2)",
							borderLeft: "3px solid var(--color-green)",
						}}
					>
						<div>
							<div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)" }}>May 2, 2026</div>
							<div className="mono" style={{ fontSize: 11, color: "var(--color-text3)" }}>
								$12,250.00 balance
							</div>
						</div>
						<span className="mono" style={{ fontWeight: 700, fontSize: 13, color: "var(--color-green)" }}>
							+$300.00
						</span>
					</div>

					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							padding: "10px 12px",
							borderRadius: 8,
							background: "var(--color-surface2)",
							borderLeft: "3px solid var(--color-border)",
						}}
					>
						<div>
							<div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)" }}>May 1, 2026</div>
							<div className="mono" style={{ fontSize: 11, color: "var(--color-text3)" }}>
								$11,950.00 balance
							</div>
						</div>
						<span style={{ fontSize: 12, color: "var(--color-text3)" }}>No change</span>
					</div>
				</div>
			</div>

			{/* Empty state example */}
			<div className="card" style={{ textAlign: "center", padding: "3rem" }}>
				<div style={{ fontSize: 40, marginBottom: "1rem" }}>💰</div>
				<div style={{ fontWeight: 600, fontSize: 15, color: "var(--color-text2)" }}>No entries yet</div>
				<div style={{ fontSize: 13, marginTop: 6, color: "var(--color-text3)" }}>Enter your first account balance above to start tracking.</div>
			</div>
		</div>
	);
}
