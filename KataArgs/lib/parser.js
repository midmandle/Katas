class Parser {
    constructor(schema) {
        this.arguments = []
        this.schema = schema;
    }

    parseArgumentList(argsList) {
        argsList.forEach((element, index) => {
            if (this.isFlag(element)) {
                const flagName = element.substr(1);
                if (this.isDefined(flagName)) {
                    const argDef = this.schema.getDefinition(flagName);
                    const argValue = this.getValueForFlag(argsList, index, argDef);
                    this.arguments.push({key: argDef.key, value: argValue});
                } else {
                    throw new Error('Argument is not defined by schema');
                }
            }
        });
    }

    getArg(key) {
        const argValue = this.arguments.find((arg) => arg.key === key);
        return argValue.value;
    }

    getValueForFlag(argsList, index, definition) {
        if(this.isFlag(argsList[index++])) {
            return definition.defaultValue;
        } else {
            return this.getValueForDefinition(definition, argsList[index++]);
        }
    }

    getValueForDefinition(definition, argStringValue) {
        switch(definition.type) {
            case 'string' :
                return argStringValue;
            case 'boolean' :
                return argStringValue === 'true' ? true : false;
            case 'number' :
                return parseInt(argStringValue);
        }
    }

    isFlag(argString) {
        return argString.charAt(0) === '-';
    }

    isDefined(argKey) {
        const argDefinition = this.schema.getDefinition(argKey);
        return argDefinition === undefined ? false : true;
    }
}

module.exports = Parser;