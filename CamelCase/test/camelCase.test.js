
const expect = require('chai').expect;
const StringOperations = require('../lib/stringOperations');

describe('CamelCase', () => {
    it('returns an empty string if no input is provided', () => {
        const camelCaseString = StringOperations.toCamelCase('');
        expect(camelCaseString).eqls('');
    });

    it('accepts input with \'-\' separators', () => {
        const camelCaseString = StringOperations.toCamelCase('this-is-a-test');
        expect(camelCaseString).eqls('thisIsATest');
    });

    it('accepts input \'_\' separators', () => {
        const camelCaseString = StringOperations.toCamelCase('this_is_a_test_2');
        expect(camelCaseString).eqls('thisIsATest2');
    });
});