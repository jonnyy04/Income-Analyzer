export default function StatCard({ label, value, sub, color, icon }) {
	const colorMap = {
		blue: "var(--color-blue)",
		green: "var(--color-green)",
		purple: "var(--color-purple)",
		amber: "var(--color-amber)",
	};

	return (
		<div className="card" style={{ borderLeft: `4px solid ${colorMap[color] || "var(--color-blue)"}` }}>
			<div style={{ fontSize: 24, marginBottom: "0.5rem" }}>{icon}</div>
			<div style={{ fontSize: 12, color: "var(--color-text2)", marginBottom: "0.5rem" }}>{label}</div>
			<div style={{ fontSize: 20, fontWeight: 700, color: "var(--color-text)", marginBottom: "0.25rem" }}>{value}</div>
			<div style={{ fontSize: 11, color: "var(--color-text3)" }}>{sub}</div>
		</div>
	);
}
