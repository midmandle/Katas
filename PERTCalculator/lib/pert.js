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
}

module.exports = PERTCalculator;