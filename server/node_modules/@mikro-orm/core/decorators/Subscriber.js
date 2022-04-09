"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
const metadata_1 = require("../metadata");
function Subscriber() {
    return function (target) {
        const subscribers = metadata_1.MetadataStorage.getSubscriberMetadata();
        subscribers[target.name] = new target();
    };
}
exports.Subscriber = Subscriber;
