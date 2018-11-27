const expect = require('chai').expect;

const RomanFunctions = require('../lib/romanFunctions');


describe('RomanNumerals', () => {
	it('should take the letter \'I\' and return 1', () => {
		const romanNumeral = 'I';
		const numericValue = RomanFunctions.convertNumeralsToInt(romanNumeral);
		expect(numericValue).eql(1);
	});

	it('should take the letter \'V\' and return 5', () => {
		const romanNumeral = 'V';
		const numericValue = RomanFunctions.convertNumeralsToInt(romanNumeral);
		expect(numericValue).eql(5);
	});

	it('should take the letter \'X\' and return 10', () => {
		const romanNumeral = 'X';
		const numericValue = RomanFunctions.convertNumeralsToInt(romanNumeral);
		expect(numericValue).eql(10);
	});

	it('should take the letter \'L\' and return 50', () => {
		const romanNumeral = 'L';
		const numericValue = RomanFunctions.convertNumeralsToInt(romanNumeral);
		expect(numericValue).eql(50);
	});

	it('should take the letter \'C\' and return 100', () => {
		const romanNumeral = 'C';
		const numericValue = RomanFunctions.convertNumeralsToInt(romanNumeral);
		expect(numericValue).eql(100);
	});

	it('should take the letter \'D\' and return 500', () => {
		const romanNumeral = 'D';
		const numericValue = RomanFunctions.convertNumeralsToInt(romanNumeral);
		expect(numericValue).eql(500);
	});

	it('should take the letter \'M\' and return 1000', () => {
		const romanNumeral = 'M';
		const numericValue = RomanFunctions.convertNumeralsToInt(romanNumeral);
		expect(numericValue).eql(1000);
	});

	it('should take the numerals \'II\' and return 2', () => {
		const romanNumerals = 'II';
		const numericValue 
		= RomanFunctions.convertNumeralsToInt(romanNumerals);
		expect(numericValue).eql(2);
	});

	it('should take the numerals \'IV\' and return 4', () => {
		const romanNumerals = 'IV';
		const numericValue 
		= RomanFunctions.convertNumeralsToInt(romanNumerals);
		expect(numericValue).eql(4);
	});

	it('should take the numerals \'VIII\' and return 8', () => {
		const romanNumerals = 'VIII';
		const numericValue 
		= RomanFunctions.convertNumeralsToInt(romanNumerals);
		expect(numericValue).eql(8);
	});

	it('should take the numerals \'IX\' and return 9', () => {
		const romanNumerals = 'IX';
		const numericValue 
		= RomanFunctions.convertNumeralsToInt(romanNumerals);
		expect(numericValue).eql(9);
	});
});