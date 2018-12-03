class Bowling {
	static calculateScore(gameScore) {
		const rolls = gameScore.split('');
		return rolls.reduce((acc, curr, index) => {
			if(index > 9) {
				return acc + 0;
			}
			if(curr === 'X') {
				const strikeRolls = this.getStrikeRolls(rolls, index);
				return acc + this.getValueOfRolls(strikeRolls);
			} else if (curr === '/') {
				const spareRolls = this.getSpareRolls(rolls, index);
				return acc + this.getValueOfRolls(spareRolls);
			} else {
				return acc + this.getValueOfRoll(curr);
			}
		}, 0);
	}

	static getStrikeRolls(rolls, index) {
		return rolls.slice(index, index + 3);
	}

	static getSpareRolls(rolls, index) {
		return rolls.slice(index, index + 2);
	}

	static getValueOfRolls(rolls) {
		return rolls.reduce((acc, curr) => {
			return acc + this.getValueOfRoll(curr);
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

