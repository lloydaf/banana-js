declare global{
    interface Array<T>{
        strain(fn: Function): T;
    }
}
/**
 * @param fn - The callback function to be executed.
 * @returns - The element strained
 */
Array.prototype.strain = function<T>(this: T[], fn: Function): T{
    let [obj] = this.filter(el=>fn(el));
    return obj;
}

export = "strainer";