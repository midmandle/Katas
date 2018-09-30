class Ocr {

    constructor(lineLength) {
        this.LINE_LENGTH = lineLength;
        this.ZERO_CHAR = 
            ' _ '+
            '| |'+
            '|_|';

        this.ONE_CHAR = 
            '   '+
            ' | '+
            ' | ';

        this.TWO_CHAR = 
            ' _ '+
            ' _|'+
            '|_ ';

        this.THREE_CHAR = 
            ' _ '+
            ' _|'+
            ' _|';
        
        this.FOUR_CHAR = 
            '   '+
            '|_|'+
            '  |';
        
        this.FIVE_CHAR = 
            ' _ '+
            '|_ '+
            ' _|';
        
        this.SIX_CHAR = 
            ' _ ' + 
            '|_ ' +
            '|_|';
        
        this.SEVEN_CHAR = 
            ' _ '+
            '  |'+
            '  |';
        
        this.EIGHT_CHAR = 
            ' _ '+
            '|_|'+
            '|_|';
        
        this.NINE_CHAR = 
            ' _ '+
            '|_|'+
            '  |';
    }

    processEntry(threeLineEntry) {
        let individualNumbersAsText = this.extractIndividualNumbers(threeLineEntry);
        let entryAsNumericValue = this.convertTextNumbersToEntryValue(individualNumbersAsText);
        return entryAsNumericValue;
    }

    extractIndividualNumbers(threeLineEntry) {
        const lineLength = 27;
        //get top of chars.
        const top = threeLineEntry.slice(0, lineLength);
        //get middle of chars.
        const middle = threeLineEntry.slice(lineLength, lineLength*2);
        //get bottom of char.
        const bottom = threeLineEntry.slice(lineLength*2, lineLength*3);

        let individualNumbers = [];

        for (let i = 0; i < 9; i++) {
                let startIndex = i * 3;
                let endIndex = startIndex + 3;
                individualNumbers[i] = top.slice(startIndex, endIndex);
                individualNumbers[i] += middle.slice(startIndex, endIndex);
                individualNumbers[i] += bottom.slice(startIndex, endIndex);
        }

        return individualNumbers;
    }

    convertTextNumbersToEntryValue(individualNumbersAsText) {
        let individualNumericValue = individualNumbersAsText.map((stringValue) => {
            return this.mapEntryCharToValue(stringValue);
        });

        let entryAsStringOfNumbers = individualNumericValue.join('');
        let entryAsNumericValue = Number.parseInt(entryAsStringOfNumbers);
        return entryAsNumericValue;
    }

    mapEntryCharToValue(numberChar) {
        switch(numberChar) {
            case(this.ZERO_CHAR) :
                return 0;
            case(this.ONE_CHAR) :
                return 1;
            case(this.TWO_CHAR) :
                return 2;
            case(this.THREE_CHAR) :
                return 3;
            case(this.FOUR_CHAR) :
                return 4;
            case(this.FIVE_CHAR) :
                return 5;
            case(this.SIX_CHAR) :
                return 6;
            case(this.SEVEN_CHAR) :
                return 7;
            case(this.EIGHT_CHAR) :
                return 8;
            case(this.NINE_CHAR) :
                return 9;
            default:
                throw new Error('ILL');
        }
    }
}


module.exports = Ocr;