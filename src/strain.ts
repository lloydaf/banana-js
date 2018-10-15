declare var Strain: Array<any>;

declare module "strain" {
  export = Strain;
}

interface Array<T> {
  strain(fn: Function, thisArg?: Array<T>): T;
}

/**@description - This is a function that lets you
 * search an array for an element and return that element.
 * @param fn - The callback function to be executed.
 * @param thisArg? - Optional parameter that takes the array to strain, 
 * if using Array.prototype.strain
 * @returns - The element strained
 */
Array.prototype.strain = function<T>(fn: Function, thisArg?: Array<T>): T {
  let obj = thisArg || this;
  let [response] = obj.filter(el => fn(el));
  return response;
};
