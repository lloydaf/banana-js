declare var Pipe: Object;
declare module "pipe" {
  export = Pipe;
}
interface Object {
  pipe(fn: Function, thisArg?: Object): Object;
  pipeAll(...arguments: Array<Function>): Object;
}
/**
 * @param fn - Takes in a function to pipe the object to
 * @returns - Returns the resultant object of the operation after piping through the function.
 */
Object.prototype.pipe = function(fn: Function): Object {
  let obj = this;
  return fn(obj);
};

/**
 * @param arguments - Takes in multiple comma separated functions to pipe one after the other
 * @returns - Returns the resultant object after piping through all the functions.
 */
Object.prototype.pipeAll = function(): Object {
  let obj = this;
  for (let i = 0; i < arguments.length; ++i) {
    obj = arguments[i](obj);
  }
  return obj;
};
