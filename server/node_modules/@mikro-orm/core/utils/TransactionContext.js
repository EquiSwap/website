"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionContext = void 0;
const async_hooks_1 = require("async_hooks");
class TransactionContext {
    constructor(em) {
        this.em = em;
        this.id = this.em.id;
    }
    /**
     * Creates new TransactionContext instance and runs the code inside its domain.
     */
    static async createAsync(em, next) {
        const context = new TransactionContext(em);
        return new Promise((resolve, reject) => {
            this.storage.run(context, () => next().then(resolve).catch(reject));
        });
    }
    /**
     * Returns current TransactionContext (if available).
     */
    static currentTransactionContext() {
        return this.storage.getStore();
    }
    /**
     * Returns current EntityManager (if available).
     */
    static getEntityManager() {
        const context = TransactionContext.currentTransactionContext();
        return context ? context.em : undefined;
    }
}
exports.TransactionContext = TransactionContext;
TransactionContext.storage = new async_hooks_1.AsyncLocalStorage();
