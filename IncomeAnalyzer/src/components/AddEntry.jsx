export default function AddEntry() {
	return (
		<div className="card">
			<div style={{ display: "flex", gap: "0.75rem" }}>
				<input type="text" placeholder="Enter today's balance" style={{ flex: 1, padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid var(--color-border)" }} />
				<button style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", background: "var(--color-blue)", color: "white", border: "none", cursor: "pointer" }}>Add</button>
			</div>
		</div>
	);
}
