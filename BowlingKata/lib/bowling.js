class Bowling {
	static calculateScore(gameScore) {
		const rolls = gameScore.split('');
		return rolls.reduce((acc, curr, index) => {
			if(index > 9) {
				return acc + 0;
			}
			if(curr === 'X') {
				// Handle strike.
				// Calculate 10 plus next two roll values.
				return acc + this.getValueOfRoll(curr) + this.getValueOfRoll(rolls[index+1]) + this.getValueOfRoll(rolls[index+2]);
			} else if (curr === '/') {
				// Handle spare.
				// Calculate 10 plus next roll value.
				return acc + this.getValueOfRoll(curr) + this.getValueOfRoll(rolls[index+1]);
			} else {
				// Handle standard roll.
				// Calculate the current roll value e.g. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
				return acc + this.getValueOfRoll(curr);
			}
		}, 0);
	}

	static getValueOfRoll(roll) {
		if(roll === 'X' || roll === '/') {
			return 10;
		} else if (roll !== undefined) {
			return parseInt(roll);
		} else {
			return 0;
		}
	}
}

module.exports = Bowling;

