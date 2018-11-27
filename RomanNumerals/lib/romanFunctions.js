class RomanFunctions {
	constructor() {
			
	}

	static convertNumeralsToInt(numerals) {
		return numerals.split('').reduceRight((accumulator, current, currentIndex) => {
			const previousValue = this.getPreviousNumericValue(numerals, currentIndex);
			return this.calculateNumeralValue(accumulator, current, previousValue);
		}, 0);
	}

	static getPreviousNumericValue(numerals, currentIndex) {
		return numerals[currentIndex+1] === undefined ? 0: this.convertNumeralToInt(numerals[currentIndex+1]);
	}

	static calculateNumeralValue(currentValue, valueToAdd, previousValue) {
		console.log('previousValue :', previousValue);
		const currentNumericValue = this.convertNumeralToInt(valueToAdd);
		if (currentValue === 0 ) {
			return this.convertNumeralToInt(valueToAdd);
		} else if (currentNumericValue >= previousValue) {
			return currentValue + currentNumericValue;
		} else {
			return currentValue - currentNumericValue;
		}
	}

	static convertNumeralToInt(numeral) {
		const numeralsTable = this.getLookupTable();
		return numeralsTable[numeral];
	}

	static getLookupTable() {
		return {
			'I': 1,
			'V': 5,
			'X': 10,
			'L': 50,
			'C': 100,
			'D': 500,
			'M': 1000
		};
	}
}

module.exports = RomanFunctions;
