declare var Distinct: Array<any>;

declare module "distinct" {
  export = Distinct;
}

interface Array<T> {
  distinct(thisArg?: Array<T>): Array<T>;
}

/**@description - This is a function that lets you
 * filter an array to retrieve distinct elements in the array.
 * @returns - The array with distinct elements.
 */
Array.prototype.distinct = function<T>(thisArg?: Array<T>): Array<T> {
  let obj = thisArg || this;
  return obj
    .map(el => JSON.stringify(el))
    .filter((value, index, array) => array.indexOf(value) === index)
    .map(el => JSON.parse(el));
};
