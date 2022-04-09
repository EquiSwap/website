"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonType = void 0;
const Type_1 = require("./Type");
const utils_1 = require("../utils");
class JsonType extends Type_1.Type {
    convertToDatabaseValue(value, platform) {
        if (platform.convertsJsonAutomatically(true) || value === null) {
            return value;
        }
        return JSON.stringify(value);
    }
    convertToJSValue(value, platform) {
        if (!platform.convertsJsonAutomatically() && utils_1.Utils.isString(value)) {
            return JSON.parse(value);
        }
        return value;
    }
    getColumnType(prop, platform) {
        return platform.getJsonDeclarationSQL();
    }
}
exports.JsonType = JsonType;
