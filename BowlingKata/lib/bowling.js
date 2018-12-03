class Bowling {
	static calculateScore(gameScore) {
		const rolls = gameScore.split('');
		const frames = this.getFrames(rolls);
		const frameIndexes = Object.keys(frames);
		
		return frameIndexes.reduce((acc, current) => {
			return acc + this.scoreForFrame(frames[current]);
		}, 0);
	}

	static getFrames(rolls) {
		// TODO: need to skip correct number of rolls here. 
		const frames = {};
		let index = 0;
		while(index <= rolls.length) {
			frames[index] = this.generateFrame(rolls, index);
			if(rolls[index] === 'X' || rolls[index] === '/') {
				index++;
			}
			index+=2;
		}
		return frames;
	}

	static generateFrame(rolls, index) {
		console.log('rolls :', rolls);
		console.log('index :', index);
		if(rolls[index] === 'X') {
			return this.generateStrikeFrame(rolls[index], rolls[index+1], rolls[index+2]);
		} else if (rolls[index] === '/') {
			return this.generateSpareFrame(rolls[index], rolls[index+1]);
		} else {
			return this.generateStandardFrame(rolls[index], rolls[index+1]);
		}
	}

	static generateStrikeFrame(roll1, roll2, roll3) {
		const roll1Value = this.getValueOfRoll(roll1);
		const roll2Value = this.getValueOfRoll(roll2);
		const roll3Value = this.getValueOfRoll(roll3);
		return [roll1Value, roll2Value, roll3Value];
	}

	static generateSpareFrame(roll1, roll2) {
		const roll1Value = this.getValueOfRoll(roll1);
		const roll2Value = this.getValueOfRoll(roll2);
		return [roll1Value, roll2Value];
	}

	static generateStandardFrame(roll1, roll2) {
		const roll1Value = this.getValueOfRoll(roll1);
		const roll2Value = this.getValueOfRoll(roll2);
		return [roll1Value, roll2Value];
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
	
	static scoreForFrame(frame) {
		console.log('frame :', frame);
		return frame.reduce((acc, curr) => {
			return acc + curr;
		}, 0);
	}
}

module.exports = Bowling;

