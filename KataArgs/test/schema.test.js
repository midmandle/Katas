const expect = require('chai').expect;

const ArgumentDefinition = require('../lib/argumentDefinition');
const Schema = require('../lib/schema');

describe('Schema', () => {
    let argumentDef1;
    let argumentDef2;
    let argumentDef3;
    let schema;

    beforeEach(() => {
        argumentDef1 = new ArgumentDefinition('a', 'boolean', true);
        argumentDef2 = new ArgumentDefinition('b', 'string', '');
        argumentDef3 = new ArgumentDefinition('c', 'number', 0); 
        schema = new Schema();
        schema.addDefinition(argumentDef1);
        schema.addDefinition(argumentDef2);
        schema.addDefinition(argumentDef3);
    });

    it('should add an argument to its list of arguments', () => {
        expect(schema.definitions).eql([
            argumentDef1,
            argumentDef2,
            argumentDef3
        ]);
    });

    it('should accept a list of arguments as a constructor paramenter', () => {
        const testSchema = new Schema([argumentDef1, argumentDef2, argumentDef3]);
        expect(testSchema.definitions).eql([
            argumentDef1,
            argumentDef2,
            argumentDef3
        ]);
    })

    it('should find an argument definition by its key', () => {
        const argDef1 = schema.getDefinition('a');
        expect(argDef1).eql(argumentDef1);

        const argDef2 = schema.getDefinition('b');
        expect(argDef2).eql(argumentDef2);
    });
});