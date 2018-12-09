class Parser {
    constructor(schema) {
        this.arguments = []
        this.schema = schema;
    }

    getArgument(key) {
        const argValue = this.arguments.find((arg) => arg.key === key);
        return argValue.value;
    }

    parseArgumentList(argsList) {
        argsList.forEach((element, index) => {
            this.parseArgument(argsList, element, index);
        });
    }

    parseArgument(argsList, arg, index) {
        if (this._isFlag(arg)) {
            const flagName = arg.substr(1);
            this._storeArgumentIfDefined(flagName, argsList, index);
        }
    }

    _storeArgumentIfDefined(flagName, argsList, index) {
        if (this._isDefinedInSchema(flagName)) {
            this._storeArgumentWithValue(flagName, argsList, index);
        }
        else {
            throw new Error('Argument is not defined by schema');
        }
    }

    _storeArgumentWithValue(flagName, argsList, index) {
        const argDef = this.schema.getDefinition(flagName);
        const argValue = this._getValueForFlag(argsList, index, argDef);
        this.arguments.push({ key: argDef.key, value: argValue });
    }

    _getValueForFlag(argsList, index, definition) {
        if(this._isFlag(argsList[index+1])) {
            return definition.defaultValue;
        } else {
            return this._getValueForDefinition(definition, argsList[index+1]);
        }
    }

    _getValueForDefinition(definition, argStringValue) {
        switch(definition.type) {
            case 'string' :
                return argStringValue;
            case 'boolean' :
                return argStringValue === 'true' ? true : false;
            case 'number' :
                return parseInt(argStringValue);
        }
    }

    _isFlag(argString) {
        return argString.charAt(0) === '-';
    }

    _isDefinedInSchema(argKey) {
        const argDefinition = this.schema.getDefinition(argKey);
        return argDefinition === undefined ? false : true;
    }
}

module.exports = Parser;