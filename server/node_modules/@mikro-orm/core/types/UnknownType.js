"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownType = void 0;
const StringType_1 = require("./StringType");
class UnknownType extends StringType_1.StringType {
    compareAsType() {
        return 'unknown';
    }
}
exports.UnknownType = UnknownType;
