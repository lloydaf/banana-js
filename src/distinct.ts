declare var Distinct: Array<any>;

declare module "distinct" {
  export = Distinct;
}

interface Array<T> {
  distinct(): T[];
}

/**@description - This is a function that lets you
 * filter an array to retrieve distinct elements in the array.
 * @returns - The array with distinct elements.
 */
Array.prototype.distinct = function<T>(this: T[]): T[] {
  return this.filter((value, index, array) => array.indexOf(value) === index);
};
