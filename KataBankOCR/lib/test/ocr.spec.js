var chai = require('chai');
var expect = chai.expect;

var Ocr = require('../ocr');

describe('OCR', function() {

    const zeroText = 
        ' _ '+
        '| |'+
        '|_|';

    const oneText = 
        '   '+
        ' | '+
        ' | ';
    
    const twoText = 
        ' _ '+
        ' _|'+
        '|_ ';

    const threeText = 
        ' _ '+
        ' _|'+
        ' _|';

    const fourText = 
        '   '+
        '|_|'+
        '  |';
    
    const fiveText = 
        ' _ '+
        '|_ '+
        ' _|';
    
    const sixText = 
        ' _ '+
        '|_ '+
        '|_|';

    const sevenText = 
        ' _ '+
        '  |'+
        '  |';
    
    const eightText = 
        ' _ '+
        '|_|'+
        '|_|';

    const nineText = 
        ' _ '+
        '|_|'+
        '  |';
    
    it('processChar() should return 0 if given a text zero.', function() {
        const ocrProcessor = new Ocr();

        expect(ocrProcessor.mapEntryCharToValue(zeroText)).to.equal(0);
    });

    it('processChar() should return 1 if given a text one.', function() {
        const ocrProcessor = new Ocr();

        expect(ocrProcessor.mapEntryCharToValue(oneText)).to.equal(1);
    });

    it('processChar() should return 2 if given a text two.', function() {
        const ocrProcessor = new Ocr();

        expect(ocrProcessor.mapEntryCharToValue(twoText)).to.equal(2);
    });

    it('processChar() should return 3 if given a text three.', function() {
        const ocrProcessor = new Ocr();

        expect(ocrProcessor.mapEntryCharToValue(threeText)).to.equal(3);
    });

    it('processChar() should return 4 if given a text four.', function() {
        const ocrProcessor = new Ocr();

        expect(ocrProcessor.mapEntryCharToValue(fourText)).to.equal(4);
    });

    it('processChar() should return 5 if given a text five.', function() {
        const ocrProcessor = new Ocr();

        expect(ocrProcessor.mapEntryCharToValue(fiveText)).to.equal(5);
    });

    it('processChar() should return 6 if given a text six.', function() {
        const ocrProcessor = new Ocr();

        expect(ocrProcessor.mapEntryCharToValue(sixText)).to.equal(6);
    });

    it('processChar() should return 7 if given a text seven.', function() {
        const ocrProcessor = new Ocr();

        expect(ocrProcessor.mapEntryCharToValue(sevenText)).to.equal(7);
    });

    it('processChar() should return 8 if given a text eight.', function() {
        const ocrProcessor = new Ocr();

        expect(ocrProcessor.mapEntryCharToValue(eightText)).to.equal(8);
    });

    it('processChar() should return 9 if given a text nine.', function() {
        const ocrProcessor = new Ocr();

        expect(ocrProcessor.mapEntryCharToValue(nineText)).to.equal(9);
    });

    it('processChar() should throw an ILL error if given an unrecognizable char.', function() {
        const ocrProcessor = new Ocr();

        const garbageChar = 
        '|||'+
        '|||'+
        '|||';

        expect(() => ocrProcessor.mapEntryCharToValue(garbageChar)).to.throw('ILL');
    });
    
    it('extractIndividualNumbers() should take a string entry and return an array of numberChar strings.', function() {
        const ocrProcessor = new Ocr();
        
        const entryLine1 = '   ' + ' _ ' + ' _ ' + '   ' + ' _ ' + ' _ ' + ' _ ' + ' _ ' + ' _ ';
        const entryLine2 = ' | ' + ' _|' + ' _|' + '|_|' + '|_ ' + '|_ ' + '  |' + '|_|' + '|_|';
        const entryLine3 = ' | ' + '|_ ' + ' _|' + '  |' + ' _|' + '|_|' + '  |' + '|_|' + '  |';

        const threeLineEntry = entryLine1 + entryLine2 + entryLine3;
        const returnValue = ocrProcessor.extractIndividualNumbers(threeLineEntry);

        expect(returnValue).to.be.an('array');
        expect(typeof returnValue[0]).to.equal('string');
        expect(returnValue.length).to.equal(9);
        expect(returnValue[0].length).to.equal(9);

        // Entry string contains only | _ and <space> characters.
        returnValue.forEach((extractedChar) => {
            expect(/^[_| ]*$/.test(extractedChar)).to.be.true;
        });

        expect(returnValue[0]).to.be.equal(oneText);
        expect(returnValue[1]).to.be.equal(twoText);
        expect(returnValue[2]).to.be.equal(threeText);
        expect(returnValue[3]).to.be.equal(fourText);
        expect(returnValue[4]).to.be.equal(fiveText);
        expect(returnValue[5]).to.be.equal(sixText);
        expect(returnValue[6]).to.be.equal(sevenText);
        expect(returnValue[7]).to.be.equal(eightText);
        expect(returnValue[8]).to.be.equal(nineText);       
    });

    it('processEntry() should return the numeric representation of the entry text.', function() {
        const ocrProcessor = new Ocr();
        
        const entryLine1 = '   ' + '   ' + '   ' + '   ' + '   ' + '   ' + '   ' + '   ' + '   '
        const entryLine2 = ' | ' + ' | ' + ' | ' + ' | ' + ' | ' + ' | ' + ' | ' + ' | ' + ' | ';
        const entryLine3 = ' | ' + ' | ' + ' | ' + ' | ' + ' | ' + ' | ' + ' | ' + ' | ' + ' | ';

        const threeLineEntry = entryLine1 + entryLine2 + entryLine3;
        const returnValue = ocrProcessor.processEntry(threeLineEntry);
    
        expect(returnValue).to.be.a('number');
        expect(returnValue.toString().length).to.equal(9);
        expect(returnValue).to.equal(111111111);
    });

    it('convertTextNumbersToEntryValue() should take an array of text numbers and return a number.', function() {
        const ocrProcessor = new Ocr();
        expect(ocrProcessor.convertTextNumbersToEntryValue([oneText, twoText, threeText, fourText, fiveText, sixText, sevenText, eightText, nineText])).to.equal(123456789);
    });
});