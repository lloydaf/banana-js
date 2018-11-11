declare var Pipe: Object;
declare module "pipe" {
  export = Pipe;
}
interface Object {
  pipe(fn: Function, ...args: Array<any>): Object;
  pipeAll(...arguments: Array<Function>): Object;
}
/**
 * Function that takes in a function and pipes the object as the first argument to the function
 * @param fn - Takes in a function to pipe the object to
 * @param args - Additional arguments that the function needs
 * @returns - Returns the resultant object of the operation after piping through the function.
 */
Object.prototype.pipe = function(fn: Function,...args:any): Object {
  return fn.apply(fn,[this,...args]);
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
