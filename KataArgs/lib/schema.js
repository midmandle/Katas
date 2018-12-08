class Schema {
    constructor(argumentDefs) {
        this.definitions = argumentDefs || [];
    }

    addDefinition(argumentDefinition) {
        this.definitions.push(argumentDefinition);
    }

    getDefinition(key) {
        return this.definitions.find((argDefinition) => argDefinition.key === key);
    }
}

module.exports = Schema;