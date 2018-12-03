const expect = require('chai').expect;
const Bowling = require('../lib/bowling');

describe('Bowling', () => {
	it('should accept a string and return a number', () => {
		const gameRecord = '11';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(2);
	});

	it('it should calculate the score for multiple sets', () => {
		const gameRecord = '1111';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(4);
	});

	it('should interpret strikes', () => {
		const gameRecord = 'X11';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(14);
	});

	it('should interpret spares', () => {
		const gameRecord = '/1';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(12);
	});

	it('should calculate scores with strikes to include the next 2 rolls from the following set', () => {
		const gameRecord = 'X1111';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(16);
	});

	it('should calculate a gameRecord of: XXXXXXXXXXXX as 300', () => {
		const gameRecord = 'XXXXXXXXXXXX';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(300);
	});
});