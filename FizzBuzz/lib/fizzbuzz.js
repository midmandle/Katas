class FizzBuzz {
    static generate(upTo) {
        const generatedNumbers = [];
        for(let i = 1; i <= upTo; i++) {
            generatedNumbers.push(i);
        }

        return this.process(generatedNumbers);
    }

    static process(inputNumbers) {
        return inputNumbers.map((input) => {
            return this.getValueString(input);
        });
    }

    static getValueString(value) {
        if (this.isFizzBuzz(value)) {
            return 'FizzBuzz';
        }

        if (this.isFizz(value)) {
            return 'Fizz';
        }

        if (this.isBuzz(value)) {
            return 'Buzz';
        }

        return value.toString();
    }

    static isFizz(value) {
        return value % 3 === 0;
    }

    static isBuzz(value) {
        return value % 5 === 0;
    }

    static isFizzBuzz(value) {
        return this.isFizz(value) && this.isBuzz(value);
    }
}

module.exports = FizzBuzz;