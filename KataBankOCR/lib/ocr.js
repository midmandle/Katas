class Ocr {

    constructor() {
        this.zeroChar = 
            ' _ '+
            '| |'+
            '|_|';

        this.oneChar = 
            '   '+
            ' | '+
            ' | ';

        this.twoChar = 
            ' _ '+
            ' _|'+
            '|_ ';

        this.threeChar = 
            ' _ '+
            ' _|'+
            ' _|';
        
        this.fourChar = 
            '   '+
            '|_|'+
            '  |';
        
        this.fiveChar = 
            ' _ '+
            '|_'+
            ' _|';
        
        this.sixChar = 
            ' _ ' + 
            '|_ ' +
            '|_|';
        
        this.sevenChar = 
            ' _ '+
            '  |'+
            '  |';
        
        this.eightChar = 
            ' _ '+
            '|_|'+
            '|_|';
        
        this.nineChar = 
            ' _ '+
            '|_|'+
            '  |';
    }

    processChar(numberChar) {
        switch(numberChar) {
            case(this.zeroChar) :
                return 0;
            case(this.oneChar) :
                return 1;
            case(this.twoChar) :
                return 2;
            case(this.threeChar) :
                return 3;
            case(this.fourChar) :
                return 4;
            case(this.fiveChar) :
                return 5;
            case(this.sixChar) :
                return 6;
            case(this.sevenChar) :
                return 7;
            case(this.eightChar) :
                return 8;
            case(this.nineChar) :
                return 9;
            default:
                throw new Error('ILL');
        }
    }
}


module.exports = Ocr;