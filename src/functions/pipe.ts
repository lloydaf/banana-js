declare var Pipe: Object;
declare module "pipe" {
  export = Pipe;
}
interface Object {
  pipe(fn: Function, ...args: Array<any>): Object;
  pipeAll(...fns: Array<any>): Object;
}
/**
 * @description - This is a function that takes in a function and pipes the object as the first argument to the function
 * @param fn - Takes in a function to pipe the object to
 * @param args - Additional arguments that the function needs
 * @returns - Returns the resultant object of the operation after piping through the function.
 */
Object.prototype.pipe = function(fn: Function, ...args: any): Object {
  return fn.apply(fn, [this, ...args]);
};

/**
 * @description - This is a function that takes in multiple functions and their arguments to execute one after the other,
 * passing the result of the previous function as the first argument to the next function.
 * @param arguments - Takes in multiple comma separated functions to pipe one after the other,
 * passing the result of the previous function as the first argument to the next function.ß
 * @returns - Returns the resultant object after piping through all the functions.
 */
Object.prototype.pipeAll = function(...fns: Array<any>): Object {
  let obj = this;
  for (let i = 0; i < fns.length; ++i) {
    const [func, ...args] = fns[i];
    obj = func(obj, ...args);
  }
  return obj;
};
