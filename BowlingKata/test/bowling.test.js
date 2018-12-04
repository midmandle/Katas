const expect = require('chai').expect;
const Bowling = require('../lib/bowling');

describe('Bowling', () => {
	it('should accept a string and return a number', () => {
		const gameRecord = '11';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(2);
	});

	it('it should calculate the score for multiple sets', () => {
		const gameRecord = '11 11';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(4);
	});

	it('should interpret strikes', () => {
		const gameRecord = 'X 11';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(14);
	});

	it('should interpret spares', () => {
		const gameRecord = '1/ 1-';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(12);
	});

	it('should calculate scores with strikes to include the next 2 rolls from the following set', () => {
		const gameRecord = 'X 11 11';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(16);
	});

	it('should calculate a gameRecord of: X X X X X X X X X X X X as 300', () => {
		const gameRecord = 'X X X X X X X X X X X X';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(300);
	});

	it('should interpret \'-\' as a miss', () => {
		const gameRecord = '9- 9- 9- 9- 9- 9- 9- 9- 9- 9-';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(90);		
	});

	it('should interpret the space betweek the game records as a frame delimiter', () => {
		const gameRecord = '5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5';
		const gameScore = Bowling.calculateScore(gameRecord);
		expect(gameScore).eql(150);
	});
});