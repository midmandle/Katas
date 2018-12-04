class Bowling {
	static calculateScore(gameScore) {
		const frames = gameScore.split(' ');
		return frames.reduce((acc, curr, index) => {
			return acc + this.getFrameScore(frames, index);
		}, 0);
	}

	static getFrameScore(frames, index) {
		const currentFrame = frames[index];

		if (this.isBonusFrame(frames, index)) {
			return 0;
		}

		if(currentFrame.includes('X') || currentFrame.includes('/')) {
			return 10 + this.getBonusScore(frames, index);
		}

		return this.getFrameValue(currentFrame);
	}

	static isBonusFrame(frames, index) { 
		console.log('index :', index);
		if (index > 9 && this.isFullGame(frames)) {
			console.log('frames :', frames);
			console.log('index :', index);
			return true;
		}
	}

	static isLastFrame(frames, index) {
		return index === (frames.length - 1);
	}

	static isFullGame(frames) {
		return frames.length >= 10;
	}

	static getBonusScore(frames, index) {
		const currentFrame = frames[index];
		const upcomingRolls = frames.slice(index+1).join('');
		if (currentFrame.includes('X')) {
			// Return the next 2 rolls.
			return this.getRollValue(upcomingRolls[0]) + this.getRollValue(upcomingRolls[1]);
		} else if (currentFrame.includes('/') ) {
			// Return the next 1 roll.
			return this.getRollValue(upcomingRolls[0]);
		}
	}

	static getFrameValue(frame) {
		if (frame === undefined) {
			return 0;
		}

		const rolls = frame.split('');
		return rolls.reduce((acc, curr) => {
			return acc + this.getRollValue(curr);
		}, 0);
	}

	static getRollValue(roll) {
		if (roll === undefined) {
			return 0;
		}

		if (roll === '-') {
			return 0;
		} else if ( roll === 'X' || roll === '/') {
			return 10;
		} else {
			return parseInt(roll);
		}
	}
}

module.exports = Bowling;