const expect = require('chai').expect;
const FizzBuzz = require('../lib/fizzbuzz');

let testNumberArray = [];
let fizzBuzzOutput = [];

describe('FizzBuzz', () => {

    it('should replace any numbers divisbile by 3 with the word \'Fizz\'', () => {
        testNumberArray = [3];
        fizzBuzzOutput = FizzBuzz.process(testNumberArray);
        expect(fizzBuzzOutput).eql(['Fizz']);
    });

    it('should replace any numbers divisibler by 5 with the word \'Buzz\'', () => {
        testNumberArray = [5];
        fizzBuzzOutput = FizzBuzz.process(testNumberArray);
        expect(fizzBuzzOutput).eql(['Buzz']);
    });

    it('should replace any numbers divisble by both 3 and 5 with the word \'FizzBuzz\'', () => {
        testNumberArray = [15];
        fizzBuzzOutput = FizzBuzz.process(testNumberArray);
        expect(fizzBuzzOutput).eql(['FizzBuzz']);
    });

    it('should generate the fizz buzz numbers between 1 and n', () => {
        const n = 10;
        const fizzBuzzOutput = FizzBuzz.generate(n);
        expect(fizzBuzzOutput).eql(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz']);
    });
});