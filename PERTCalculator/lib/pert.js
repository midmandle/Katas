const Task = require('./task');

class PERTCalculator {
	constructor() {
		this.list = [];	
	}
	
	addTask(name, best, expected, worst) {
		const newTask = new Task(name, best, expected, worst);
		this.list.push(newTask);
	}

	getTask(name) {
		return this.list.find(task => task.name === name);
	}

	calculateTotalExpected() {
		const totalExpected = this.list.reduce((acc, curr) => {
			return acc + curr.calculatedTime;
		}, 0);

		return totalExpected;
	}

	calculateTotalDeviation() {
		const totalDeviation = this.list.reduce((acc, curr) => {
			return acc + curr.calculatedDeviation;
		}, 0);

		return totalDeviation;
	}
}

module.exports = PERTCalculator;