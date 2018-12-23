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
 * @param thisArg? - Optional parameter that takes the array to distinct,
 * if using Array.prototype.distinct
 */
Array.prototype.distinct = function<T>(thisArg?: Array<T>): Array<T> {
  let obj = thisArg || this;
  return obj
    .map((el:T) => JSON.stringify(el))
    .filter((value:string, index:number, array:Array<string>) => array.indexOf(value) === index)
    .map((el:string) => JSON.parse(el));
};
