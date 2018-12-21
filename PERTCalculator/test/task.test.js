const expect = require('chai').expect;

const Task = require('../lib/task');

describe('Task', () => {
	it('should calculate the expected time for a task', () => {
		const task = new Task('Task1', 1, 2, 3);
		expect(task.calculated).to.eql(2);
	});

	it('should calculate the deviation of a task', () => {
		const task = new Task('Task1', 1, 2, 3);
		expect(task.deviation).to.eql(0.33);
	});
});