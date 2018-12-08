const expect = require('chai').expect;

const ArgumentDefinition = require('../lib/argumentDefinition');

describe('ArgumentDefinition', () => {
    it('should set the definition with a key, type and defaultValue via the constructor', () => {
        const key = 'a';
        const type = 'boolean';
        const defaultValue = true;
        const argDef = new ArgumentDefinition(key, type, defaultValue);
        expect(argDef.key).eql(key);
        expect(argDef.type).eql(type);
        expect(argDef.defaultValue).eql(defaultValue);
    });
});