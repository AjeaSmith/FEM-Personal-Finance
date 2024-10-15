export function formatMoney(amount, currencySymbol = "$") {
	return `${currencySymbol}${amount
		.toFixed(2)
		.replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
}
