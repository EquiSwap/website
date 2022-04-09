"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlobType = void 0;
const Type_1 = require("./Type");
class BlobType extends Type_1.Type {
    convertToDatabaseValue(value, platform) {
        return value;
    }
    convertToJSValue(value, platform) {
        if (value instanceof Buffer || !value) {
            return value;
        }
        /* istanbul ignore else */
        if (value.buffer instanceof Buffer) {
            return value.buffer;
        }
        /* istanbul ignore next */
        return Buffer.from(value);
    }
    compareAsType() {
        return 'Buffer';
    }
    getColumnType(prop, platform) {
        return platform.getBlobDeclarationSQL();
    }
}
exports.BlobType = BlobType;
