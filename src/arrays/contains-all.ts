declare module "contains-all" {
  export = ContainsAll;
}

declare var ContainsAll: Array<any>;

interface Array<T> {
  containsAll(arr: Array<T>, thisArg?: Array<T>): Boolean;
}

/**
 * @description - This is a function that checks if an array contains all the elements specified
 * @param arr - Array of elements to check if present in the array calling this function
 * @param thisArg - Optional argument referring to the array calling this method if using Array.prototype.containsAll
 * @returns - true if all the elements passed as the argument exist in the array calling this function, else returns false.
 */
Array.prototype.containsAll = function<T>(
  arr: Array<T>,
  thisArg?: Array<T>
): Boolean {
  let status: Boolean = true;
  const obj: Array<T> = thisArg || this;
  const objStr: Array<String> = obj.map((el: T) => JSON.stringify(el));
  arr
    .map(el => JSON.stringify(el))
    .forEach(el => {
      if (!status) return;
      else if (objStr.indexOf(el) === -1) status = false;
    });
  return status;
};
