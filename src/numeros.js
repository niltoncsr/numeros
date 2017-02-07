;(function(root, factory) {

  if(typeof define === 'function' && define.amd) define('n', factory);

  else if(typeof exports === 'object') module.exports = factory();

  else root.n = factory();

})(this, function() {

	// Make brazilian numbers standard out of international standard, for viewing
	var toBrazilian = function(internationalDecimal) {
		if(typeof(internationalDecimal) !== 'number')
			throw new TypeError('The input must be a number.');

		// Make the number malleable and replace the decimal dot for comma
		var stringedNumber = internationalDecimal.toString().replace(/\./, ','),

			// Get the integet part of the original number
			integerPart = stringedNumber.substring(0, stringedNumber.search(',')),

			integerPartSize = integerPart.length;

		// If the integer part has more than three characters, separate them by dots
		if(integerPartSize > 3) {
			var dottedIntegerPart = '';

			for(var actualLoopIteration = 0,
							previousLoopIteration = 0,
							threeDigitsBlock = Math.floor(integerPartSize/3);
					actualLoopIteration < threeDigitsBlock;) {

				actualLoopIteration += 1;

				// Summing up the next three digits block
				dottedIntegerPart =
					integerPart.slice(
						integerPartSize-(actualLoopIteration*3),
						integerPartSize-(previousLoopIteration*3)
					) + dottedIntegerPart;

				// When it's the last iteration, break the loop
				if((integerPartSize)-(actualLoopIteration*3) === 0) break;
				// If it isn't the last iteration, put a dot behind the last added digits
				else dottedIntegerPart = '.' + dottedIntegerPart;

				previousLoopIteration += 1;
			}

			// If integer length isn't multiple of three, add to its start the missing
			if(integerPartSize/3 !== 0)
				dottedIntegerPart = 
          integerPart.slice(0, integerPartSize%3) + dottedIntegerPart;

			// Return the integer part + comma and decimal part
			return dottedIntegerPart + stringedNumber.slice(stringedNumber.search(','));
		}

		return stringedNumber;
	};


	// Make international numbers standard out of brazilian standard, for computing
	var toInternational = function(brazilianDecimal) {
		if(typeof(brazilianDecimal) !== 'string')
			throw new TypeError('The input must be a string.');

		// Remove the number separation dots and replace the decimal comma for dot
		return Number(brazilianDecimal.replace(/\./g, '').replace(/,/, '.'));
	};


	return {
		toBrazilian: toBrazilian,
		toInternational: toInternational
	};

});
