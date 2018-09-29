var chai = require('chai');
var expect = chai.expect;

var Ocr = require('../ocr');

describe('OCR', function() {
    it('processChar() should return 0 if given a text zero.', function() {
        const ocrProcessor = new Ocr();

        const zero = 
        ' _ '+
        '| |'+
        '|_|';

        expect(ocrProcessor.processChar(zero)).to.equal(0);
    });

    it('processChar() should return 1 if given a text one.', function() {
        const ocrProcessor = new Ocr();

        const one = 
        '   '+
        ' | '+
        ' | ';

        expect(ocrProcessor.processChar(one)).to.equal(1);
    });

    it('processChar() should return 2 if given a text two.', function() {
        const ocrProcessor = new Ocr();

        const two = 
        ' _ '+
        ' _|'+
        '|_ ';

        expect(ocrProcessor.processChar(two)).to.equal(2);
    });

    it('processChar() should return 3 if given a text three.', function() {
        const ocrProcessor = new Ocr();

        const three = 
        ' _ '+
        ' _|'+
        ' _|';

        expect(ocrProcessor.processChar(three)).to.equal(3);
    });

    it('processChar() should return 4 if given a text four.', function() {
        const ocrProcessor = new Ocr();

        const four = 
        '   '+
        '|_|'+
        '  |';

        expect(ocrProcessor.processChar(four)).to.equal(4);
    });

    it('processChar() should return 5 if given a text five.', function() {
        const ocrProcessor = new Ocr();

        const five = 
        ' _ '+
        '|_'+
        ' _|';

        expect(ocrProcessor.processChar(five)).to.equal(5);
    });

    it('processChar() should return 6 if given a text six.', function() {
        const ocrProcessor = new Ocr();

        const six = 
        ' _ '+
        '|_ '+
        '|_|';

        expect(ocrProcessor.processChar(six)).to.equal(6);
    });

    it('processChar() should return 7 if given a text seven.', function() {
        const ocrProcessor = new Ocr();

        const seven = 
        ' _ '+
        '  |'+
        '  |';

        expect(ocrProcessor.processChar(seven)).to.equal(7);
    });

    it('processChar() should return 8 if given a text eight.', function() {
        const ocrProcessor = new Ocr();

        const eight = 
        ' _ '+
        '|_|'+
        '|_|';

        expect(ocrProcessor.processChar(eight)).to.equal(8);
    });

    it('processChar() should return 9 if given a text nine.', function() {
        const ocrProcessor = new Ocr();

        const nine = 
        ' _ '+
        '|_|'+
        '  |';

        expect(ocrProcessor.processChar(nine)).to.equal(9);
    });

    it('processChar() should throw an ILL error if given an unrecognizable char.', function() {
        const ocrProcessor = new Ocr();

        const garbageChar = 
        '|||'+
        '|||'+
        '|||';

        expect(() => ocrProcessor.processChar(garbageChar)).to.throw('ILL');
    });    
});