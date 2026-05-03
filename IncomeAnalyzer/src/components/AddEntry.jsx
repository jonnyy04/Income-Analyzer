export default function AddEntry() {
	return (
		<div
			style={{
				background: "linear-gradient(135deg, var(--color-blue) 0%, #1d4ed8 100%)",
				borderRadius: 12,
				padding: "1.5rem",
				color: "#fff",
				boxShadow: "0 4px 24px rgba(37,99,235,0.25)",
			}}
		>
			<div style={{ marginBottom: "1rem" }}>
				<div
					style={{
						fontSize: 11,
						fontWeight: 600,
						letterSpacing: "0.08em",
						textTransform: "uppercase",
						opacity: 0.75,
						marginBottom: 4,
					}}
				>
					Daily Entry
				</div>
				<div style={{ fontSize: 20, fontWeight: 700 }}>Enter Today's Balance</div>
			</div>

			<div style={{ display: "flex", gap: 10, alignItems: "center" }}>
				<div style={{ position: "relative", flex: 1 }}>
					<span
						style={{
							position: "absolute",
							left: 12,
							top: "50%",
							transform: "translateY(-50%)",
							fontWeight: 700,
							fontSize: 16,
							opacity: 0.8,
						}}
					>
						$
					</span>
					<input
						type="number"
						placeholder="0.00"
						style={{
							width: "100%",
							padding: "10px 12px 10px 28px",
							borderRadius: 8,
							border: "1.5px solid rgba(255,255,255,0.3)",
							background: "rgba(255,255,255,0.15)",
							color: "#fff",
							fontSize: 16,
							fontWeight: 500,
							outline: "none",
							backdropFilter: "blur(4px)",
							fontFamily: "DM Sans, sans-serif",
						}}
					/>
				</div>
				<button
					style={{
						padding: "10px 22px",
						background: "#fff",
						color: "var(--color-blue)",
						border: "none",
						borderRadius: 8,
						fontWeight: 700,
						fontSize: 14,
						cursor: "pointer",
						whiteSpace: "nowrap",
						display: "flex",
						alignItems: "center",
						gap: 6,
						boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
						fontFamily: "DM Sans, sans-serif",
					}}
				>
					➕ Add
				</button>
			</div>

			<div
				style={{
					marginTop: 12,
					padding: "8px 14px",
					borderRadius: 8,
					fontSize: 13,
					fontWeight: 500,
					background: "rgba(16,185,129,0.25)",
					border: "1px solid rgba(16,185,129,0.5)",
					color: "#fff",
				}}
			>
				+$250.00 added to this month's salary!
			</div>
		</div>
	);
}
