export function formatDate(dateStr) {
    const date = new Date(dateStr);
    
	const day = String(date.getDate()).padStart(2, "0"); // Get the day and pad it to 2 digits
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Get the month, adding 1 since months are zero-indexed
	const year = date.getFullYear(); // Get the full year

	return `${day}-${month}-${year}`; // Return the date in dd-mm-yyyy format
}
