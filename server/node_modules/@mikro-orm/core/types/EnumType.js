"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumType = void 0;
const Type_1 = require("./Type");
class EnumType extends Type_1.Type {
    getColumnType(prop, platform) {
        return platform.getEnumTypeDeclarationSQL(prop);
    }
    compareAsType() {
        return 'string';
    }
}
exports.EnumType = EnumType;
