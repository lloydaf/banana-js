declare var Strain: Array<any>;

declare module "strain" {
  export = Strain;
}

interface Array<T> {
  strain(fn: Function): T;
}

/**@description - This is a function that lets you
 * search an array for an element and return that element.
 * @param fn - The callback function to be executed.
 * @returns - The element strained
 */
Array.prototype.strain = function<T>(this: T[], fn: Function): T {
  let [obj] = this.filter(el => fn(el));
  return obj;
};
