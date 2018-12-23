class Task {
	constructor(name, best, expected, worst) {
		this.name = name;
		this.best = best;
		this.expected = expected;
		this.worst = worst;
	}

	get calculatedTime() {
		const time = (this.best + 4 * this.expected + this.worst) / 6;
		return +time.toFixed(2);
	}

	get calculatedDeviation() {
		const deviation = (this.worst - this.best) / 6;
		return +deviation.toFixed(2);
	}
}

module.exports = Task;