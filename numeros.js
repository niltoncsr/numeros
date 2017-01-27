function toBrazilianDecimals(internationalDecimal) {
	var stringedNumber =
		// In case the number isn't an actual number
		internationalDecimal.toString()
		// Replace the decimal dot for comma
		.replace(/\./, ',');

	var integerPart = stringedNumber.substring(0, stringedNumber.search(','));

	// If the integer part has more than three characters, separate them by dots
	if(integerPart.length > 3) {
		var dottedIntegerPart = new String;

		for(
			var i = 0, j = 0;
			i < Math.floor((integerPart.length/3));
			) {

			// Control variable to indicate loop stage
			i++

			// Summing up the next three digits block
			dottedIntegerPart = integerPart.slice(integerPart.length-(i*3),integerPart.length-(j*3)) + dottedIntegerPart;

			// When it's the last iteration, break the loop
			if((integerPart.length)-(i*3) === 0) break;
			// If it isn't the last iteration, put a dot behind the last added digits
			else dottedIntegerPart = '.' + dottedIntegerPart

			// Control variable to keep state of the previous iteration
			j++
		}

		// If integer length isn't multiple of three, add to its start the missing
		if(integerPart.length/3 !== 0)
			dottedIntegerPart = integerPart.slice(0, integerPart.length%3) + dottedIntegerPart

		// Return the integer part + comma and decimal part
		return dottedIntegerPart + stringedNumber.slice(stringedNumber.search(','))
	}

	return stringedNumber;
}


// Make international numbers standard out of brazilian standard, for computing
function toInternationalDecimals(brazilianDecimal) {
	return brazilianDecimal
		// Remove the number separation dots
		.replace(/\./g, '')
		// Replace the decimal comma for dot
		.replace(/,/, '.');
}
