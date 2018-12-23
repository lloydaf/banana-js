
/**@description - This is a function that lets you
 * find the intersection of two arrays.
 * @returns - The intersection of the arrays.
 * @param first - Parameter that takes the first array to find intersection of.
 * @param second - Parameter that takes the second array to find intersection of.
 */

const intersection = function<T>(
  first: Array<T>,
  second?: Array<T>
): Array<T> {
  return first
    .map((el:T) => JSON.stringify(el))
    .filter((one:string) => second.map(el => JSON.stringify(el)).indexOf(one) > -1)
    .map((el:string) => JSON.parse(el));
};

export {intersection};