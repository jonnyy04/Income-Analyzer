export default function Icon({ name, size = 24 }) {
	const iconMap = {
		award: "🏆",
		wallet: "💰",
		trend: "📈",
		calendar: "📅",
		plus: "➕",
	};

	return <span style={{ fontSize: size, lineHeight: 1 }}>{iconMap[name] || name}</span>;
}
