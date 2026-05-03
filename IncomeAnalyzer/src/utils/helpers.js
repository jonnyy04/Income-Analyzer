export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function fmt(num) {
	if (typeof num !== "number") return "0.00";
	return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
