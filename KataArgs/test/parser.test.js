const expect = require('chai').expect;

const ArgumentDefinition = require('../lib/argumentDefinition');
const Schema = require('../lib/schema');
const Parser = require('../lib/parser');

describe('Parser', () => {
    let schema;
    const argsList = ['-a', '-b', 'stringValueB', '-c', '3'];
    const errorArgsList = ['-x'];

    beforeEach(() => {
        const argDef1 = new ArgumentDefinition('a', 'boolean', true);
        const argDef2 = new ArgumentDefinition('b', 'string', '');
        const argDef3 = new ArgumentDefinition('c', 'number', 0);
        const argumentDefinitions = [argDef1, argDef2, argDef3];
        schema = new Schema(argumentDefinitions);
    });

    it('should set a schema via the constructor', () => {
        const parser = new Parser(schema);
        expect(parser.schema).eql(schema);
    });

    it('should identify flags and values from a list of array strings based on a schema', () => {
        const parser = new Parser(schema);
        parser.parseArgumentList(argsList);
        expect(parser.arguments).eql([
            {
                key: 'a',
                value: true
            },
            {
                key: 'b',
                value: 'stringValueB'
            },
            {
                key: 'c',
                value: 3
            }
        ]);
    });

    it('should throw an error if an argument is parsed which isnt defined by the schema', () => {
        const parser = new Parser(schema);
        expect(parser.parseArgumentList.bind(parser, errorArgsList)).to.throw('Argument is not defined by schema');
    });

    it('should allow a user to get the value of an argument', () => {
        const parser = new Parser(schema);
        parser.parseArgumentList(argsList);

        const argumentValueA = parser.getArg('a');
        expect(argumentValueA).eql(true);

        const argumentValueB = parser.getArg('b');
        expect(argumentValueB).eql('stringValueB');

        const argumentValueC = parser.getArg('c');
        expect(argumentValueC).eql(3);
    });
});