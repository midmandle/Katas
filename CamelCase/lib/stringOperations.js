class StringOperations {
    static toCamelCase(value) {
        if (value.includes('-')) {
            return this._generateCamelCaseString(value, '-');
        }

        if (value.includes('_')) {
            return this._generateCamelCaseString(value, '_');
        }

        return value;
    }

    static _generateCamelCaseString(inputString, separator) {
        const wordsArray = inputString.split(separator);
        const head = wordsArray.slice(0, 1);
        const tail = this.titleCaseWords(wordsArray.slice(1));
        return head + tail.join('', tail);
    }

    static titleCaseWords(wordArray) {
        return wordArray.map((word) => {
            return this.capitalizeFirstLetterOfWord(word);
        });
    }

    static capitalizeFirstLetterOfWord(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}
module.exports = StringOperations;