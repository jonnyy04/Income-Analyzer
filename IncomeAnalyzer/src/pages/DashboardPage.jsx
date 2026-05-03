import { useMemo } from "react";
import AddEntry from "../components/AddEntry";
import StatCard from "../components/StatCard";
import { MONTHS, fmt } from "../utils/helpers";

export default function DashboardPage({ entries, onAdd }) {
	const now = new Date();
	const curMonth = now.getMonth() + 1;
	const curYear = now.getFullYear();

	const thisMonth = useMemo(() => entries.filter((e) => e.month === curMonth && e.year === curYear), [entries, curMonth, curYear]);

	const monthlySalary = useMemo(() => thisMonth.reduce((s, e) => s + e.dailyProfit, 0), [thisMonth]);

	const lastBalance = useMemo(() => {
		if (!entries.length) return 0;
		return [...entries].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0].balance;
	}, [entries]);

	const workedDays = useMemo(() => thisMonth.filter((e) => e.dailyProfit > 0).length, [thisMonth]);
	const avgDaily = workedDays > 0 ? monthlySalary / workedDays : 0;

	const recentEntries = useMemo(() => [...entries].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 5), [entries]);

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
			{/* Header */}
			<div>
				<div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4, color: "var(--color-text)" }}>Dashboard</div>
				<div style={{ fontSize: 13, color: "var(--color-text2)" }}>{now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
			</div>

			{/* Add entry */}
			<AddEntry entries={entries} onAdd={onAdd} />

			{/* Stat cards */}
			<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
				<StatCard label="Monthly Salary" value={`$${fmt(monthlySalary)}`} sub={`${MONTHS[curMonth - 1]} ${curYear}`} color="blue" icon="award" />
				<StatCard label="Current Balance" value={`$${fmt(lastBalance)}`} sub="Last recorded" color="green" icon="wallet" />
				<StatCard label="Daily Average" value={`$${fmt(avgDaily)}`} sub="This month" color="purple" icon="trend" />
				<StatCard label="Worked Days" value={workedDays} sub="Profitable days" color="amber" icon="calendar" />
			</div>

			{/* Recent entries */}
			{recentEntries.length > 0 && (
				<div className="card">
					<div style={{ fontWeight: 600, fontSize: 14, marginBottom: "1rem", color: "var(--color-text)" }}>Recent Entries</div>
					<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
						{recentEntries.map((e) => (
							<div
								key={e.id}
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									padding: "10px 12px",
									borderRadius: 8,
									background: "var(--color-surface2)",
									borderLeft: `3px solid ${e.dailyProfit > 0 ? "var(--color-green)" : "var(--color-border)"}`,
								}}
							>
								<div>
									<div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)" }}>{e.date}</div>
									<div className="mono" style={{ fontSize: 11, color: "var(--color-text3)" }}>
										${fmt(e.balance)} balance
									</div>
								</div>
								{e.dailyProfit > 0 ? (
									<span className="mono" style={{ fontWeight: 700, fontSize: 13, color: "var(--color-green)" }}>
										+${fmt(e.dailyProfit)}
									</span>
								) : (
									<span style={{ fontSize: 12, color: "var(--color-text3)" }}>No change</span>
								)}
							</div>
						))}
					</div>
				</div>
			)}

			{/* Empty state */}
			{entries.length === 0 && (
				<div className="card" style={{ textAlign: "center", padding: "3rem" }}>
					<div style={{ fontSize: 40, marginBottom: "1rem" }}>💰</div>
					<div style={{ fontWeight: 600, fontSize: 15, color: "var(--color-text2)" }}>No entries yet</div>
					<div style={{ fontSize: 13, marginTop: 6, color: "var(--color-text3)" }}>Enter your first account balance above to start tracking.</div>
				</div>
			)}
		</div>
	);
}
