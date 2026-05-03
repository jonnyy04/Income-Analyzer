import Icon from "./Icon";

const colorMap = {
	blue: { bg: "#dbeafe", text: "#2563eb" },
	green: { bg: "#d1fae5", text: "#10b981" },
	amber: { bg: "#fef3c7", text: "#f59e0b" },
	purple: { bg: "#ede9fe", text: "#8b5cf6" },
	red: { bg: "#fee2e2", text: "#ef4444" },
};

export default function StatCard({ label, value, sub, color = "blue", icon }) {
	const c = colorMap[color] || colorMap.blue;

	return (
		<div className="card" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
				<span
					style={{
						fontSize: "11px",
						letterSpacing: "0.06em",
						color: "var(--color-text2)",
						textTransform: "uppercase",
						fontWeight: 600,
					}}
				>
					{label}
				</span>
				<div
					style={{
						width: 32,
						height: 32,
						borderRadius: 8,
						background: c.bg,
						color: c.text,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Icon name={icon} size={15} />
				</div>
			</div>
			<div
				style={{
					fontSize: 28,
					fontWeight: 700,
					letterSpacing: "-0.02em",
					color: "var(--color-text)",
					lineHeight: 1.1,
				}}
			>
				{value}
			</div>
			{sub && (
				<div className="mono" style={{ fontSize: 12, color: "var(--color-text3)" }}>
					{sub}
				</div>
			)}
		</div>
	);
}
