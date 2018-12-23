const expect = require('chai').expect;

const PERTCalculator = require('../lib/pert');

describe('PERT', () => {
	it('should be able to add a task to a list of tasks.', () => {
		const pert = new PERTCalculator();
		pert.addTask('Task1', 1, 2, 3);
		expect(pert.list).to.eql([{name: 'Task1', best: 1, expected: 2, worst: 3}]);
	});
	
	it('should be able to select a specific task from the list by name', () => {
		const pert = new PERTCalculator();
		pert.addTask('Task1', 1, 2, 3);
		pert.addTask('Task2', 4, 5, 6);
		expect(pert.getTask('Task2')).to.eql({name: 'Task2', best: 4, expected: 5, worst: 6});
	});

	it('should calculate the expected time for all the tasks', () => {
		const pert = new PERTCalculator();
		pert.addTask('Task1', 1, 2, 3);
		pert.addTask('Task2', 4, 5, 6);
		pert.addTask('Task3', 7, 8, 9);
		expect(pert.calculateTotalExpected()).to.eql(15);
	});

	it('should calculate the deviation for all the tasks', () => {
		const pert = new PERTCalculator();
		pert.addTask('Task1', 1, 2, 3);
		pert.addTask('Task2', 4, 5, 6);
		pert.addTask('Task3', 7, 8, 9);
		expect(pert.calculateTotalDeviation()).to.eql(0.99);
	});
});