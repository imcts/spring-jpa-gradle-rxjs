export default class Enum {
    constructor(...keys) {
        for(const key of keys)
            this[key] = Symbol(key);
    }
};